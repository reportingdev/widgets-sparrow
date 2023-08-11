/* eslint-disable */
import * as d3 from 'd3'
import numeral from 'numeral'
import { DateTime } from 'luxon'
import { ScaleBand, ScaleLinear } from 'd3'
import { range, zipWith } from 'lodash'

import {
  ChartDataType,
  StackedBarDataType,
  DoubleBarDataType
} from './charts/types'
import badgeSvg from '../assets/images/badge.svg'

import s from './style/chart.module.css'
import { openSparrowCharts } from '../utils'

export type d3Element = d3.Selection<d3.BaseType, unknown, d3.BaseType, unknown>

interface Dataset {
  label: string
  data: number[]
  backgroundColor: string
  opacity: number
}
interface TooltipSet {
  color?: string
  label: string
  value: number
}

const badgeSize = {
  width: 154
}

export const getAxisLabels = (
  width: number,
  labelSpace: number,
  labelsLenght: number
) => {
  const labelsAmount = Math.ceil(width / labelSpace)
  const rangeStep = Math.ceil(labelsLenght / labelsAmount)
  const shownLabels = range(0, labelsLenght, rangeStep)
  const excludeLast =
    labelsLenght - shownLabels[shownLabels.length] < rangeStep / 2

  return [...shownLabels, excludeLast ? null : labelsLenght]
}

export const handleShowBadge = (
  svg: d3Element,
  showBadge: boolean,
  containerWidth: number
) => {
  const badge = svg.selectAll('image').data([0])

  if (showBadge) {
    badge
      .enter()
      .append('image')
      .attr('href', badgeSvg)
      .attr('x', containerWidth - badgeSize.width)
      .on('click', openSparrowCharts)
      .style('cursor', 'pointer')
  } else {
    badge.remove()
  }
}

export const applyStylesObject = (
  selection: any,
  styles: { [key: string]: string }
) => {
  Object.entries(styles).forEach(([prop, val]) =>
    selection.style(prop === 'color' ? 'fill' : prop, val)
  )
}

export const createTooltipHtml = (
  sets: TooltipSet[],
  format?: string,
  title?: string,
  isValueFormatted = false
): string => {
  return `<div class="${s.tooltip}">
  ${title != null ? `<div class="${s.tooltipTitle}">${title}</div>` : ''}
  ${sets
    .map(({ color, label, value }) => {
      let formattedValue: string | number = value
      if (!isValueFormatted) {
        formattedValue =
          format != null ? numeral(value / 100).format(format) : value ?? 0
      }
      return `<div class="${s.tooltipRow}">
                ${
                  color
                    ? `<div class="${s.tooltipRowColor}" style="background-color: ${color}"></div>`
                    : ''
                }
                <div class="${s.tooltipRowLabel}">${label}</div>
                <div class="${s.tooltipRowValue}">${formattedValue}</div>
              </div>`
    })
    .join('')}
</div>`
}

export function wrapTickText(text: any, width: any): any {
  text.each(function () {
    // @ts-expect-error
    var text = d3.select(this)
    var words = text.text().split(/\s+/).reverse()
    var word
    var line: any = []
    var lineNumber = 0
    var lineHeight = 1.2 // ems
    var y = text.attr('y')
    var dy = parseFloat(text.attr('dy'))
    var tspan = text
      .text(null)
      .append('tspan')
      .attr('x', 0)
      .attr('y', y)
      .attr('dy', `${dy}em`)
    while ((word = words.pop())) {
      line.push(word)
      tspan.text(line.join(' '))
      if (
        (tspan?.node()?.getComputedTextLength() ?? 0) > width &&
        words.length > 1
      ) {
        line.pop()
        tspan.text(line.join(' '))
        line = [word]
        tspan = text
          .append('tspan')
          .attr('x', 0)
          .attr('y', y)
          .attr('dy', `${++lineNumber * lineHeight + dy}em`)
          .text(word)
      }
    }
  })
}
export const getFormatedDate = (date: number): string => {
  const dateFormat = 'MM/dd'
  return DateTime.fromMillis(date, { zone: 'utc' }).toFormat(dateFormat)
}

export const createScaleBand = (
  labels: string[],
  range: [number, number]
): any => {
  return d3
    .scaleBand()
    .domain(labels)
    .range(range)
    .paddingOuter(0.1)
    .paddingInner(0.3)
}

