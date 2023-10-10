import * as d3 from 'd3'
import { merge } from 'lodash'
import { tip as d3tip } from 'd3-v6-tip'
import { donutChartConfig } from '../config'

import s from '../style/chart.module.css'
import { applyStylesObject, createTooltipHtml } from '../utils'

class DonutChart {
  private readonly ref: any
  private cache: any

  constructor (ref: any) {
    this.ref = ref
  }

  render (
    width: number,
    containerHeight: number,
    dataProp: any,
    propsConfig: any = {}
  ): void {
    const { ref } = this
    const container = d3.select(ref)
    container.classed(`${s.ChartContainer} ${s.Donut}`, true)
      .style("margin-top", "20px");

    const rawData = dataProp?.datasets
    const config = merge({}, donutChartConfig, propsConfig)
    const { chart, tooltip, centerLabel } = config
    const { arcWidth, barOpacity, padAngle, innerCircle } = chart
    const { aspectRatio } = chart
    const height =
      aspectRatio === 'auto' ? containerHeight : width / aspectRatio
      width = height;
    const outerRadius = width / 2
    const innerRadius = outerRadius - arcWidth
    const createPie = d3
      .pie()
      .padAngle(padAngle)
      .value((d: any) => {
        return sumArray(d.data)
      })
      .sort(null)
    
    const sumArray = (arr:number[]) => arr.reduce((a, b) => a + b, 0);

    const createArc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)
    const data = rawData.filter(({ data }: any) => data.length > 0)

    const mergeWithFirstEqualZero = (first: any, second: any): any => { //todo ask alex wtf this does
      const secondSet = new Set()

      second.forEach(function (d: any) {
        secondSet.add(d.label)
      })

      const onlyFirst = first
        .filter(function (d: any) {
          return !secondSet.has(d.label)
        })
        .map(function (d: any) {
          return { ...d, data: [0] }
        })

      const sortedMerge = d3
        .merge([second, onlyFirst])
        .sort(function (a: any, b: any) {
          const aIndex = data.findIndex(({ label }: any) => a.label === label)
          const bIndex = data.findIndex(({ label }: any) => b.label === label)
          return aIndex - bIndex
        })

      return sortedMerge
    }

    if (width === 0 || width == null) {
      return
    }
    const pieData = createPie(data)
    const prevPieData = createPie(this.cache ?? [])
    const total = d3.sum(pieData, (item) => item.value as any)
    const prevTotal = d3.sum(prevPieData, (item) => item.value as any)

    let svg = container.select('svg')
    let group = container.select('.chart-group')

    if (svg.empty()) {
      svg = container.append('svg')
      group = svg.append('g').attr('class', 'chart-group')
      group.append('g').attr('class', 'slices')
    }

    svg.attr('width', width).attr('height', height)
    group.attr('transform', `translate(${outerRadius} ${outerRadius})`)

    const arcTween = (d: any, i: number): any => {
      const interpolator = d3.interpolate(prevPieData[i], d)

      return (t: any) => {
        return createArc(interpolator(t))
      }
    }

    const emptyPieData = createPie([
      { label: 'empty', data: [1], backgroundColor: '#E0E7EE' }
    ] as any)
    const emptyGroup = group.selectAll('g.empty').data(emptyPieData)
    if (total === 0) {
      const emptyGroupWithUpdate = emptyGroup
        .enter()
        .append('g')
        .attr('class', 'empty')

      const emptyPath = emptyGroupWithUpdate
        .append('path')
        .merge(emptyGroup.select('path.emptyArc'))

      emptyPath
        .attr('class', 'emptyArc')
        .attr('fill', (d: any) => d.data.backgroundColor)
        .transition()
        .duration(config.animation.duration)
        .attrTween('d', arcTween as any)
    } else {
      emptyGroup.remove()
    }

    let centerLabelGroup = group.select(`.${s.centerLabelGroup}`)
    let labelText = centerLabelGroup.select(`.${s.donutLabel}`)
    let valueText = centerLabelGroup.select(`.${s.donutValue}`)

    const getScale = (titles: number[], space: number): number => {
      let approximateTitleWidth = Math.max(...titles) * 5
      if (config.centerLabel.hideTitle === true) {
        approximateTitleWidth = 20
      }
      return Math.min(space / approximateTitleWidth, 2);
    }

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

    const was = mergeWithFirstEqualZero(data, oldData)
    const is = mergeWithFirstEqualZero(oldData, data)

    let slice = svg
      .select('.slices')
      .selectAll('path')
      .data(createPie(was), key)

