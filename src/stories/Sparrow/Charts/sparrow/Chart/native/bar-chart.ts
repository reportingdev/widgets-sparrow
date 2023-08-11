import { merge } from 'lodash'
import * as d3 from 'd3'
import { interpolatePath } from 'd3-interpolate-path'

import { barChartConfig } from '../config'
import {
  addBarTip,
  applyStylesObject,
  createLine,
  createScaleBand,
  createScaleLinear,
  generateChartData,
  getAxisLabels,
  getMaxDatasetValue,
  getMaxStackedValue,
  getMinDatasetValue,
  getYAxis,
  wrapTickText
} from '../utils'

import s from '../style/chart.module.css'

const getMarginBottom = (labels: string[], barWidth: number): number => {
  const charWidth = 6
  const lineHeight = 14.5
  const labelsLength = labels.map((str) => str.length)
  const maxLength = d3.max(labelsLength) ?? 0
  const lines = Math.floor((maxLength * charWidth) / barWidth)

  return lines > 1 ? lines * lineHeight : 2 * lineHeight
}

class BarChart {
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
    const config = merge({}, barChartConfig, propsConfig)
    const { datasets, labels } = data
    const { margin, chart, animation } = config
    const { aspectRatio } = chart
    const isLoading = config.loader?.show ?? false;
    const height = aspectRatio === 'auto' ? containerHeight : width / aspectRatio
      const container = d3.select(ref)
    container.classed(s.ChartContainer, true)

    if (width === 0 || width == null) {
      return
    }
    let svg = container.select('svg')

    if (svg.empty()) {
      svg = container.append('svg')
    }

    svg.attr('width', width).attr('height', height) // TODO height can be forced here (passed from props all the way down)

    const barDatasets = datasets.filter(({ type }: any) => type == null)
    const simpleLabels = config?.scales?.x?.formatLabel ? labels.map(config.scales.x.formatLabel) : labels; 
    const x0 = createScaleBand(simpleLabels, [margin.left, width - margin.right])
    const x1 = createScaleBand(
      barDatasets.map(({ label }: any) => label),
      [0, x0.bandwidth()]
    )
    const marginBottom =
      config.scales.x.labelOverflow === 'hide'
        ? margin.bottom
        : getMarginBottom(simpleLabels, x0.bandwidth())

    const datasetLabels = barDatasets.map(({ label }: any) => label)

    const series = d3.stack().keys(datasetLabels)(
      simpleLabels.map((label: any, i: any) => {
        const data = barDatasets.reduce((acc: any, set: any) => {
          return {
            ...acc,
            [set.label]: set.data[i] > 0 ? set.data[i] : 0
          }
        }, {})
        return {
          x: label,
          ...data
        }
      })
    )

    const maxY =
      config.scales.y.max ??
      (chart.stacked !== false
        ? getMaxStackedValue(series)
        : getMaxDatasetValue(datasets))
    const minY = config.scales.y.min ?? getMinDatasetValue(datasets)

    const marginTop = margin.top

    const y = createScaleLinear(
      [minY / 1.1, maxY * 1.1],
      [height - marginBottom, marginTop]
    )

    const yZeroPos = y(y.domain()[0])

    const valueline = createLine(x0, y)