export const createScaleLinear = (
  domain: [number, number],
  range: [number, number]
): any => {
  return d3.scaleLinear().domain(domain).nice().rangeRound(range)
}

export const getMaxDatasetValue = (
  datasets: Dataset[],
  stubValue: number = 500
): any => {
  const max = d3.max(datasets, (set) => d3.max(set.data)) ?? stubValue

  return max > 0 ? max : stubValue
}
export const getMaxStackedValue = (
  series: any,
  stubValue: number = 500
): any => {
  const max =
    d3.max(series, (d: any) => d3.max(d, (d1: any) => d1[1])) ?? stubValue

  return max > 0 ? max : stubValue
}

export const getMinDatasetValue = (
  datasets: Dataset[],
  stubValue: number = 100
): any =>
  d3.min(datasets, (set) =>
    d3.min(set.data, (value) => (value > 0 ? value : 0))
  ) ?? stubValue

export const createLine = (
  x: ScaleBand<string>,
  y: ScaleLinear<number, number>
): any =>
  d3
    .line()

    .x((d: any) => (x(d.x) ?? 0) + x.bandwidth() / 2)
    .y((d: any) => y(d.y ?? 0))

export const generateChartData = (labels: string[], values: number[]): any => {
  return zipWith(labels, values, (x, y) => ({ x, y: y >= 0 ? y : 0 }))
}

export const adjustXFirst = (axis: d3Element): d3Element =>
  axis
    .selectAll('text')
    .filter((_, i) => i === 0)
    .attr('transform', 'translate(10, 0)')

export const adjustXLast = (axis: d3Element): d3Element => {
  const text = axis.selectAll('text')
  const lastTextIndex = text.size() - 1
  return text
    .filter((_, i) => i === lastTextIndex)
    .attr('transform', 'translate(-10, 0)')
}

interface xAxis {
  x: d3.ScaleBand<Date | string> | d3.ScaleTime<number, number>
  offset: number
  transition?: number
}

export const getXAxis = ({ x, offset, transition = 0 }: xAxis) => (
  g: d3Element
): d3Element =>
  // @ts-expect-error
  g
    .attr('class', `${s.axis} ${s['x-axis']}`)
    .attr('transform', `translate(0,${offset})`)
    .transition()
    .duration(transition)
    .call(
      // @ts-expect-error
      d3
        .axisBottom(x as any)
        .ticks(
          d3.timeDay.filter(
            (d) => d3.timeDay.count((0 as unknown) as Date, d) % 5 === 0
          )
        )
        .tickFormat(d3.timeFormat('%m/%d'))
    )

interface yAxis {
  y: d3.ScaleLinear<number, number>
  offset: number
  ticks: number
  preSign?: string
  postSign?: string
  hideValues?: boolean
  transition?: number
}

export const getYAxis = ({
  y,
  offset,
  ticks,
  preSign = '',
  postSign = '',
  hideValues,
  transition = 0
}: yAxis) => (g: d3Element): d3Element =>
  // @ts-expect-error
  g
    .attr('transform', `translate(${offset}, 0)`)
    .attr('class', `${s.axis} ${s['y-axis']}`)
    .transition()
    .duration(transition)
    .call(
      // @ts-expect-error
      d3
        .axisLeft(y)
        .ticks(ticks)
        .tickFormat((d) => {
          if (hideValues === true) return ''

          const value = Number.isInteger(d) ? numeral(d).format('0.[0]a') : ''

          return `${preSign}${value}${postSign}`
        })
    )

const getDaysDiff = (start: number, end: number): number =>
  DateTime.fromMillis(end, { zone: 'utc' }).diff(
    DateTime.fromMillis(start, { zone: 'utc' }),
    'days'
  ).days

export const getTickValues = (data: number[]): string[] => {
  const LABELS_COUNT = 5
  const dates = data.slice()
  const min = Math.min(...dates)
  const max = Math.max(...dates)
  const totalDays = getDaysDiff(min, max)
  if (totalDays <= LABELS_COUNT) return data.map(getFormatedDate)
  const dayStep = Math.floor(totalDays / LABELS_COUNT)
  const values = []

  for (let i = dayStep; i < totalDays; i += dayStep) {
    values.push(min + i * 24 * 3600 * 1000)
  }

  const lastValue = values[values.length - 1]
  const daysGap = getDaysDiff(lastValue, max)

  const ticks = [min, ...values]

  if (totalDays < 7 || daysGap > 2) ticks.push(max)

  return ticks.map(getFormatedDate)
}

