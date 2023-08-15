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
  showValue,
  showPath,
  label,
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

    if (showPath) {
      svg
        .append('path')
        .attr('fill', '#E0E6EE')
        .attr('fill-opacity', 0.5)
        .attr('d', arc.endAngle(twoPi))
    }

    if (showValue === true) {
      svg
        .append('text')
        .attr('class', `${s['GoalChart__progress-label']} goal-progress-label`)
        .attr('y', label ? "-0.5em" : "0em") // shift upwards when both label and value are present
        .text('0%');
      if (label) {
        svg
          .append('text')
          .attr('class', `${s['GoalChart__label']} goal-label`)
          .attr('y', "1.5em") // positioned below the progress label
          .text(label)
      }
    }

    svg
      .append('path')
      .attr('class', 'foreground')
      .attr('fill-opacity', 1)
      .attr('d', arc.cornerRadius(50).endAngle(0))
  }, [arc, border, twoPi, width, height, showValue])

  useLayoutEffect(() => {
    const svg = d3.select(ref.current)
    const startPercent = 0
    const endPercent = data / 100
    const step = endPercent < startPercent ? -0.01 : 0.01
    const mainArc = svg.select('.foreground')
    const labelValue = showValue ? svg.select(`.goal-progress-label`) : undefined;
    const labelText = label ? svg.select(`.${s['GoalChart__label']}`) : undefined;

    let count = Math.abs((endPercent - startPercent) / 0.01)
    let progress = startPercent

    if(labelText) {
      if (labelText.node() != null) {
        const BCrect = (labelText.node() as any).getBoundingClientRect();
        labelText.attr('x', -BCrect.width / 2);
      }
    }

    
    const updateProgress = (pgrs: number): void => {
      const fill = colorScale(pgrs).css()

      mainArc.attr('d', arc.endAngle(twoPi * pgrs)).attr('fill', fill)
      if(labelValue) {
        labelValue.attr('fill', fill).text(`${Math.round(pgrs * 100)}%`)
        if (labelValue.node() != null) {
          const BCrect = (labelValue.node() as any).getBoundingClientRect()
          labelValue.attr('x', -BCrect.width / 2)
        }
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
      {children}
    </div>
  )
}

export default GoalChart