    slice
      .enter()
      .insert('path')
      .attr('class', (_, i) => `slice slice-${i}`)
      .attr('fill', function (d: any) {
        return d.data.backgroundColor
      })
      .attr('opacity', barOpacity)
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
          // @ts-expect-error
          return createArc(this?._current)
        }
      } as any)

    slice = svg.select('.slices').selectAll('path').data(createPie(data), key)

    slice
      .exit()
      .transition()
      .delay(config.animation.duration)
      .duration(0)
      .remove()

    slice.attr('opacity', barOpacity)

    this.cache = data

    const innerGroup = group.selectAll('g.inner').data(pieData)

    if (innerCircle != null && total > 0) {
      const { backgroundColor, arcWidth, opacity } = innerCircle
      const createArc = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(+innerRadius + +arcWidth)

      const innerGroupWithUpdate = innerGroup
        .enter()
        .append('g')
        .attr('class', 'inner')

      const innerPath = innerGroupWithUpdate
        .append('path')
        .merge(innerGroup.select('path.innerArc'))

      innerPath
        .attr('class', 'innerArc')
        .attr('fill', backgroundColor)
        .attr('d', createArc as any)
        .attr('opacity', opacity)
        .on('mouseover', (_, d) => {
          svg.select(`.slice-${d.index}`).dispatch('mouseover')
        })
        .on('mouseleave', (_, d) => {
          svg.select(`.slice-${d.index}`).dispatch('mouseleave')
        })
    } else {
      innerGroup.remove()
    }

    if (centerLabel.hide !== true) {
      if (centerLabelGroup.empty()) {
        centerLabelGroup = group.append('text').attr('class', s.centerLabelGroup)

        if (config.centerLabel.hideTitle !== true) {
          labelText = centerLabelGroup
            .append('tspan')
            .attr('class', `${s.donutLabel}`)
            .attr('x', 0)
            .attr('dy', '-0.25em')
            .text('Total')
        }

        valueText = centerLabelGroup
          .append('tspan')
          .attr('x', 0)
          .attr('dy', '1.25em')
          .attr('class', `${s.donutValue}`)
      }

      if (config.centerLabel.hideTitle === true) {
        labelText.remove()
        valueText.attr('dy', 4)
      } else if (labelText.empty()) {
        valueText.remove()
        labelText = centerLabelGroup
          .append('tspan')
          .attr('class', `${s.donutLabel}`)
          .attr('x', 0)
          .attr('dy', '-0.25em')
          .text('Total')
        valueText = centerLabelGroup
          .append('tspan')
          .attr('x', 0)
          .attr('dy', '1.25em')
          .attr('class', `${s.donutValue}`)
      }

      valueText
        .transition()
        .duration(200)
        .tween('text', function () {
          const selection = d3.select(this)

          const interpolator = d3.interpolateNumber(prevTotal, total)

          return function (t) {
            selection.text(Math.round(interpolator(t)))
          }
        })

      const { titleStyles, valueStyles } = config.centerLabel ?? {}
      // disable scale if font-size provided from config
      const isFontSizeProvided =
        valueStyles?.['font-size'] != null || titleStyles?.['font-size'] != null

      applyStylesObject(labelText, titleStyles)
      applyStylesObject(valueText, valueStyles)

      if (!isFontSizeProvided) {
        const centerLabelScale = getScale(['Total'.length], innerRadius)
        centerLabelGroup.attr('transform', `scale(${centerLabelScale})`)
      }

      const updateCenterLabel = (label: string, value: any): void => {
        centerLabelGroup
          .transition()
          .duration(200)
          .attr('opacity', 0)
          .on('end', () => {
            labelText.text(label)
            valueText.text(value)
            if (!isFontSizeProvided) {
              const centerLabelScale = getScale(
                [label.length, `${value as string}`.length],
                innerRadius
              )
              centerLabelGroup.attr('transform', `scale(${centerLabelScale})`)
            }
            centerLabelGroup.transition().duration(200).attr('opacity', 1)
          })
      }

      slice
        .on('mouseover.centerLabel', (e, d: any) => {
          d3.select(e.currentTarget).classed(s.hovered, true)
          const label = d.data.label
          const value = sumArray(d?.data?.data ?? [0]);
          updateCenterLabel(label, value)
        })
        .on('mouseleave.centerLabel', (e) => {
          d3.select(e.currentTarget).classed(s.hovered, false)
          updateCenterLabel('Total', total)
        })
    } else {
      centerLabelGroup.remove()
    }

    if (tooltip.hide !== true) {
      const tip = d3tip()
        .attr('class', s.tooltipWrap)
        .offset([-15, 0])
        .html(function (_: any, d: any) {
          const { backgroundColor, data, label } = d.data
          const tooltipHtml = createTooltipHtml([
            {
              color: backgroundColor,
              value: sumArray(data),
              label
            }
          ] as any)
          return tooltipHtml
        })

      svg.call(tip)

      slice
        .on('mouseover.tooltip', (e, d: any) => {
          d3.select(e.currentTarget).classed(s.hovered, true)
          tip.show(e, d)
        })
        .on('mouseleave.tooltip', (e, d: any) => {
          d3.select(e.currentTarget).classed(s.hovered, false)
          tip.hide(e, d)
        })
    }

    let loader = container.select('.group-loader')
    let loaderG = loader.select('g')
    if ((config.loader?.show ?? false) === true) {
      if (loader.empty()) {
        loader = svg
          .append('g')
          .attr('class', 'group-loader')
          .attr('width', width)
          .attr('height', height)
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

      loader.attr('width', width).attr('height', height)
      loaderG.attr('transform', `translate(${width / 2}, ${height / 2})`)
    } else {
      loader.remove()
    }
  }
}

export default DonutChart