const getParentScale = (node: HTMLElement | null): number => {
  // function to get scale factor for mouse position calculation
  let nextNode = node
  let scaleFactor = 1

  do {
    if (nextNode !== null) {
      const style = getComputedStyle(nextNode);
      const transform = style.transform;
      const zoom = style["zoom"]; // or style.getPropertyValue("zoom");

      const scaleMatch = transform?.split('(')?.[1]?.split(', ')?.[0]
      const scale = +(scaleMatch ?? 1)
      scaleFactor = scale * +zoom
      nextNode = nextNode.parentElement
    }
  } while (nextNode !== document.body && scaleFactor === 1)

  return scaleFactor
}

export const formatTipDate = (date: number): string =>
  DateTime.fromMillis(date, { zone: 'utc' }).toFormat('MMM dd, yyyy')

interface AreaTipProps {
  x: d3.ScaleTime<number, number>
  y: d3.ScaleLinear<number, number>
  offset: { y: number; x: number }
  data: ChartDataType[]
  margin: { top: number; left: number }
  label?: string | { [name: string]: string }
  container: HTMLElement | null
  color: string
}

interface ComparisonAreaTipProps {
  x: d3.ScaleTime<number, number>
  y: d3.ScaleLinear<number, number>
  offset: { y: number; x: number }
  margin: { top: number; left: number }
  label?: string | { [name: string]: string }
  container: HTMLElement | null
  colors: string[]
  height?: number
  data: ChartDataType[][]
  useAxis?: boolean
}

export const addAreaTip = ({
  x,
  y,
  offset,
  data,
  margin,
  label,
  container,
  color
}: AreaTipProps) => (svg: d3Element): void => {
  const bisectDate = d3.bisector((d: any) => d.date).left

  let tip = d3.select(container).select(`.${s.Tip}`)
  let dot = d3.select(container).select(`.${s.dot}`)
  const scale = getParentScale(container)

  if (tip.empty() || dot.empty()) {
    tip = d3
      .select(container)
      .append('div')
      .attr('class', `${s.Tip} ${s['Tip--area']}`)
      .style('opacity', 0)
    dot = svg
      .append('svg:circle')
      .attr('r', 6)
      .attr('class', s.dot)
      .attr('fill', color)
      .style('opacity', 0) as any
  }

  d3.select(container)
    .on('mouseover', () => {
      tip.style('opacity', 1)
      dot.style('opacity', 1)
    })
    .on('mouseout', () => {
      tip.style('opacity', 0)
      dot.style('opacity', 0)
    })
    .on('mousemove', (event) => {
      const mouse = d3.pointer(event)[0] / scale
      const x0 = x.invert(mouse - margin.left).valueOf()
      const i = bisectDate(data, x0, 1)
      const d0 = data[i - 1]
      const d1 = data[i]
      const d =
        d1 != null && x0 - d0.date.valueOf() > d1.date.valueOf() - x0 ? d1 : d0
      dot.attr('transform', `translate(${x(d.date)},${y(d.value)})`)

      tip
        .style('left', `${x(d.date) + margin.left + offset.x}px`)
        .style(
          'top',
          `${y(d.value >= 0 ? d.value : 0) + offset.y + margin.top}px`
        )
        .html(() => {
          const date = d.date != null ? formatTipDate(d.date) : ''
          const { value } = d
          return `
          <div class="${s.Tip__date}">${date}</div>
          <div class="${s.Tip__value}">${numeral(value).format('0,0')}&nbsp;${
            label as string
          }</div>
          `
        })
    })
}