    if (chart.stacked !== false) {
      svg.selectAll(`.${s.barsGroup}`).remove()
      let chartGroup = svg.select('.chart-group')

      if (chartGroup.empty()) {
        chartGroup = svg.append('g').attr('class', 'chart-group')
      }

      svg
        .selectAll('.chart-group')
        .selectAll('g')
        .data(series)
        .join('g')
        .attr('fill', ((d: any) => {
          const color = datasets.find(({ label }: any) => label === d.key)
            ?.backgroundColor
          return color
        }) as any)
        .selectAll('rect')
        .data((d) => d)
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr('opacity', config.chart.barOpacity)
              .attr('x', (d: any) => x0(d.data.x) as number)
              .attr('width', x0.bandwidth())
              .attr('y', height - marginBottom),
          (update) => update,
          (exit) =>
            exit
              .transition()
              .duration(config.animation.duration / 2)
              .attr('y', height - marginBottom)
              .attr('height', 0)
              .on('end', function transitionEnd () {
                d3.select(this).remove()
              })
        )
        .attr('opacity', (d: any) => {
          return datasetLabels.every((key: any) => d.data[key] === 0) === true
            ? 0.2
            : config.chart.barOpacity
        })
        .on('click', (_, d: any) => {
          const { x: label, ...data } = d.data
          const handler = config.chart.clickHandler

          if (handler != null) {
            handler({ data, label })
          }
        })
        .transition()
        .duration(config.animation.duration)
        .delay((_, i) => i * config.animation.stepDelay)
        .attr('x', (d) => x0(d.data.x as any) as number)
        .attr('y', (d) => {
          if (datasetLabels.every((key: any) => d.data[key] === 0) === true) {
            return yZeroPos - config.scales.y.zeroHeight
          }

          return y(d[1])
        })
        .attr('fill', (d: any) => {
          return datasetLabels.every((key: any) => d.data[key] === 0) === true
            ? '#a2abb7'
            : 'inherit'
        })
        .attr('height', (d: any) => {
          if (datasetLabels.every((key: any) => d.data[key] === 0) === true) {
            return config.scales.y.zeroHeight
          }
          const height = y(d[0] === 0 ? y.domain()[0] : d[0]) - y(d[1])
          return height
        })
        .attr('width', x0.bandwidth())
        .attr('class', (_, i) => `rect-${i}`)
    } else {
      svg.selectAll('.chart-group').remove()
      const barsGroup = svg
        .selectAll(`.${s.barsGroup}`)
        .data(simpleLabels)
        .join(
          (enter) =>
            enter
              .append('g')
              .attr(
                'transform',
                (d: any) => `translate(${(x0(d) ?? 0) as string},0)`
              ),
          (update) => update,
          (exit) =>
            exit
              .transition()
              .duration(config.animation.duration / 2)
              .attr('opacity', 0)
              .on('end', function attrTween () {
                d3.select(this).remove()
              })
        )
        .attr('class', (_, i) => `${s.barsGroup} bars-group-${i}`)

      barsGroup
        .transition()
        .duration(config.animation.duration)
        .attr('transform', (d: any) => `translate(${(x0(d) ?? 0) as string},0)`)

      barsGroup
        .selectAll('rect')
        .data((_, i) =>
          barDatasets.map(({ label, data, backgroundColor }: any) => ({
            label,
            y: data[i] > 0 ? data[i] : 0,
            backgroundColor: Array.isArray(backgroundColor)
              ? backgroundColor[i]
              : backgroundColor
          }))
        )
        .join(
          (enter) =>
            enter
              .append('rect')
              .attr('class', 'rect')
              .attr('opacity', config.chart.barOpacity)
              .attr('x', (d: any) => x1(d.label))
              .attr('width', x1.bandwidth())
              .attr('y', () => height - marginBottom),
          (update) => update,
          (exit) =>
            exit
              .transition()
              .duration(config.animation.duration / 2)
              .attr('y', () => height - marginBottom)
              .attr('height', 0)
              .on('end', function attrTween () {
                d3.select(this).remove()
              })
        )
        .on('click', (_, d: any) => {
          const data = d.y
          const label = d.label
          const handler = config.chart.clickHandler

          if (handler != null) {
            handler({ data, label })
          }
        })
        .transition()
        .duration(config.animation.duration)
        .attr('class', 'rect')
        .attr('opacity', config.chart.barOpacity)
        .attr('y', (d: any) =>
          d.y > 0
            ? y(d.y) - config.scales.y.zeroHeight
            : height - marginBottom - config.scales.y.zeroHeight
        )
        .attr('height', (d: any) =>
          d.y > 0
            ? +yZeroPos - +y(d.y) + +config.scales.y.zeroHeight
            : config.scales.y.zeroHeight
        )
        .attr('x', (d: any) => x1(d.label))
        .attr('width', x1.bandwidth())
        .attr('fill', (d: any) => (d.y > 0 ? d.backgroundColor : '#a2abb7'))
    }

    const lineDatasets = datasets.filter(({ type }: any) => type === 'line')

    const chartData = lineDatasets.map(({ data }: any) =>
      generateChartData(simpleLabels, data)
    )
    const lineEl = svg.selectAll(`.${s.line}`).data(chartData)

    lineEl
      .enter()
      .append('path')
      .attr('class', (_, i) => `${s.line} ${s.line}-${i}`)
      .merge(lineEl as any)
      .transition()
      .duration(animation.duration)
      .attr('stroke', (_, i) => {
        return lineDatasets[i].backgroundColor
      })
      .attr('opacity', config.chart.lineOpacity)
      .attrTween('d', function attrTween (d): any {
        if (d === undefined) return null
        const previous = d3.select(this).attr('d')
        const current = valueline(d) ?? ''
        return interpolatePath(previous, current)
      })

    lineDatasets.forEach((_: any, i: any) => {
      if (i < renderedLines) return
      const clipPath = svg
        .append('clipPath')
        .attr('id', `rectClip-${i as string}`)
        .append('rect')
        .attr('width', 0)
        .attr('height', height + 4)

      const currentLine = svg.select(`.${s.line}-${i as string}`)

      currentLine.attr('clip-path', `url(#rectClip-${i as string})`)
      clipPath
        .transition('clip-path')
        .duration(config.animation.duration * 2)
        .attr('width', width)
        .on('end', function onTransitionEnd () {
          currentLine.attr('clip-path', '')
          d3.select(`#rectClip-${i as string}`).remove()
          d3.select(this).remove()
        })
    })

    this.renderedLines = lineDatasets.length

    lineEl
      .exit()
      .transition()
      .duration(animation.duration / 2)
      .attr('opacity', 0)
      .on('end', function onTransitionEnd () {
        d3.select(this).remove()
      })

    if (config.tooltip.hide !== true && !isLoading) {
      svg.call(
        addBarTip({
          x: x0,
          y,
          offset: { y: -11, x: x0.bandwidth() / 2 },
          labels: labels, 
          displayLabels: simpleLabels,
          datasets: datasets,
          container: ref,
          stacked: chart.stacked,
          height,
          margin,
          formatValue: config.tooltip.formatValue,
          formatLabel: config.tooltip.formatLabel,
          formatTitle: config.tooltip.formatTitle,
          pointDatasets: lineDatasets,
          showLine: lineDatasets.length > 0,
          showInsideContainer: config.tooltip.showInsideContainer
        })
      )
    } else {
      container.select(`.${s.Tip}`).remove()
      container.selectAll(`.${s['comparison-dot']}`).remove()
    }

    let yAxisEl = svg.select(`.${s['y-axis']}`)
    let xAxisEl = svg.select(`.${s['x-axis']}`)

    if ((config.scales.x.hide ?? false) !== true) {
      if (xAxisEl.empty()) {
        xAxisEl = svg
          .append('g')
          .attr('class', `${s.axis} ${s['x-axis']}`)
          .attr('transform', `translate(0,${height - marginBottom})`)
      }

      const { labelSpace: xLabelSpace } = config.scales.x

      const shownLabels = getAxisLabels(width, xLabelSpace, simpleLabels.length)
      const tickValues =
        config.scales.x.labelOverflow === 'hide' // TODO do we still use this? how does this work with spacing?
          ? simpleLabels.filter((_: any, i: any) => shownLabels.includes(i))
          : simpleLabels
      xAxisEl.call((grp) =>
        grp
          .transition()
          .duration(
            config.scales.x.labelOverflow === 'hide'
              ? config.animation.duration
              : 0
          )
          .attr('transform', `translate(0,${height - marginBottom})`)
          .call(
            // @ts-expect-error
            d3.axisBottom(x0).tickSizeOuter(0).tickValues(tickValues)
          )
          .on('end', () => {
            xAxisEl.selectAll('.tick text').call(wrapTickText, x0.bandwidth())
          })
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
          ticks: (height - marginBottom) / yLabelSpace,
          transition: config.animation.duration,
          preSign: config.scales.y.preSign,
          postSign: config.scales.y.postSign
        })
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
    if (isLoading === true) {
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

export default BarChart
