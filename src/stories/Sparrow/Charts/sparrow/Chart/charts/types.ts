export type ChartVariant =
  | 'area'
  | 'bar'
  | 'curve'
  | 'stackedBar'
  | 'donut'
  | 'doubleBar'
  | 'heatMap'
  | 'horizontalBar'
  | 'goal'
  | 'spider'

interface MarginType {
  top: number
  right: number
  bottom: number
  left: number
}

export interface ColorsType {
  [key: string]: string
}

/* data types */

export interface ChartDataType {
  date: number
  value: number
  secondaryValue?: number
}

export interface HeatMapDataType {
  day: number
  hour: number
  value: number
}

export interface DonutDataType {
  [key: string]: number
}

export interface StackedBarDataType {
  [key: string]: number
  date: number
}

export interface DoubleBarDataType {
  [key: string]: number | string
}

export interface HorizontalBarDataType {
  [key: string]: number
}

export interface SpiderAxis {
  name: string
  label: string
  value: number
  coordinates?: { x: number, y: number }
}

export type SpiderData = Array<{
  name: string
  label: string
  axes: SpiderAxis[]
}>

export type CurveData = number

export interface IMultiStackedBarChartData {
  date: number
  [metric: string]: number | Date
}

/* chart props */

export interface ChartProps {
  variant: ChartVariant
  data:
  | ChartDataType[]
  | ChartDataType[][]
  | HeatMapDataType[]
  | DonutDataType
  | StackedBarDataType[]
  | IMultiStackedBarChartData[]
  | DoubleBarDataType[]
  | HorizontalBarDataType
  | SpiderData
  | CurveData
  | number
  width: number
  height: number
  margin?: MarginType
  color?: string
  colors?: ColorsType | string[]
  useAxis?: boolean
  axisYSign?: string
  barOpacity?: number
  tipLabel?: string | { [name: string]: string }
  groupKey?: string
  keys?: string[]
  offset?: { vertical: number, horizontal: number }
  showTip?: boolean
  initialRange?: Array<{ [key: string]: number | string }>
  border?: number
  imgSrc?: string
  imgGap?: number
  showValue?: boolean
  stepColors?: string[]
  useBackground?: boolean
  animationDuration?: number
  animationStepDelay?: number
  arcWidth?: number
  lineColors?: string[]
  formatTip?: (n: number) => string
}

export interface BarChartProps extends Omit<ChartProps, 'variant'> {
  data: ChartDataType[]
  color: string
  useAxis: boolean
  barOpacity: number
  tipLabel: string
  axisYSign: string
}

export interface AreaChartProps extends Omit<ChartProps, 'variant'> {
  colors: string[]
  data: ChartDataType[][]
}

export interface DonutChartProps
  extends Omit<ChartProps, 'variant' | 'margin'> {
  data: DonutDataType
  showTip?: boolean
  colors: ColorsType
  arcWidth?: number
}

export interface StackedBarProps extends Omit<ChartProps, 'variant'> {
  data: StackedBarDataType[]
  keys: [string, string]
  colors: ColorsType
  barOpacity: number
  showTip?: boolean
  tipLabel?: { [name: string]: string }
}

export interface DoubleBarProps extends Omit<ChartProps, 'variant'> {
  data: DoubleBarDataType[]
  colors: ColorsType
  groupKey: string
  keys: string[]
  tipLabel?: { [name: string]: string }
}

export interface HorizontalBarProps extends Omit<ChartProps, 'variant'> {
  data: HorizontalBarDataType
  colors: ColorsType
}

export interface HeatMapProps extends Omit<ChartProps, 'variant'> {
  data: HeatMapDataType[]
}

export interface GoalChartProps extends Omit<ChartProps, 'variant'> {
  data: number
  border?: number
  stepColors: string[]
  useBackground?: boolean
  imgSrc?: string
  imgGap?: number
  showValue?: boolean
  showPath?: boolean
  label?: string
  labelColor?: string
  isLoading?: boolean
  children?: React.ReactNode
}

export interface SpiderChartProps extends Omit<ChartProps, 'variant'> {
  colors: ColorsType
  data: SpiderData
}

export interface CurveChartProps extends Omit<ChartProps, 'variant'> {
  data: number
  colors?: string[]
  lineColors?: string[]
}
