import type { HeatMapDataType } from '../Chart/charts/types'
import type { IRevealJsHeatMapData } from '.'

import { DateTime } from 'luxon'
import numeral from 'numeral'
import { isObject, startCase } from 'lodash'
import { sparrowUrl } from './constant'

export interface IDataSet {
  label: any
  data?: number | any[] | { [key: string]: any }
  backgroundColor?: string
  color?: string
  opacity?: number
  type?: string
}

export interface IMetric {
  metric: string
  label?: string
  color?: string
  backgroundColor?: string
  opacity?: number
  type?: string
}

export interface IChartReturn {
  data: {
    labels: string[]
    datasets: IDataSet[]
  }
  labels: string[]
  config: {
    [x: string]: any
  }
  variant: string
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const formatMoney = (value: number): string => {
  return numeral(value).format('$0,0[.]00')
}

export const formatAmount = (value: number): string => {
  return numeral(value).format('0[.]0a')
}

/**
 * formatDateStringGenerator takes an output format as a param and returns 
 * a function that takes a date string as input and returns the date in the format
 * specified when the function was generated
 * @param datetimeString sample date string to be formatted
 * @param format specified format to return the stirng as
 * @returns function used to format date
 */
export const formatDateStringGenerator = (formatInput:string):Function =>{
  
  const formatMap = {
    'Full Month & Day': 'MMMM d',
    'Full Month, Day & Year': 'MMMM d, yyyy',
    'Short Month & Day': 'M d',
    'Short Month, Day & Year': 'M d, yyyy',
    'US date format':'MM/dd/yyyy',           
    'European date format':'dd-MM-yyyy',  
    'YMD format': 'yyyy-MM-dd',
    'US Short Month & Day': 'MM/dd',      
  };
  const format = formatMap[formatInput] ?? 'none';


  return (datetimeString:any)=>{
    let dateTime;
    if (!isNaN(datetimeString)) {
      // If the input is a number, assume it's a Unix timestamp
      dateTime = DateTime.fromMillis(Number(datetimeString));
    } else {
      // try all the different possible formats
      try{
        dateTime = DateTime.fromISO(datetimeString);
      }catch{
        try {
          dateTime = DateTime.fromFormat(datetimeString, 'MM/dd/yyyy');
        } catch {
          try {
            dateTime = DateTime.fromFormat(datetimeString, 'dd-MM-yyyy');
          } catch {
            dateTime = DateTime.fromFormat(datetimeString, 'yyyy-dd-MM');
          }
        }
      }
    }

    // if input is not a date string return it
    if(!dateTime) {
      return datetimeString;
    }
    switch (format) {
      case 'none':
        return datetimeString;
      case 'M d':
        return dateTime.toFormat('MMM dd');       // Output: Mar 31
      case 'M d, yyyy':
        return dateTime.toFormat('MMM dd, yyyy'); // Output: Mar 31, 2023
      case 'MMMM d':
        return dateTime.toFormat('MMMM dd');      // Output: March 31
      case 'MMMM d, yyyy':
        return dateTime.toFormat('MMMM dd, yyyy'); // Output: March 31, 2023
      case 'MM/dd':
        return dateTime.toFormat('MM/dd');        // Output: 03/31
      case 'MM/dd/yyyy':
        return dateTime.toFormat('MM/dd/yyyy');   // Output: 03/31/2023
      case 'dd-MM-yyyy':
        return dateTime.toFormat('dd-MM-yyyy');   // Output: 31-03-2023
        case 'yyyy-MM-dd':
        return dateTime.toFormat('yyyy-MM-dd');   // Output: 2023-31-03
      default:
        return datetimeString;
    }
  }
}

export const getFormattedDate = (date: number, dateFormat: string): string => {
  if (typeof date === 'string') {
    return DateTime.fromISO(date, { zone: 'utc' }).toFormat(dateFormat)
  }
  if (date.toString().length === 10) {
    return DateTime.fromSeconds(date, { zone: 'utc' }).toFormat(dateFormat)
  }
  return DateTime.fromMillis(date, { zone: 'utc' }).toFormat(dateFormat)
}

export function generateHeatmapData (
  data: IRevealJsHeatMapData
): HeatMapDataType[] {
  return Object.keys(data).reduce<any>((result, day) => {
    const dayIndex = DAYS.findIndex((d) => d === day)
    const dayItems = data[day]

    return result.concat(
      Object.keys(data[day]).map((hourIndex) => ({
        day: dayIndex + 1,
        hour: Number(hourIndex) + 1,
        value: dayItems[hourIndex] ?? 0.1
      }))
    )
  }, [])
}

export const generateDateLabel = (
  data: any[],
  dateFormat = 'MM/dd'
): string[] =>
  data?.map(({ date, time }: { date: number, time: number }) => {
    if (date != null) {
      return getFormattedDate(date, dateFormat)
    } else if (time != null) {
      return getFormattedDate(time, dateFormat)
    }
    return ''
  })

export const generateChartData = (
  type: string,
  chartData: any | { [key: string]: any },
  metrics: IMetric[],
  chartConfig: { [key: string]: any } = {}
): IChartReturn => {
  let variant = type
  const {
    useAxis,
    dateFormat,
    demographics,
    demographicsKey,
    isMoney,
    showTip,
    stacked,
    chart,
    datasets: configDataSets,
    labels: configLabels,
    ...restConfig
  } = chartConfig
  let labels: string[] = []

  const config: { [key: string]: any } = {
    tooltip: {
      formatLabel: (label: string) => {
        let formattedLabel = DateTime.fromFormat(label, 'MM/dd').toFormat(
          'MMM dd, yyyy'
        )
        if (/Invalid/gi.test(formattedLabel)) {
          formattedLabel = label
        }
        return formattedLabel
      },
      formatValue: (n: number) => {
        let formattedValue = n.toString()
        if (isMoney === true) {
          formattedValue = formatMoney(n)
        } else {
          formattedValue = formatAmount(n)
        }
        return formattedValue
      }
    }
  }
  const datasets: IDataSet[] = []

  if (useAxis === false) {
    config.scales = {
      y: {
        hide: true
      },
      x: {
        hide: true
      },
      ...(config.scales ?? {})
    }
  }

  config.chart = {
    ...(chart ?? {})
  }

  if (stacked === true) {
    config.chart = {
      stacked: true,
      ...config.chart
    }
  }

  if (showTip === false) {
    config.tooltip = {
      hide: true,
      ...(config.tooltip ?? {})
    }
  }

  config.scales = {
    ...(config.scales ?? {}),
    y: {
      min: 0,
      ...(config.scales?.y ?? {})
    }
  }

  switch (type) {
    case 'donut': {
      variant = 'donut'
      break
    }
    case 'line': {
      variant = 'area'
      break
    }
    case 'heatmap': {
      variant = 'heatMap'
      // heatmap doesn't take dataset
      return {
        data: generateHeatmapData(chartData),
        config,
        variant
      } as any
    }
    case 'curve': {
      // curve have value as number
      return {
        data: {
          labels: configLabels,
          datasets: configDataSets,
          value: chartData
        },
        variant
      } as any
    }
    default: {
      break
    }
  }

  if (demographics === true && demographicsKey != null) {
    labels = (chartData as any[]).map((d) => d[demographicsKey] ?? '')
    if (chartData.length === 0) {
      config.loader = {
        show: true
      }
    }
  } else if (Array.isArray(chartData?.[0])) {
    if (chartData.length === 0) {
      config.loader = {
        show: true
      }
    }
    labels = generateDateLabel(chartData[0], dateFormat)
  } else if (Array.isArray(chartData)) {
    if (chartData.length === 0) {
      config.loader = {
        show: true
      }
    }
    labels = generateDateLabel(chartData, dateFormat)
  } else if (isObject(chartData)) {
    if (Object.keys(chartData ?? {}).length === 0) {
      config.loader = {
        show: true
      }
    }
    labels = Object.keys(chartData).map((metric) => metric)
  }

  metrics.forEach(({ metric, color, label, type: metricType }, index) => {
    let metricChartData
    if (Array.isArray(chartData)) {
      if (chartData != null) {
        if (Array.isArray(chartData[index])) {
          metricChartData = chartData[index].map(
            ({ value }: { value: number }) => value ?? 0
          )
        } else {
          metricChartData = chartData?.map((d: { [key: string]: number }) => {
            return d.value ?? d[metric] ?? 0
          })
        }
      } else {
        metricChartData = []
      }
    } else if (isObject(chartData)) {
      if (chartData != null) {
        metricChartData = (chartData as { [key: string]: any })[metric] ?? 0
      } else {
        metricChartData = 0
      }
    }
    const dataset: IDataSet = {
      label: label != null ? startCase(label) : startCase(metric),
      data: metricChartData,
      backgroundColor: color
    }

    if (metricType != null) {
      dataset.type = metricType
    }

    datasets.push(dataset)
  })

  const data = {
    labels,
    datasets
  }

  return {
    data,
    labels,
    config: {
      ...config,
      ...restConfig
    },
    variant
  }
}

export const openSparrowCharts = (): Window | null =>
  window.open(sparrowUrl, '_blank')
