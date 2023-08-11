import * as d3 from 'd3'
import { merge } from 'lodash'
import { tip as d3tip } from 'd3-v6-tip'

import { divergingChartConfig } from '../config'

import s from '../style/chart.module.css'
import { applyStylesObject, createTooltipHtml } from '../utils'

class DivergingChart {
  private readonly ref: any

  constructor (ref: any) {
    this.ref = ref
  }

  render (
    w: number,
    containerHeight: number,
    data: any,
    propsConfig: any = {}
  ): void {
    const { ref } = this
    const container = d3.select(ref)
    container.classed(s.ChartContainer, true)

    const config = merge({}, divergingChartConfig, propsConfig)
    const { datasets, labels } = data
    const { margin, chart } = config
    const { aspectRatio, barHeight, barPadding } = chart
    const h = aspectRatio === 'auto' ? containerHeight : w / aspectRatio
    const isEmptyYLabels: boolean = datasets.every(
      ({ label }: any) => label == null || label === ''
    )
    const marginLeft = isEmptyYLabels ? 10 : margin.left
    const marginTop = config.scales.x.hide === true ? 0 : margin.top
    const width = w - marginLeft - margin.right
    let height = h - marginTop - margin.bottom
    if (barHeight != null && barHeight !== 0) {
      const stepSize = barHeight / (1 - barPadding)
      height = stepSize * datasets.length + stepSize * barPadding
    }

    if (w === 0 || w == null) {
      return
    }

    const chartData = datasets.map(
      ({ label, data, backgroundColor, total }: any) => {
        const negativeIndex = Math.floor(data.length / 2)
        const isMiddlevalue = (data.length / 2) % 2 !== 0
        const datasetTotal = total ?? d3.sum(data)
        const percentData = data.map(
          (value: number) => (value * 100) / datasetTotal
        )
        const negativeValues = percentData.slice(0, negativeIndex)
        const negativeSum =
          config.chart.isAllPositive !== false ? 0 : d3.sum(negativeValues)
        let x0 = -1 * negativeSum

        if (
          config.chart.isAllPositive === false &&
          isMiddlevalue &&
          data.length > 1
        ) {
          const middleIndex = negativeIndex
          const middleValue = percentData[middleIndex] / 2

          x0 = -1 * (negativeSum + middleValue)
        }

        const boxes = percentData.map((value: number, i: number) => {
          return {
            label: labels[i],
            title: label,
            x0: x0,
            x1: (x0 += value),
            color: backgroundColor[i],
            percentValue: value,
            value: data[i]
          }
        })

        return {
          axisLabel: label,
          boxes
        }
      }
    )

    const minXValue =
      config.scales.x.min ??
      d3.min(chartData, function (d: any) {
        return d.boxes[0]?.x0
      }) ??
      -100

    const maxYValue =
      config.scales.x.max ??
      d3.max(chartData, function (d: any) {
        return d.boxes[labels.length - 1]?.x1
      }) ??
      (100 as any)

    const y = d3
      .scaleBand()
      .range([0, height])
      .padding(barPadding)
      .domain(
        chartData.map(function (d: any) {
          return d.axisLabel
        })
      )

    const x = d3
      .scaleLinear()
      .rangeRound([0, width])
      .domain([minXValue, maxYValue])

    let rootSvg = container.select('svg')
    let svg = rootSvg.select('.chart-container')

    if (rootSvg.empty()) {
      rootSvg = container.append('svg')
      svg = rootSvg.append('g')
    }

    rootSvg
      .attr('width', +width + +marginLeft + +margin.right)
      .attr('height', +height + +marginTop + +margin.bottom)

    svg
      .attr('class', 'chart-container')
      .attr(
        'transform',
        `translate(${marginLeft as string}, ${marginTop as string})`
      )

    const bars = svg.selectAll('.bar').data(chartData)

    bars
      .enter()
      .append('g')
      .merge(bars as any)
      .attr('class', 'bar')
      .transition()
      .duration(config.animation.duration)
      .attr('transform', function (d: any) {
        return `translate(0, ${y(d.axisLabel) ?? 0})`
      })

    bars.exit().remove()

    const boxes = svg
      .selectAll('.bar')
      .selectAll('rect')
      .data(function (d: any) {
        return d.boxes
      })

    boxes
      .enter()
      .append('rect')
      .merge(boxes as any)
      .attr('height', y.bandwidth())
      .style('fill', function (d: any) {
        return d.color
      } as any)
      .style('transition', 'height 0.5s, y 0.5s')
      .transition()
      .duration(config.animation.duration)
      .attr('width', function (d: any) {
        return x(d.x1) - x(d.x0)
      })
      .attr('x', function (d: any) {
        return x(d.x0)
      })

    if (config.tooltip.hide !== true) {
      const tip = d3tip()
        .attr('class', s.tooltipWrap)
        .offset([-15, 0])
        .html(function (_: any, d: any) {
          const { color, label } = d
          const { showPercent } = config.tooltip
          const value = showPercent === true ? d.percentValue : d.value
          const format = showPercent === true ? '0[.]0%' : undefined
          const tooltipHtml = createTooltipHtml(
            [{ color, value, label }] as any,
            format,
            d.title
          )
          return tooltipHtml
        })

      svg.call(tip)

      svg
        .selectAll('.bar rect')
        .on('mouseover', ((e: any, d: any) => {
          const rect = d3.select(e.currentTarget)
          const yPos = y.bandwidth() * -0.1

          rect.attr('height', y.bandwidth() * 1.2).attr('y', yPos)
          tip.show(e, d)
        }) as any)
        .on('mouseleave', (e: any, d: any) => {
          const rect = d3.select(e.currentTarget)

          rect.attr('height', y.bandwidth()).attr('y', 0)
          tip.hide(e, d)
        })
    } else {
      svg
        .selectAll('.bar rect')
        .on('mouseover', () => {})
        .on('mouseleave', () => {})
    }

    const line = svg.selectAll('.chart-line').data([height])

    line
      .enter()
      .append('line')
      .merge(line as any)
      .attr('class', 'chart-line')
      .attr('stroke', '#E0E6EE')
      .transition()
      .duration(config.animation.duration)
      .attr('x1', x(0))
      .attr('x2', x(0))
      .attr('y2', height)

    const xAxis = d3
      .axisTop(x)
      .ticks(config.scales.x.ticks)
      .tickFormat((d) => `${d.toLocaleString()}%`)

    const yAxis = d3.axisLeft(y as any)

    let yAxisEl = svg.select(`.${s['y-axis']}`)
    let xAxisEl = svg.select(`.${s['x-axis']}`)

    if (config.scales.x.hide !== true) {
      if (xAxisEl.empty()) {
        xAxisEl = svg.append('g')
      }

      xAxisEl.call((grp) =>
        grp
          .attr('class', `${s.axis} ${s['x-axis']}`)
          .transition()
          .duration(config.animation.duration)
          // @ts-expect-error
          .call(xAxis)
      )
    } else {
      xAxisEl.remove()
    }

    if (config.scales.y.hide !== true) {
      if (yAxisEl.empty()) {
        yAxisEl = svg.append('g')
      }

      yAxisEl.call((grp) =>
        grp
          .attr('class', `${s.axis} ${s['y-axis']}`)
          .transition()
          .duration(config.animation.duration)
          // @ts-expect-error
          .call(yAxis)
      )
      yAxisEl.select('.domain').remove()
    } else {
      yAxisEl.remove()
    }

    const xAxisTicks = svg.selectAll(`.${s['x-axis']} .tick text`)
    const yAxisTicks = svg.selectAll(`.${s['y-axis']} .tick text`)

    const { styles: xAxisStyles } = config.scales.x
    const { styles: yAxisStyles } = config.scales.y

    applyStylesObject(xAxisTicks, xAxisStyles)
    applyStylesObject(yAxisTicks, yAxisStyles)

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

export default DivergingChart
