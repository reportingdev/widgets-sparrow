import chroma from 'chroma-js'
import * as d3 from 'd3'
import { merge } from 'lodash'
import { tip as d3tip } from 'd3-v6-tip'

import { curveChartConfig } from '../config'
import { createTooltipHtml } from '../utils'
import {aggregateData} from '../../../../../utils/aggregations'
import s from '../style/chart.module.css'

class CurveChart {
  private readonly ref: any
  private cache: any

  constructor (ref: any) {
    this.ref = ref
  }

  render (
    w: number,
    containerHeight: number,
    data: any,
    propsConfig: any = {}
  ): void {
    const { ref, cache } = this
    const container = d3.select(ref)
    container.classed(s.ChartContainer, true)
    const config = merge({}, curveChartConfig, propsConfig)
    const { datasets,dimension } = data
    const computePercentile = (myData: number[], testValue: number): number =>{
      // Sort the data
      let sortedData = [...myData].sort((a, b) => a - b);
  
      // Find the number of values below the testValue and the number of values equal to testValue
      let belowCount = sortedData.filter(val => val < testValue).length;
      let equalCount = sortedData.filter(val => val === testValue).length;
  
      // Compute percentile
      const percentile = (belowCount + 0.5 * equalCount) / sortedData.length * 100;
      return Math.round(percentile);
  }
    // get the range of values to test against
    const range = dimension?.data ?? [0,50,100];

    // get the aggrogate of our test point
    const testDataset = datasets?.[0]
    const rawPoint = aggregateData(datasets?.[0]?.data ?? [0],datasets?.[0]?.aggregationType ?? 'total');
    const value = computePercentile(range,rawPoint);

    // define the below, avg, and above chart points
    const averageRange = [0, 35, 70]
    const { margin, chart, scales } = config
    const colorScale = chroma.scale(chart.colors).domain(averageRange)
    const lineColorScale = chroma.scale(chart.lineColors).domain(averageRange)
    const { aspectRatio } = chart
    const h = aspectRatio === 'auto' ? containerHeight : w / aspectRatio
    const labels = ['Below average', 'Average', 'Above average']

    if (w === 0 || w == null) {
      return
    }

    const width = w - margin.left - margin.right
    const height = h - margin.top - margin.bottom
    const x = d3.scaleLinear().range([5, width - 5])
    const y = d3.scaleLinear().range([height, 0])
    // function for normal curve Y-axis position
    const normalY = (x: number, mean: number = 50, stdDev: number = 17): any =>
      Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
    // generating curve data
    const dataSet = new Array(101)
      .fill('')
      .map((_, i) => ({ x: i, y: normalY(i) }))
    const prevData = cache ?? 0

    x.domain(d3.extent(dataSet, (d) => d.x) as any)
    y.domain(d3.extent(dataSet, (d) => d.y) as any)

    const color = colorScale(value).hex()
    const lineColor = lineColorScale(value).hex()

    // define the area
    const area = d3
      .area()
      .x((d: any) => x(d.x))
      .y0(height)
      .y1((d: any) => y(d.y ?? 0))

    // define the line
    const valueline = d3
      .line()
      .x((d: any) => x(d.x))
      .y((d: any) => y(d.y ?? 0))

    let svg = container.select('svg')
    let g = svg.select('g.chart-group')

    if (svg.empty()) {
      svg = container.append('svg')
      g = svg.append('g').attr('class', 'chart-group')
    }

    svg
      .attr('width', +width + +margin.left + +margin.right)
      .attr('height', +height + +margin.top + +margin.bottom)
    g.attr(
      'transform',
      `translate(${margin.left as string},${margin.top as string})`
    )

    let gradient = svg.select('#gradientId')
    if (gradient.empty()) {
      gradient = svg
        .append('defs')
        .append('linearGradient')
        .attr('id', 'gradientId')
        .attr('x1', 0.5)
        .attr('y1', 0)
        .attr('x2', 0.5)
        .attr('y2', 1)
    }

    const stops = gradient.selectAll('stop').data([
      // 40 & 12 here are hex opacity
      { offset: '0%', color: `${color as string}40` },
      { offset: '100%', color: `${color as string}12` }
    ])

    stops
      .enter()
      .append('stop')
      .merge(stops as any)
      .transition()
      .duration(config.animation.duration)
      .attr('offset', (d) => d.offset)
      .attr('stop-color', (d) => d.color)

    const offset = { y: -17, x: 0 }

    const leftTween = (): any => {
      const prev = +x(prevData) + +margin.left + +offset.x
      const current = +x(value) + +margin.left + +offset.x
      return (t: number) => {
        const fn = d3.interpolateNumber(prev, current)

        return `${fn(t)}px`
      }
    }

    const topTween = () => {
      return (t: number) => {
        const fn = d3.interpolateNumber(prevData, value)
        const pos = +y(normalY(fn(t))) + +offset.y + +margin.top

        return `${String(pos)}px`
      }
    }

    const lineHeightTween = () => {
      return (t: number) => {
        const fn = d3.interpolateNumber(prevData, value)
        const pos = +y(normalY(fn(t))) + +margin.top - 2

        return `${height - pos}px`
      }
    }

    const dotClass = "curve-dot-static";

    const dot = container.selectAll(`.${dotClass}`);
    if (dot.empty()) {
        container.append('div').attr('class', `${dotClass} ${s['curve-dot']}`);
      }
    
    // then proceed with your transition logic...
    container.select(`.${dotClass}`)
        .transition()
        .duration(config.animation.duration)
        .style('background-color', color as any)
        .styleTween('left', leftTween as any)
        .styleTween('top', topTween as any);
      

    const verticalLine = container
      .selectAll(`.${s.curveLine}`)
      .data([s.curveLine])

    verticalLine
      .enter()
      .append('div')
      .merge(verticalLine as any)
      .attr('class', (d) => d)
      .transition()
      .duration(config.animation.duration)
      .style('border-color', lineColor as any)
      .styleTween('left', leftTween as any)
      .styleTween('top', topTween as any)
      .styleTween('height', lineHeightTween as any)

    let xAxisEl = g.select(`.${s['x-axis']}`)
    const xAxis = d3
      .axisBottom(x)
      .tickValues([0, 25, 50, 75, 100])
      .tickSize(0)
      .tickPadding(10)

    if (scales.x.hide !== true) {
      if (xAxisEl.empty()) {
        xAxisEl = g
          .append('g')
          .attr('class', `${s.axis} ${s['x-axis']} ${s.curveXAxis}`)
          .attr('transform', `translate(0, ${height})`)
      }

      xAxisEl
        .transition()
        .duration(config.animation.duration)
        .attr('transform', `translate(0, ${height})`)

      xAxisEl.call(xAxis)
    } else {
      xAxisEl.remove()
    }

    const areaEl = g.selectAll(`.${s.area}`).data([dataSet])
    const lineEl = g.selectAll(`.${s.line}`).data([dataSet])

    areaEl
      .enter()
      .append('path')
      .attr('class', s.area)
      .merge(areaEl as any)
      .transition()
      .duration(config.animation.duration)
      .attr('fill', 'url(#gradientId)')
      .attr('d', area as any)

    lineEl
      .enter()
      .append('path')
      .attr('class', s.line)
      .merge(lineEl as any)
      .transition()
      .duration(config.animation.duration)
      .attr('stroke', color as any)
      .attr('d', valueline as any)

    this.cache = value

    const ordinalSuffix =(number:number)=> {
      const j = number % 10,
            k = number % 100;
      if (j === 1 && k !== 11) {
          return number + "st";
      }
      if (j === 2 && k !== 12) {
          return number + "nd";
      }
      if (j === 3 && k !== 13) {
          return number + "rd";
      }
      return number + "th";
  }

    if (testDataset && config.tooltip.hide !== true) {
      const tooltipData:any = [{
        color: color,
        label: `${testDataset.label ?? 'Your data'}:`,
        value: `${ordinalSuffix(value)} percentile`
        }
      ]
      
      labels.map((label: string, i: number) => ({
        color: chart.colors[i],
        label,
        value: `${averageRange[i]} - ${
          (averageRange[i + 1]) ?? 100
        }`
      }))

      const tip = d3tip()
        .attr('class', s.tooltipWrap)
        .offset([-15, 0])

        .html(function () {
          const tooltipHtml = createTooltipHtml(tooltipData)
          return tooltipHtml
        })

      svg.call(tip)

      svg
        .selectAll(`.${s.area}, .${s.line}`)
        .on('mouseover', (e, d: any) => {
          tip.show(e, d)
        })
        .on('mouseleave', (e, d: any) => {
          tip.hide(e, d)
        })
    } else {
      svg.selectAll(`.${s.area}, .${s.line}`).on('mouseover', () => {})
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

export default CurveChart