export const addMultipleAreaTip = ({
  x,
  y,
  offset,
  data,
  margin,
  label,
  container,
  height,
  colors,
  useAxis
}: ComparisonAreaTipProps) => (): void => {
  const bisectDate = d3.bisector((d: any) => d.date).left
  let tip = d3.select(container).select(`.${s.Tip}`)
  let verticalLine = d3.select(container).select(`.${s['vertical-line']}`)
  let dateAxisTip = d3.select(container).select(`.${s['date-axis-tip']}`)

  if (tip.empty()) {
    tip = d3
      .select(container)
      .append('div')
      .attr('class', `${s.Tip} ${s.TipComparison}`)
      .style('opacity', 0)
  }

  d3.select(container).selectAll(`.${s['comparison-dot']}`).remove()
  d3.selectAll(`.${s.TipComparison} .${s.TipComparison__row}`).remove()

  data.forEach((_, i) => {
    const color = colors[i]
    d3.select(container)
      .append('div')
      .attr('class', s['comparison-dot'])
      .style('opacity', 0)
      .style('background-color', color)

    const row = tip.append('div').attr('class', s.TipComparison__row)

    row
      .append('div')
      .classed(s.TipComparison__badge, true)
      .style('background-color', color)

    row.append('div').classed(s.TipComparison__value, true)
    row
      .append('div')
      .classed(s.TipComparison__title, true)
      .text(label as string)
  })

  const dots = d3.select(container).selectAll(`.${s['comparison-dot']}`)

  if (verticalLine.empty()) {
    verticalLine = d3
      .select(container)
      .append('div')
      .attr('class', s['vertical-line'])
      .style('opacity', 0)
      .style('height', `${(height ?? 0) + margin.top}px`)
  }

  if (dateAxisTip.empty()) {
    dateAxisTip = d3
      .select(container)
      .append('div')
      .attr('class', s['date-axis-tip'])
      .style('opacity', 0)
  }

  const setTipPosition = (event: Event): void => {
    const scale = getParentScale(container)
    const mouse = d3.pointer(event)[0] / scale
    const x0 = x.invert(mouse - margin.left).valueOf()
    const i = bisectDate(data[0], x0, 1)
    dots.each(function (_, j) {
      const d0 = data[j][i - 1]
      const d1 = data[j][i]
      const d =
        d1 != null && x0 - d0.date.valueOf() > d1.date.valueOf() - x0 ? d1 : d0

      const leftPos = `${x(d.date) + margin.left + offset.x}px`

      d3.select(this)
        ?.style('left', leftPos)
        .style(
          'top',
          `${y(d.value >= 0 ? d.value : 0) + offset.y + margin.top}px`
        )

      if (j === 0) {
        verticalLine.style('left', leftPos)

        if (useAxis ?? false) {
          dateAxisTip.text(formatTipDate(d.date)).style('left', leftPos)
        }
      }

      tip.style('left', leftPos)

      const row = tip.select(`.${s.TipComparison__row}:nth-child(${j + 1})`)
      row
        .select(`.${s.TipComparison__value}`)
        .text(numeral(d.value).format('0.[0]a'))
    })
  }

  d3.select(container)
    .on('mouseover', (event) => {
      tip.style('opacity', 1)
      dots.style('opacity', 1)
      verticalLine.style('opacity', 1)
      dateAxisTip.style('opacity', 1)
      setTipPosition(event)
    })
    .on('mouseout', () => {
      tip.style('opacity', 0)
      dots.style('opacity', 0)
      verticalLine.style('opacity', 0)
      dateAxisTip.style('opacity', 0)
    })
    .on('mousemove', setTipPosition)
}

export const getRatio = (num: number, sum: number): number => (num * 100) / sum

const scaleBandPosition = (xPos: number, x: d3.ScaleBand<string>): number => {
  const range = x.range()
  const rangePoints = d3.range(range[0], range[1], x.step())

  return d3.bisectLeft(rangePoints, xPos)
}

const createToolTip = (container: HTMLElement, svg: d3Element): d3Element => {
  let tip = d3.select(container).select(`.${s.Tip}`)

  if (tip.empty()) {
    tip = d3
      .select(container)
      .append('div')
      .attr('class', s.Tip)
      .style('opacity', 0)
      .on('transitionend ', (e) => {
        const tipOpacity = e.target.style.opacity

        if (tipOpacity === '0') {
          tip.style('width', '0').style('height', '0')
        }
      })
  }

  d3.select(container)
    .on('mouseover.tip', () => {
      tip.style('width', '').style('height', '').style('opacity', 1)
    })
    .on('mouseout.tip', (event: any) => {
      const { relatedTarget } = event
      // prevent blink when mouseout triggered by child element
      if (container.contains(relatedTarget)) return

      svg.selectAll(`.${s.hovered}`).classed(s.hovered, false)
      tip.style('opacity', 0)
    })

  return tip
}
interface BarTipProps {
  x: d3.ScaleBand<string>
  y: d3.ScaleLinear<number, number>
  offset: { y: number; x: number }
  datasets: any[]
  labels: string[]
  displayLabels: string[]
  container: HTMLElement | null
  formatValue?: (n: number) => string
  formatLabel?: (label: string) => string
  formatTitle?: (title: string) => string
  stacked?: boolean
  height?: number
  margin?: any
  pointDatasets?: any[]
  showLine?: boolean
  showInsideContainer?: boolean
}

