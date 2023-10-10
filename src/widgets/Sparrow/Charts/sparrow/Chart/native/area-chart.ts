import { applyStylesObject, createLine, getAxisLabels, handleShowBadge } from '../utils'
import { merge } from 'lodash'
import * as d3 from 'd3'
import { areaChartConfig } from '../config'
import {
  addBarTip,
  createScaleBand,
  createScaleLinear,
  generateChartData,
  getMaxDatasetValue,
  getMinDatasetValue,
  getYAxis
} from '../utils'

import s from '../style/chart.module.css'
import { interpolatePath } from 'd3-interpolate-path'

class AreaChart {
  private readonly ref: any
  private renderedLines = 0

  constructor (ref: any) {
    this.ref = ref
  }

  render (
    width: number,
    containerHeight: number,
    data: any,
    propsConfig: any
  ): void {
    const { ref, renderedLines } = this
    const config = merge({}, areaChartConfig, propsConfig)
    const { datasets, labels } = data
    const simpleLabels = config?.scales?.x?.formatLabel ? labels.map(config.scales.x.formatLabel) : labels; 

    const { margin, chart } = config
    const { aspectRatio, showBadge } = chart
    const height =
      aspectRatio === 'auto' ? containerHeight : width / aspectRatio
    const container = d3.select(ref)
    container.classed(s.ChartContainer, true)

    if (width === 0 || width == null) {
      return
    }
    const maxY = config.scales.y.max ?? getMaxDatasetValue(datasets)
    const minY = config.scales.y.min ?? getMinDatasetValue(datasets)

    let minYDomain = minY
    let maxYDomain = maxY

    if (config.scales.y.setUnreachableValues as boolean) {
      const diff = maxY - minY === 0 ? 10 : maxY - minY
      minYDomain = minY - diff < 0 ? 0 : minY - diff
      maxYDomain = +maxY + +diff
    }

    const x = createScaleBand(simpleLabels, [margin.left, width - margin.right])

    const marginTop =
      showBadge === true ? (margin.top as number) + 30 : margin.top
    const y = createScaleLinear(
      [minYDomain, maxYDomain],
      [height - margin.bottom, marginTop]
    )

    // define the area
    const area = d3
      .area()
      .x((d: any) => (x(d.x) as number) + x.bandwidth() / 2)
      .y0(height - margin.bottom)
      .y1((d: any) => y(d.y ?? 0))

    // define the line
    const valueline = createLine(x, y)

    let svg = container.select('svg')
    let g = svg.select('g.chart-group')

    if (svg.empty()) {
      svg = container.append('svg')
      g = svg.append('g').attr('class', 'chart-group')
    }

    svg.select('defs').remove()
    const defs = svg.append('defs')

    svg
      .attr('width', width + +margin.left + +margin.right)
      .attr('height', height + +marginTop + +margin.bottom)
    g.attr(
      'transform',
      `translate(${margin.left as string},${marginTop as string})`
    )

    let yAxisEl = svg.select(`.${s['y-axis']}`)
    let xAxisEl = svg.select(`.${s['x-axis']}`)

    if ((config.scales.x.hide ?? false) !== true) {
      if (xAxisEl.empty()) {
        xAxisEl = svg
          .append('g')
          .attr('class', `${s.axis} ${s['x-axis']}`)
          .attr('transform', `translate(0,${height - margin.bottom})`)
      }

      const { labelSpace: xLabelSpace } = config.scales.x
      const shownLabels = getAxisLabels(width, xLabelSpace, simpleLabels.length)
      const tickValues =
        config.scales.x.labelOverflow === 'hide'
          ? simpleLabels.filter((_: any, i: any) => shownLabels.includes(i))
          : simpleLabels
      xAxisEl.call((grp) =>
        grp
          .transition()
          .duration(config.animation.duration)
          .attr('transform', `translate(0,${height - margin.bottom})`)
          .call(
            // @ts-expect-error
            d3.axisBottom(x).tickSizeOuter(0).tickValues(tickValues)
          )
      )
    } else {
      xAxisEl.remove()
    }

    if ((config.scales.y.hide ?? false) !== true) {
      if (yAxisEl.empty()) {
        yAxisEl = svg.append('g')
      }

      const { labelSpace: yLabelSpace } = config.scales.y
      yAxisEl.call(
        getYAxis({
          y,
          offset: margin.left,
          ticks: (height - margin.bottom) / yLabelSpace,
          transition: config.animation.duration,
          preSign: config.scales.y.preSign,
          postSign: config.scales.y.postSign
        })
      )
      yAxisEl.select('.domain').remove()
    } else {
      yAxisEl.remove()
    }
    const chartData = datasets.map(({ data }: any) =>
      generateChartData(simpleLabels, data)
    )

    const lineEl = svg.selectAll(`.${s.line}`).data(chartData)
    lineEl
      .enter()
      .append('path')
      .attr('class', (_, i: any) => `${s.line} ${s.line}-${i as string}`)
      .merge(lineEl as any)
      .attr('opacity', config.chart.lineOpacity)
      .transition()
      .duration(config.animation.duration)
      .attr('stroke', (_, i) => datasets[i].backgroundColor)
      .attrTween('d', function attrTween (d): any {
        if (d === undefined) return null
        const previous = d3.select(this).attr('d')
        const current = valueline(d) ?? ''
        return interpolatePath(previous, current)
      })

    const areaEl = svg.selectAll(`.${s.area}`).data(chartData)

    datasets.forEach((set: any, i: number) => {
      const gradientId = `gradient${i}`
      defs
        .append('linearGradient')
        .attr('id', gradientId)
        .attr('x1', 0.5)
        .attr('y1', 0)
        .attr('x2', 0.5)
        .attr('y2', 1)
        .selectAll('stop')
        .data([
          // 33 here is hex opacity
          { offset: '0%', color: `${set.backgroundColor as string}33` },
          { offset: '100%', color: `${set.backgroundColor as string}00` }
        ])
        .enter()
        .append('stop')
        .attr('offset', (d) => d.offset)
        .attr('stop-color', (d) => d.color)
    })

    areaEl
      .enter()
      .append('path')
      .attr('class', (_, i: any) => `${s.area} ${s.area}-${i as string}`)
      .merge(areaEl as any)
      .transition()
      .duration(config.animation.duration)
      .attr('fill', (_, i) => {
        const gradientId = `gradient${i}`
        return `url(#${gradientId})`
      })
      .attrTween('d', function attrTween (d): any {
        if (d === undefined) return null
        const previous = d3.select(this).attr('d')
        const current = area(d as any) ?? ''
        return interpolatePath(previous, current)
      })

    lineEl
      .exit()
      .transition()
      .duration(config.animation.duration / 2)
      .attr('opacity', 0)
      .on('end', function onTransitionEnd () {
        d3.select(this).remove()
      })
    areaEl
      .exit()
      .transition()
      .duration(config.animation.duration / 2)
      .attr('opacity', 0)
      .on('end', function onTransitionEnd () {
        d3.select(this).remove()
      })

    datasets.forEach((_: any, i: any) => {
      if (i < renderedLines) return
      const clipPath = svg
        .append('clipPath')
        .attr('id', `rectClip-${i as string}`)
        .append('rect')
        .attr('width', 0)
        .attr('height', height + 4)
        .attr('x', margin.left)

      const currentLine = svg.select(`.${s.line}-${i as string}`)
      const currentArea = svg.select(`.${s.area}-${i as string}`)

      currentArea.attr('clip-path', `url(#rectClip-${i as string})`)
      currentLine.attr('clip-path', `url(#rectClip-${i as string})`)
      clipPath
        .transition('clip-path')
        .duration(config.animation.duration * 2)
        .attr('width', width)
        .on('end', function onTransitionEnd () {
          currentLine.attr('clip-path', '')
          currentArea.attr('clip-path', '')
          d3.select(`#rectClip-${i as string}`).remove()
          d3.select(this).remove()
        })
    })

    this.renderedLines = datasets.length

    if (config.tooltip.hide !== true && config.loader?.show !== true) {
      svg.call(
        addBarTip({
          x: x,
          y,
          offset: { y: -11, x: x.bandwidth() / 2 },
          labels: labels,
          displayLabels: simpleLabels,
          datasets: datasets,
          container: ref,
          height,
          margin,
          formatValue: config.tooltip.formatValue,
          formatLabel: config.tooltip.formatLabel,
          formatTitle: config.tooltip.formatTitle,
          pointDatasets: datasets,
          showLine: true,
          showInsideContainer: config.tooltip.showInsideContainer
        })
      )
    } else {
      container.select(`.${s.Tip}`).remove()
      container.selectAll(`.${s['comparison-dot']}`).remove()
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

    handleShowBadge(svg, showBadge, width)
  }
}

export default AreaChart
