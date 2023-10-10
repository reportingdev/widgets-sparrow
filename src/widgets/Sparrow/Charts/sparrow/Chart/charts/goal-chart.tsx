import React, {
  useRef,
  useLayoutEffect,
  FC,
  useState,
  useMemo,
} from 'react';
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
  showPath,
  label,
  labelColor,
  isLoading,
}) => {
  const colorScale = chroma.scale(stepColors)
  const lastProgressRef = useRef(0);
  const radius = Math.min(width, height) / 2
  const outerRadius = radius - border
  const preciseRound = (num: number, decimalPlaces?: number) => {
    return parseFloat(num.toFixed(decimalPlaces ?? 2));
  }
  const showValue = !children && !isLoading;
  const arc = useMemo(() => d3
    .arc()
    .startAngle(0)
    .innerRadius(radius)
    .outerRadius(outerRadius), [radius, outerRadius])

  const twoPi = Math.PI * 2
  const ref = useRef(null)
  const [backgroundColor, setBackgroundColor] = useState(stepColors[0]);


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
    const valueTextFontSize = Math.round(width / 6);
    const labelTextFontSize = Math.round(width / 12);

    if (showValue === true) {
      svg
        .append('text')
        .attr('class', `${s['GoalChart__progress-label']} goal-progress-label`)
        .attr('style', `font-size: ${valueTextFontSize}px`)
        .attr('dominant-baseline', 'middle')
        .attr('y', label ? "-0.5em" : "0em") // shift upwards when both label and value are present
        .text('0%');
      svg.append("clipPath")  // clip is used to manage long label strings
        .attr("id", "clip")
        .append("rect")
        .attr("x", (-width * 0.8)/2)       // half of width*0.8 to center it
        .attr("y", -height / 2)        // center vertically
        .attr("width", width * 0.8)
        .attr("height", height);
      if (label) {
        console.log(width)
        svg
          .append('text')
          .attr("clip-path", "url(#clip)")
          // .attr('text-anchor',"middle")
          .attr('class', `${s['GoalChart__label']} goal-label`)
          .attr('dominant-baseline', 'middle')
          .attr('y', "1.5em") // positioned below the progress label
          .attr('x', 0)
          .attr('fill', labelColor ?? '#2C304F')
          .attr('style', `font-size: ${labelTextFontSize}px`)
          .text(label)
      }
    }
    svg
      .append('path')
      .attr('class', 'foreground')
      .attr('fill-opacity', 1)
      .attr('d', arc.cornerRadius(50).endAngle(0));

    let loader = svg.select('.group-loader')
    let loaderG = loader.select('g')
    if (isLoading === true) {
      if (loader.empty()) {
        loader = svg
          .append('g')
          .attr('class', 'group-loader');

        loader
          .append('rect')
          .attr('x', startX)  // translate it to the top-left
          .attr('y', startY)  // translate it to the top-left
          .attr('width', '100%')
          .attr('height', '100%')
          .style('fill', 'rgba(255, 255, 255, 0.7)');

        loaderG = loader.append('g')

        loaderG
          .append('circle')
          .attr('class', s.loaderCircle)
          .attr('fill', 'none')
          .attr('r', 20)
          .attr('stroke-width', 3)
          .attr('stroke', '#6B7280');
      }

      loaderG.attr('transform', `translate(${width / 2 + startX}, ${height / 2 + startY})`);
    } else {
      loader.remove()
    }

  }, [arc, twoPi, width, height, showPath, showValue, isLoading, label])

  useLayoutEffect(() => {
    const svg = d3.select(ref.current)
    const startPercent = preciseRound(lastProgressRef.current);
    const endPercent = preciseRound(data / 100);
    const step = endPercent < startPercent ? -0.01 : 0.01;
    const mainArc = svg.select('.foreground')
    const valueText = showValue ? svg.select(`.goal-progress-label`) : undefined;
    const labelText = label ? svg.select(`.${s['GoalChart__label']}`) : undefined;

    let count = preciseRound(Math.abs((endPercent - startPercent) / 0.01), 0)

    let progress = startPercent

    if (labelText) {
      if (labelText.node() != null) {
        const BCrect = (labelText.node() as any).getBoundingClientRect();
        labelText.attr('x', -BCrect.width / 2);
      }
    }

    const updateProgress = (pgrs: number): void => {
      pgrs = preciseRound(pgrs)
      const fill = colorScale(pgrs).css()
      setBackgroundColor(fill);

      mainArc.attr('d', arc.endAngle(twoPi * pgrs)).attr('fill', fill)
      if (valueText) {
        valueText.attr('fill', fill).text(`${Math.round(pgrs * 100)}%`)
        if (valueText.node() != null) {
          const BCrect = (valueText.node() as any).getBoundingClientRect()
          valueText.attr('x', -BCrect.width / 2)
        }
      }
      lastProgressRef.current = pgrs;
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
  }, [data, height, border])

  return (
    <div
      className={s.GoalChart}
      style={{ width, height, position: 'relative' }}
      ref={ref}
    >
      {useBackground === true && (
        <div
          style={{ backgroundColor }}
          className={s.GoalChart__background}
        />
      )}
      {children}
    </div>
  )
}

export default GoalChart