export const addBarTip = ({
  x,
  y,
  offset,
  labels,
  displayLabels,
  datasets,
  container,
  stacked,
  height,
  margin,
  pointDatasets,
  showLine,
  showInsideContainer = false,
  formatValue,
  formatLabel = (label: string) => label,
  formatTitle = (tipLabel: string) => tipLabel
}: BarTipProps) => (svg: d3Element): void => {
  if (container == null) return
  const tip = createToolTip(container, svg)
  const scale = getParentScale(container)
  const containerWidth = parseInt(getComputedStyle(svg.node() as Element).width)
  d3.select(container).selectAll(`.${s['comparison-dot']}`).remove()
  let verticalLine = d3.select(container).select(`.${s['vertical-line']}`)
  verticalLine.remove()
  if (showLine) {
    verticalLine = d3
      .select(container)
      .append('div')
      .attr('class', s['vertical-line'])
      .style('opacity', 0)
      .style('height', `${(height ?? 0) - margin.top - margin.bottom}px`)
      .style('top', `${margin.top}px`)
  }

  pointDatasets?.forEach(({ backgroundColor }) => {
    d3.select(container)
      .append('div')
      .attr('class', s['comparison-dot'])
      .style('opacity', 0)
      .style('background-color', backgroundColor)
  })

  const dots = d3.select(container).selectAll(`.${s['comparison-dot']}`)

  d3.select(container).on('mousemove', (event) => {
    const tipWidth = parseInt(getComputedStyle(tip.node() as Element).width)
    const mouseOffset = x.step()
    const mouse = d3.pointer(event)[0] / scale
    const xPos = mouse - mouseOffset
    const i = scaleBandPosition(xPos, x)
    svg.selectAll(`.${s.hovered}`).classed(s.hovered, false)
    svg.selectAll(`.bars-group-${i} .rect`).classed(s.hovered, true)
    svg.selectAll(`.rect-${i}`).classed(s.hovered, true)

    if (i >= labels.length) return
    const tipLabel = displayLabels[i]
    const tipRealValue = labels[i]
    const tipXPos = x(tipLabel) ?? 0
    const leftPos = `${tipXPos + offset.x}px`
    const minTipLeftPos = tipWidth / 2
    const maxTipLeftPost = containerWidth - minTipLeftPos
    const isTipHitsLeftEdge = parseInt(leftPos) < minTipLeftPos
    const isTipHitsRightEdge = parseInt(leftPos) > maxTipLeftPost

    let tipLeftPos =
      showInsideContainer && isTipHitsLeftEdge
        ? minTipLeftPos
        : parseInt(leftPos)
    tipLeftPos =
      showInsideContainer && isTipHitsRightEdge ? maxTipLeftPost : tipLeftPos
    const mostYValue = d3.max(datasets, ({ data }) => data[i])
    const groupPosition = y(mostYValue >= 0 ? mostYValue : 0)

    verticalLine.style('left', leftPos)

    dots.each(function (_, j) {
      const yValue = pointDatasets?.[j]?.data[i]

      d3.select(this)
        ?.style('left', leftPos)
        .style('top', `${y(yValue >= 0 ? yValue : 0) + offset.y - 5}px`)
    })
    // line datasets should not effect tooltip height
    const barDataSets = datasets.filter(({ type }) => type !== 'line')

    const stackedPosition =
      barDataSets.reduce(
        (sum: number, set: any) => sum + y(set.data[i] >= 0 ? set.data[i] : 0),
        0
      ) -
      y(0) * (barDataSets.length - 1)
    const topPos = stacked === true ? stackedPosition : groupPosition

    const tooltipSets = datasets.map(({ label, data, backgroundColor }) => ({
      label: formatLabel(label),
      value: formatValue?.(data[i]) ?? data[i],
      color: backgroundColor
    }))
    const tooltipTitle = formatTitle(tipRealValue)
    const tooltipHtml = createTooltipHtml(
      tooltipSets,
      undefined,
      tooltipTitle,
      !!formatValue
    )

    tip
      .style('left', `${tipLeftPos}px`)
      .style('top', `${topPos + offset.y}px`)
      .html(() => {
        return tooltipHtml
      })
  })

  d3.select(container)
    .on('mouseover.dot', () => {
      dots.style('opacity', 1)
      verticalLine.style('opacity', 1)
    })
    .on('mouseout.dot', () => {
      dots.style('opacity', 0)
      verticalLine.style('opacity', 0)
    })
}

