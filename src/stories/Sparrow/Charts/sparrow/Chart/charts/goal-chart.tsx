import React, { useRef, useLayoutEffect, FC } from 'react'
import chroma from 'chroma-js'
import * as d3 from 'd3'

import { GoalChartProps as Props } from './types'

import s from '../style/chart.module.css'

const GoalChart: FC<Props> = ({
  width,
  height,
  data,
  children,
  border = 5,
  stepColors,
  useBackground,
  imgSrc,
  imgGap = 0,
  showValue
}) => {
  const colorScale = chroma.scale(stepColors)

  const radius = Math.min(width, height) / 2
  const outerRadius = radius - border

  const arc = d3
    .arc()
    .startAngle(0)
    .innerRadius(radius)
    .outerRadius(outerRadius)
  const twoPi = Math.PI * 2

  const ref = useRef(null)

  useLayoutEffect(() => {
    const startX = -width / 2
    const startY = -height / 2
    d3.select(ref.current).select('svg.progress').remove()
    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('class', 'progress')
      .attr('viewBox', `${startX} ${startY} ${width} ${height}`)
      .style('position', 'absolute')

    if (imgSrc == null || imgSrc === '') {
      svg
        .append('path')
        .attr('fill', '#E0E6EE')
        .attr('fill-opacity', 0.5)
        .attr('d', arc.endAngle(twoPi))
    }

    if (showValue === true) {
      svg
        .append('text')
        .attr('class', s['GoalChart__progress-label'])
        .text('0%')
    }

    svg
      .append('path')
      .attr('class', 'foreground')
      .attr('fill-opacity', 1)
      .attr('d', arc.cornerRadius(50).endAngle(0))
  }, [arc, border, imgSrc, twoPi, width, height, showValue])

  useLayoutEffect(() => {
    const svg = d3.select(ref.current)
    const startPercent = 0
    const endPercent = data / 100
    const step = endPercent < startPercent ? -0.01 : 0.01
    const mainArc = svg.select('.foreground')
    const label = svg.select(`.${s['GoalChart__progress-label']}`)
    let count = Math.abs((endPercent - startPercent) / 0.01)
    let progress = startPercent

    const updateProgress = (pgrs: number): void => {
      const fill = colorScale(pgrs).css()

      mainArc.attr('d', arc.endAngle(twoPi * pgrs)).attr('fill', fill)
      label.attr('fill', fill).text(`${Math.round(pgrs * 100)}%`)
      if (label.node() != null) {
        const BCrect = (label.node() as any).getBoundingClientRect()
        label.attr('x', -BCrect.width / 2)
      }
    }

    const loop = (): void => {
      updateProgress(progress)
      if (count > 0) {
        count -= 1
        progress += step
        window.requestAnimationFrame(loop)
      }
    }

    window.requestAnimationFrame(loop)
  }, [data, arc, colorScale, twoPi, height, border])

  const imageSize = width - (border + imgGap) * 2
  return (
    <div
      className={s.GoalChart}
      style={{ width, height, position: 'relative' }}
      ref={ref}
    >
      {useBackground === true && (
        <div
          style={{ backgroundColor: stepColors[0] }}
          className={s.GoalChart__background}
        />
      )}
      {imgSrc != null && imgSrc !== '' && (
        <img
          className={s.GoalChart__image}
          style={{ width: imageSize, height: imageSize }}
          src={imgSrc}
          alt='goal'
        />
      )}
      {children}
    </div>
  )
}

export default GoalChart
