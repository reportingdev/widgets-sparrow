import React from 'react'
import { startCase } from 'lodash'

import { ChartProps, ChartVariant } from '../Chart/charts/types'
import Chart from '../Chart'
import { metricName } from './constant'
import './charts.css'
import { generateChartData, IDataSet, IMetric } from '.'
import LabelsWrap from '../Chart/label-wrap/label-wrap'

const DEFAULT_COLOR = metricName.followers.color

interface IChartSettings
  extends Omit<
  ChartProps,
  'data' | 'width' | 'height' | 'variant' | 'useAxis'
  > {
  isInteractive?: boolean
  showAnimations?: boolean
  showAxis?: boolean
  doubleChartGroupData?: Array<number | string>
  line: string
  aspectRatio?: boolean
  title?: string
  showLabels?: boolean
  position?: {
    value: string
  }
  labelColor?: string
  backgroundColor?: string
  showLastSynced?: boolean
}

type RevealJsChartVariant =
  | 'bar'
  | 'donut'
  | 'goal'
  | 'stackedbar'
  | 'heatmap'
  | 'doublebar'
  | 'line'
  | 'barLine'

interface IRevealJsChartData {
  time: number
  value: number
}

export interface IRevealJsHeatMapData {
  [weekDay: string]: number[]
}

export function drawChart (
  variant: RevealJsChartVariant,
  data: IRevealJsChartData[] | IRevealJsChartData[][] | IRevealJsHeatMapData,
  config: IChartSettings,
  metrics: string[]
): JSX.Element {
  const chartData: ChartProps['data'] = data as any
  const chartMetrics: IMetric[] = []

  const {
    isInteractive,
    showAnimations,
    showAxis,
    colors,
    color: configColor,
    line,
    aspectRatio,
    ...restConfig
  } = config ?? {}

  metrics.forEach((metric, index) => {
    const metricToken = metric.replace('social.', '')
    const { label, color } = metricName[metricToken] ?? {
      label: startCase(metricToken),
      color: DEFAULT_COLOR
    }

    let metricColor = color
    if (colors?.length === metrics.length) {
      metricColor = colors[index] ?? color
    }

    if (colors?.length === 0 && configColor != null) {
      metricColor = configColor
    }

    const metricData: IMetric = {
      metric: metricToken,
      label,
      color: metricColor,
      backgroundColor: metricColor
    }

    if (line != null && line === metricToken) {
      metricData.type = 'line'
    }

    chartMetrics.push(metricData)
  })

  const defaultConfig: { [key: string]: any } = {
    showTip: true,
    useAxis: true
  }

  if (/donut/gi.test(variant) && isInteractive == null) {
    defaultConfig.showTip = false
  }

  if (isInteractive === false) {
    defaultConfig.showTip = false
  }

  if (showAxis === false) {
    defaultConfig.useAxis = false
  }

  if (defaultConfig.arcWidth == null) {
    defaultConfig.chart = {
      arcWidth: 12,
      padAngle: 0,
      barOpacity: 0.7,
      ...(defaultConfig.chart ?? {})
    }
  }

  if (aspectRatio == null) {
    defaultConfig.chart = {
      aspectRatio: 'auto',
      ...defaultConfig.chart
    }
  } else {
    defaultConfig.chart = {
      aspectRatio,
      ...defaultConfig.chart
    }
  }

  const {
    data: formattedData,
    config: chartConfig,
    variant: chartVariant
  } = generateChartData(variant, chartData, chartMetrics, {
    ...defaultConfig,
    ...restConfig
  })

  return (
    <div className='Sparrow__chartContainer'>
      <Chart type={chartVariant} data={formattedData} config={chartConfig} />
    </div>
  )
}

export function drawNativeChart (
  variant: ChartVariant,
  data: {
    labels: string[]
    datasets: IDataSet[]
  },
  config: IChartSettings
): JSX.Element {
  const chartSettings = { type: variant, data, config }

  //const [position, align] = (config.position?.value ?? 'top_right').split('_')

  return (
    <div className='Sparrow__chartContainer'>
      <LabelsWrap
        title={config.title ?? ''}
        //position={position as any}
        chartSettings={chartSettings}
        //labelsAlign={align as any}
        //labelColor={config.labelColor}
        //backgroundColor={config.backgroundColor}
        //showLastSynced={config.showLastSynced}
      />
    </div>
  )
}
