import * as d3 from 'd3'
import { merge } from 'lodash'
import { tip as d3tip } from 'd3-v6-tip'

import { spiderConfig } from '../config'
import { createTooltipHtml } from '../utils'
import s from '../style/chart.module.css'

class CurveChart {
  private readonly ref: any

  constructor (ref: any) {
    this.ref = ref
  }

  render (
    w: number,
    containerHeight: number,
    rawData: any,
    propsConfig: any = {}
  ): void {
    const { ref } = this
    const container = d3.select(ref)
    container.classed(s.ChartContainer, true)

    if (w === 0 || w == null) {
      return
    }

    const config = merge({}, spiderConfig, propsConfig)
    const { margin, chart } = config
    const { labels, datasets } = rawData
    const adaptedData = datasets.map(
      ({ label, data, backgroundColor }: any) => {
        const axes = labels.map((lab: string, i: number) => ({
          name: lab,
          label: lab,
          value: data[i],
          backgroundColor
        }))
        return {
          name: label,
          label,
          axes
        }
      }
    )

    const h =
      chart.aspectRatio === 'auto' ? containerHeight : w / chart.aspectRatio
    const width = w - (margin?.right ?? 0) - (margin?.left ?? 0)
    const height = h - (margin?.top ?? 0) - (margin?.bottom ?? 0)
    const radius = Math.min(width / 2, height / 2)
    const radians = 2 * Math.PI
    const totalAxes = labels.length
    const maxValues = adaptedData.reduce((acc: any, curr: any) => {
      curr.axes.forEach((axis: any) => {
        const axisMax = acc[axis.name] ?? 0
        if (axisMax < axis.value) {
          acc[axis.name] = axis.value
        }
      })

      return acc
    }, {})

    const data = adaptedData.map((group: any) => {
      return {
        ...group,
        axes: group.axes.map((axis: any, i: any) => ({
          ...axis,
          coordinates: {
            x:
              (width / 2) *
              (1 -
                (Math.max(axis.value, 0) /
                  ((maxValues[axis.name] ?? 1) * 1.3)) *
                  Math.sin((i * radians) / totalAxes)),
            y:
              (height / 2) *
              (1 -
                (Math.max(axis.value, 0) /
                  ((maxValues[axis.name] ?? 1) * 1.3)) *
                  Math.cos((i * radians) / totalAxes))
          }
        }))
      }
    })

    let main = container.select('svg')
    let svg = main.select('.svg-group')
    let polygonGroup = svg.select('.polygon-group')

    if (main.empty()) {
      main = container.append('svg').attr('width', w).attr('height', h)
      svg = main
        .append('g')
        .attr('class', 'svg-group')
        .attr(
          'transform',
          `translate(${(margin?.left as string) ?? 0}, ${
            (margin?.top as string) ?? 0
          })`
        )
      polygonGroup = svg.append('g').attr('class', 'polygon-group')
    }

    const levels = svg.selectAll('.levels').data(labels)

    levels
      .enter()
      .append('line')
      .classed('levels', true)
      .merge(levels as any)
      .attr('x1', (_, i) => radius * (1 - Math.sin((i * radians) / totalAxes)))
      .attr('y1', (_, i) => radius * (1 - Math.cos((i * radians) / totalAxes)))
      .attr(
        'x2',
        (_, i) => radius * (1 - Math.sin(((i + 1) * radians) / totalAxes))
      )
      .attr(
        'y2',
        (_, i) => radius * (1 - Math.cos(((i + 1) * radians) / totalAxes))
      )
      .attr('stroke', '#DEE4EC')
      .attr('stroke-width', '1px')

    const axes = svg.selectAll('.axis-lines').data(labels)

    axes
      .enter()
      .append('line')
      .merge(axes as any)
      .classed('axis-lines', true)
      .attr('x1', width / 2)
      .attr('y1', height / 2)
      .attr(
        'x2',
        (_, i) => (width / 2) * (1 - Math.sin((i * radians) / totalAxes))
      )
      .attr(
        'y2',
        (_, i) => (height / 2) * (1 - Math.cos((i * radians) / totalAxes))
      )
      .attr('stroke', '#DEE4EC')
      .attr('stroke-width', '1px')

    const polygons = polygonGroup.selectAll('.polygon-areas').data(data)

    polygons
      .enter()
      .append('polygon')
      .merge(polygons as any)
      .classed('polygon-areas', true)
      .transition()
      .duration(config.animation.duration)
      .attr('points', (d: any) => {
        return d.axes.reduce((string: string, d: any) => {
          return `${string}${(d?.coordinates?.x as string) ?? 0},${
            (d?.coordinates?.y as string) ?? 0
          } `
        }, '')
      })
      .attr('stroke-width', '2px')
      .attr('stroke', (d: any) => d.axes[0].backgroundColor)
      .attr('fill', (d: any) => d.axes[0].backgroundColor)
      .attr('fill-opacity', 0.1)
      .attr('stroke-opacity', 0.6)

    const verticesData = data.reduce((prev: any, { axes, label }: any) => {
      const axesWithTitle = axes.map((axis: any) => ({ ...axis, title: label }))
      return [...prev, ...axesWithTitle]
    }, [])
    const vertices = svg.selectAll('.vertices').data(verticesData)

    vertices
      .enter()
      .append('circle')
      .merge(vertices as any)
      .attr('class', 'vertices')
      .attr('r', 4)
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .transition()
      .duration(config.animation.duration)
      .attr('cx', (axis: any) => axis.coordinates.x)
      .attr('cy', (axis: any) => axis.coordinates.y)
      .attr('fill', (axis: any) => axis.backgroundColor)
      .attr('stroke', (axis: any) => axis.backgroundColor)
      .attr('stroke-width', 0)

    const labelsText = svg.selectAll(`.${s['axis-labels']}`).data(labels)
    labelsText
      .enter()
      .append('text')
      .merge(labelsText as any)
      .classed(s['axis-labels'], true)
      .text((d: any) => d)
      .attr('text-anchor', 'middle')
      .attr(
        'x',
        (_, i) => (width / 2) * (1 - 1.3 * Math.sin((i * radians) / totalAxes))
      )
      .attr(
        'y',
        (_, i) => (height / 2) * (1 - 1.1 * Math.cos((i * radians) / totalAxes))
      )

    const tip = d3tip()
      .attr('class', s.tooltipWrap)
      .offset([-15, 0])
      .html(function (_: any, d: any) {
        const tooltipHtml = createTooltipHtml(
          [
            {
              color: d.backgroundColor,
              value: d.value,
              label: d.label
            }
          ] as any,
          undefined,
          d.title
        )
        return tooltipHtml
      })

    svg.call(tip)

    svg
      .selectAll('.vertices')
      .on('mouseover', (e, d: any) => {
        d3.select(e.target)
          .transition()
          .duration(500)
          .attr('stroke-width', 3)
          .attr('fill', '#ffffff')
        tip.show(e, d)
      })
      .on('mouseleave', (e, d: any) => {
        d3.select(e.target)
          .transition()
          .duration(500)
          .attr('stroke-width', 0)
          .attr('fill', (axis: any) => axis.backgroundColor)
        tip.hide(e, d)
      })

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
