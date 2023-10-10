import * as d3 from 'd3'
import { merge } from 'lodash'
import { tip as d3tip } from 'd3-v6-tip'

import { polarChartConfig } from '../config'

import s from '../style/chart.module.css'
import { createTooltipHtml } from '../utils'

class PolarChart {
  private readonly ref: any

  constructor (ref: any) {
    this.ref = ref
  }

  render (width: number, _: number, data: any, propsConfig: any = {}): any {
    const { ref } = this
    const container = d3.select(ref)
    container.classed(`${s.ChartContainer} ${s.Donut}`, true)

    const config = merge({}, polarChartConfig, propsConfig)

    if (width === 0 || width == null) {
      return
    }

    const radius = width / 2
    const { datasets } = data
    const chartData = datasets.map(({ data, backgroundColor, label }: any) => ({
      data,
      color: backgroundColor,
      label
    }))
    const min = config.scales.min
    const max =
      config.scales.max ??
      +(d3.max(datasets.map(({ data }: any) => data)) ?? 50)
    const radialScale = d3
      .scaleLinear()
      .domain([min, max])
      .range([0, radius - 5])
      .nice()
    const ticks = radialScale.ticks()
    const createPie = d3
      .pie()
      .padAngle(0.02)
      .value(function (d: any) {
        return d.data === 0 ? 0 : 1
      })
    const createArcFn = (value: number): any => {
      return d3.arc().innerRadius(2).outerRadius(radialScale(value))
    }

    const mergeWithFirstEqualZero = (first: any, second: any): any => {
      const secondSet = new Set()

      second.forEach(function (d: any) {
        secondSet.add(d.label)
      })

      const onlyFirst = first
        .filter(function (d: any) {
          return !secondSet.has(d.label)
        })
        .map(function (d: any) {
          return { ...d, data: 0 }
        })

      const sortedMerge = d3.merge([second, onlyFirst])
      return sortedMerge
    }

    let svg = container.select('svg')

    if (svg.empty()) {
      svg = container.append('svg')
    }

    svg.attr('width', width).attr('height', width)
    let rectGroup = svg.select('g.rect-group')
    let axisGroup = svg.select('g.pie-axis-group')
    let circlesGroup = svg.select('g.circle-group')

    if (axisGroup.empty()) {
      circlesGroup = svg.append('g').attr('class', 'circle-group')
      rectGroup = svg.append('g').attr('class', 'rect-group')
      axisGroup = svg.append('g').attr('class', 'pie-axis-group')
    }

    const axisCircles = circlesGroup.selectAll('.axis-circle').data(ticks)

    axisCircles
      .enter()
      .append('circle')
      .merge(axisCircles as any)
      .attr('class', 'axis-circle')
      .attr('cx', radius)
      .attr('cy', radius)
      .transition()
      .duration(config.animation.duration)
      .attr('fill', 'none')
      .attr('stroke', '#E0E6EE')
      .attr('r', (d) => (radialScale(d) > 0 ? radialScale(d) : 0))

    axisCircles.exit().remove()

    const axisLabels = axisGroup.selectAll(`.${s.polarAxisText}`).data(ticks)

    axisLabels
      .enter()
      .append('text')
      .merge(axisLabels as any)
      .attr('class', s.polarAxisText)
      .attr('x', radius)
      .transition()
      .duration(config.animation.duration)
      .attr('y', (d) => radius - radialScale(d) + 5)
      .text((d, i) => (i > 0 ? `${d}` : ''))

    axisLabels.exit().remove()

    const rectData: any = []
    axisLabels.selection().each((value, i, group) => {
      // @ts-expect-error
      const bbox = group?.[i]?.getBBox()
      rectData.push({ value, bbox })
    })

    const rectBackground = rectGroup
      .selectAll('.rect-background')
      .data(rectData)

    rectBackground
      .enter()
      .append('rect')
      .merge(rectBackground as any)
      .attr('class', 'rect-background')
      .attr('fill', 'white')
      .attr('x', (d: any) => radius - ((d.bbox.width as number) + 10) / 2)
      .attr('width', (d: any) => (d.bbox.width as number) + 10)
      .attr('height', (d: any) => d.bbox.height)
      .attr('y', (d: any) => radius - radialScale(d.value) - 7)

    rectBackground.exit().remove()

    let group = svg.select('g.slices')

    if (group.empty()) {
      group = svg.append('g').attr('class', 'slices')
    }

    group.attr('transform', `translate(${radius} ${radius})`)

    const key = function (d: any): string {
      return d.data.label
    }

    const oldData = svg
      .select('.slices')
      .selectAll('path')
      .data()
      .map(function (d: any) {
        return d.data
      })

    const was = mergeWithFirstEqualZero(chartData, oldData)
    const is = mergeWithFirstEqualZero(oldData, chartData)

    let slice = svg
      .select('.slices')
      .selectAll('path')
      .data(createPie(was), key)

    slice
      .enter()
      .insert('path')
      .attr('class', (_, i) => `slice slice-${i}`)
      .attr('fill', function (d: any) {
        return d.data.color
      })
      .attr('opacity', config.chart.barOpacity)
      .each(function (d) {
        // @ts-expect-error
        this._current = d
      })

    slice = svg.select('.slices').selectAll('path').data(createPie(is), key)

    slice
      .transition()
      .duration(config.animation.duration)
      .attrTween('d', function (d: any) {
        // @ts-expect-error
        const interpolate = d3.interpolate(this?._current, d)
        return (t: any) => {
          // @ts-expect-error
          this._current = interpolate(t)
          const createArc = createArcFn(interpolate(t).data.data)
          // @ts-expect-error
          return createArc(this?._current)
        }
      } as any)

    slice = svg
      .select('.slices')
      .selectAll('path')
      .data(createPie(chartData), key)

    slice
      .exit()
      .transition()
      .delay(config.animation.duration)
      .duration(0)
      .remove()

    slice.attr('opacity', config.chart.barOpacity)

    if (config.tooltip.hide !== true) {
      const tip = d3tip()
        .attr('class', s.tooltipWrap)
        .offset([-15, 0])
        .html(function (_: any, d: any) {
          const tooltipHtml = createTooltipHtml([
            {
              color: d.data.color,
              value: d.data.data,
              label: d.data.label
            }
          ] as any)
          return tooltipHtml
        })

      svg.call(tip)

      svg
        .selectAll('path.slice')
        .on('mouseover', (e, d: any) => {
          d3.select(e.currentTarget).classed(s.hovered, true)
          tip.show(e, d)
        })
        .on('mouseleave', (e, d: any) => {
          d3.select(e.currentTarget).classed(s.hovered, false)
          tip.hide(e, d)
        })
    } else {
      svg
        .selectAll('path.slice')
        .on('mouseover', (e) => {
          d3.select(e.currentTarget).classed(s.hovered, true)
        })
        .on('mouseleave', (e) => {
          d3.select(e.currentTarget).classed(s.hovered, false)
        })
    }

    svg.selectAll('path.slice').on('click', (_, d: any) => {
      const data = d.data
      const label = d.label
      const handler = config.chart.clickHandler

      if (handler != null) {
        handler({ data, label })
      }
    })

    let loader = container.select('.group-loader')
    let loaderG = loader.select('g')
    if ((config.loader?.show ?? false) === true) {
      if (loader.empty()) {
        loader = svg
          .append('g')
          .attr('class', 'group-loader')
          .attr('width', width)
          .attr('height', width)
        loader
          .append('rect')
          .attr('width', '100%')
          .attr('height', '100%')
          .style('fill', 'rgba(255, 255, 255, 0.7')
        loaderG = loader.append('g')

        loaderG
          .append('circle')
          .attr('class', s.loaderCircle)
          .attr('fill', 'none')
          .attr('r', 20)
          .attr('stroke-width', 3)
          .attr('stroke', config.loader.color)
        loaderG
          .append('text')
          .text(config.loader.label)
          .attr('text-anchor', 'middle')
          .attr('y', 45)
      }

      loader.attr('width', width).attr('height', width)
      loaderG.attr('transform', `translate(${width / 2}, ${width / 2})`)
    } else {
      loader.remove()
    }
  }
}

export default PolarChart