interface StackedBarTipProps {
  x: d3.ScaleBand<string>
  y: d3.ScaleLinear<number, number>
  keys: [string, string]
  tipLabel?: { [key: string]: string }
  offset: { y: number; x: number }
  data: StackedBarDataType[]
  container: HTMLElement | null
}

export const addStackedBarTip = ({
  x,
  y,
  keys,
  tipLabel,
  offset,
  data,
  container
}: StackedBarTipProps) => (svg: d3Element): void => {
  if (container == null) return
  const tip = createToolTip(container, svg)

  d3.select(container).on('mousemove', (event) => {
    const scale = getParentScale(container)
    const mouseOffset = x.step() + x.bandwidth() / 2
    const mouse = d3.pointer(event)[0] / scale
    const xPos = mouse - mouseOffset
    const i = scaleBandPosition(xPos, x)
    const d = data[i]

    svg.selectAll(`.${s.hovered}`).classed(s.hovered, false)
    svg.selectAll(`.rect-${i}`).classed(s.hovered, true)

    if (d == null) return
    const dateX = x(getFormatedDate(d.date)) ?? 0
    const values = keys.map((key) => d[key])
    const labels = keys.map((key) => tipLabel?.[key] ?? '')
    const tipTopPos =
      values.reduce(
        (sum: number, value: number) => sum + y(value >= 0 ? value : 0),
        0
      ) -
      y(0) * (values.length - 1) +
      offset.y

    tip
      .style('left', `${dateX + offset.x}px`)
      .style('top', `${tipTopPos}px`)
      .html(() => {
        const date = d.date != null ? formatTipDate(d.date) : ''

        return `
          ${values
            .map(
              (value, i) =>
                `<div>${numeral(value).format('0,0')}&nbsp;${labels[i]}</div>`
            )
            .join('')}
          <div>${date.split(' ').join('&nbsp;')}</div>
          `
      })
  })
}

interface DoubleBarTipProps {
  x0: d3.ScaleBand<string>
  x1: d3.ScaleBand<string>
  y: d3.ScaleLinear<number, number>
  offset: { y: number; x: number }
  tipLabel?: { [key: string]: string }
  keys: string[]
  groupKey: string
  data: DoubleBarDataType[]
  sum: number
  container: HTMLElement | null
}

export const addDoubleBarTip = ({
  x0,
  x1,
  y,
  offset,
  tipLabel,
  keys,
  groupKey,
  data,
  sum,
  container
}: DoubleBarTipProps) => (svg: d3Element): void => {
  if (container == null) return
  const tip = createToolTip(container, svg)

  d3.select(container).on('mousemove', (event) => {
    const scale = getParentScale(container)
    const getOffset = (x: d3.ScaleBand<string>): number =>
      x.step() - (x.step() - x.bandwidth()) / 2
    const mouseOffset = getOffset(x0)
    const mouse = d3.pointer(event)[0] / scale
    const xPos = mouse - mouseOffset
    const i = scaleBandPosition(xPos, x0)
    const barsGroup = svg.selectAll(`.${s.barsGroup}`).filter((_, n) => i === n)
    const groupNode = barsGroup.node() as any

    if (groupNode === null) return

    const offset2 = getOffset(x1)
    const x2Pos = d3.pointer(event, groupNode)[0] - offset2

    const j = scaleBandPosition(x2Pos, x1)
    const d = data[i]

    const key = keys[j] ?? keys[j - 1] ?? 0

    svg.selectAll(`.${s.hovered}`).classed(s.hovered, false)
    barsGroup.selectAll(`.rect-${key}`).classed(s.hovered, true)

    const ageX = x0(d.age as string) ?? 0
    const keyX = x1(key) ?? 0

    if (d == null) return

    tip
      .style('left', `${ageX + keyX + offset.x}px`)
      .style('top', `${y(getRatio(d[key] as number, sum)) + offset.y}px`)
      .html(() => {
        return `
          <div>${d[key] ?? ''}&nbsp;${tipLabel?.[key] ?? ''}</div>
          <div>${d[groupKey] ?? ''}&nbsp;${tipLabel?.[groupKey] ?? ''}</div>
          `
      })
  })
}
