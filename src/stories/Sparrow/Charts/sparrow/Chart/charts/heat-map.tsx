import React, { useLayoutEffect, FC } from 'react'
import classnames from 'classnames'
import * as d3 from 'd3'
import { HeatMapDataType } from './types'

import s from '../style/chart.module.css'
import { merge } from 'lodash'
import { heatmapConfig } from '../config'
import { useContainerSize } from '../hooks'

const setLabelsHovered = (day: number, hour: number, value: boolean): void => {
  d3.selectAll(`.${s.dayLabel}--${day}, .${s.timeLabel}--${hour}`).classed(
    s.hovered,
    value
  )
}

const HeatMap: FC<any> = ({ data, config: propsConfig }) => {
  const config = merge({}, heatmapConfig, propsConfig)
  const { margin, chart } = config
  const { offset, color, aspectRatio } = chart
  const { ref, width: w, height: containerHeight } = useContainerSize()
  const h = aspectRatio === 'auto' ? containerHeight : w / aspectRatio

  useLayoutEffect(() => {
    if (w == null || w === 0) return

    const width = w - margin.left - margin.right
    const height = h - margin.top - margin.bottom
    const cellWidth = Math.floor((width - offset.horizontal * 23) / 24)
    const cellHeight = cellWidth
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const times = [
      '12AM',
      '1AM',
      '2AM',
      '3AM',
      '4AM',
      '5AM',
      '6AM',
      '7AM',
      '8AM',
      '9AM',
      '10AM',
      '11AM',
      '12PM',
      '1PM',
      '2PM',
      '3PM',
      '4PM',
      '5PM',
      '6PM',
      '7PM',
      '8PM',
      '9PM',
      '10PM',
      '11PM'
    ]

    const stubData: HeatMapDataType[] = []
    days.forEach((_, dayIndex) => {
      times.forEach((__, timeIndex) => {
        stubData.push({
          day: dayIndex + 1,
          hour: timeIndex + 1,
          value: 0.1
        })
      })
    })

    let svg = d3.select(ref.current).select('svg')
    let g = d3.select(ref.current).select('svg g')

    if (svg.empty()) {
      svg = d3.select(ref.current).append('svg')
      g = svg.append('g')
    }

    svg
      .attr('width', +width + +margin.left + +margin.right)
      .attr('height', height + +margin.top + +margin.bottom)
      .select('g')
      .attr(
        'transform',
        `translate(${margin.left as string},${margin.top as string})`
      )

    let daysEl = g.selectAll(`.${s.dayLabel}`)

    if (daysEl.empty()) {
      daysEl = g
        .selectAll(`.${s.dayLabel}`)
        .data(days)
        .enter()
        .append('text')
        .text((d) => d)
    }

    // Day Labels
    daysEl
      .attr('x', 0)
      .attr('y', (_, i) => i * (cellHeight + +offset.vertical))
      .attr('transform', `translate(-6,${cellHeight / 1.7})`)
      .attr('class', (_, i) => `${s.dayLabel} ${s.dayLabel}--${i + 1}`)

    let timesEl = g.selectAll(`.${s.timeLabel}`)

    if (timesEl.empty()) {
      timesEl = g
        .selectAll(`.${s.timeLabel}`)
        .data(times)
        .enter()
        .append('text')
        .text((d) => d)
    }

    // Time Labels
    timesEl
      .attr('x', (_, i) => i * (cellWidth + +offset.horizontal))
      .attr('y', 0)
      .attr(
        'transform',
        `translate(${cellWidth / 2}, ${
          (cellHeight + +offset.vertical) * 7 + +offset.vertical
        })`
      )
      .attr('class', (_, i) => `${s.timeLabel} ${s.timeLabel}--${i + 1}`)

    let cards = d3.select(ref.current).selectAll(`.${s['post-item']}`)

    if (cards.empty()) {
      cards = g
        .selectAll('.hour')
        .data(stubData, (d: string) => d)
        .enter()
        .append('g')
        .attr('class', 'post-wrp') as any

      cards
        .append('rect')
        .attr('class', s['post-item'])
        .attr('rx', 4)
        .attr('ry', 4)
        .attr('width', cellWidth)
        .attr('height', cellHeight)
        .style('fill', color)
        .style('opacity', 0.1)
        .on('mouseover', ((_: MouseEvent, d: HeatMapDataType) => {
          setLabelsHovered(d.day, d.hour, true)
        }) as any)
        .on('mouseout', ((_: MouseEvent, d: HeatMapDataType) => {
          setLabelsHovered(d.day, d.hour, false)
        }) as any)
    }

    svg
      .selectAll('.post-wrp')
      .attr(
        'transform',
        (d: HeatMapDataType) =>
          `translate(${(d.hour - 1) * (cellWidth + +offset.horizontal)}, ${
            (d.day - 1) * (cellHeight + +offset.vertical)
          })`
      )
      .select(`.${s['post-item']}`)
      .attr('width', cellWidth)
      .attr('height', cellHeight)

    if (data != null) {
      const sortedData = data
        .slice()
        .sort((a: any, b: any) =>
          a.day - b.day !== 0 ? a.day - b.day : a.hour - b.hour
        )

      svg
        .selectAll(`.${s['post-item']}`)
        .data(sortedData)
        .transition()
        .duration(config.animation.duration)
        .delay((d: HeatMapDataType) => {
          return (
            (d.hour * config.animation.duration) / 20 +
            (d.day * config.animation.duration) / 3
          )
        })
        .style('fill', color)
        .style('opacity', (d: HeatMapDataType) => d.value)
    }
  }, [
    w,
    h,
    margin.top,
    margin.right,
    margin.bottom,
    margin.left,
    offset.horizontal,
    offset.vertical,
    data,
    color
  ])

  return <div className={classnames(s.ChartContainer, s.HeatMap)} ref={ref} />
}

export default HeatMap
