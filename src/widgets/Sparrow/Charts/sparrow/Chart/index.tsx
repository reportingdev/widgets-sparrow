import React, { FC } from 'react'

import {
  BarChart,
  AreaChart,
  CurveChart,
  HeatMap,
  HorizontalBarChart,
  GoalChart,
  SpiderChart,
  DonutChart
} from './charts'
import DivergingStackedBarChart from './charts/diverging-stacked-bar-chart'
import PolarAreaChart from './charts/polar-area'

import {
  ChartProps,
  HorizontalBarProps,
  GoalChartProps,
  SpiderChartProps
} from './charts/types'
// import './chart.css'

export type Props = ChartProps

const Chart: FC<any> = ({ type, ...rest }: any) => {
  switch (type) {
    case 'area':
      return <AreaChart {...rest} />

    case 'bar':
      return <BarChart {...rest} />

    case 'curve':
      return <CurveChart {...rest} />

    case 'donut':
      return <DonutChart {...rest} />

    case 'heatMap':
      return <HeatMap {...rest} />

    case 'horizontalBar':
      return <HorizontalBarChart {...(rest as HorizontalBarProps)} />

    case 'goal':
      return <GoalChart {...(rest as GoalChartProps)} />

    case 'spider':
      return <SpiderChart {...(rest as SpiderChartProps)} />

    case 'diverging':
      return <DivergingStackedBarChart {...rest} />

    case 'polar-area':
      return <PolarAreaChart {...rest} />

    default:
      throw new Error(`Unsupported chart type ${type as string}`)
  }
}

export default Chart
