import { DateTime } from 'luxon'
import { PERIOD_OPTIONS } from './constants'

export const checkEquality = (
  x: DateTime,
  y: DateTime,
  a: string,
  b: string
): boolean => {
  return x.toFormat('yyyy-MM-dd') === a && y.toFormat('yyyy-MM-dd') === b
}

export const removeOffset = (date: Date): Date | null => {
  if (date == null) return null
  const offset = new Date(date).getTimezoneOffset() * 60 * 1000
  return new Date(date.getTime() + offset)
}

export const checkPeriod = (startDate: string, endDate: string): string => {
  // startDate and endDate are luxon Dates (as strings) in 'yyyy-MM-dd' format;
  const yesterday = DateTime.local().minus({ day: 1 })
  let start
  let end
  // Check last week
  start = yesterday.minus({ week: 1 }).startOf('week')
  end = start.endOf('week').minus({ day: 1 })
  start = start.minus({ day: 1 })
  if (checkEquality(start, end, startDate, endDate)) {
    return PERIOD_OPTIONS.lastWeek
  }
  // Check last 14 days
  start = yesterday.minus({ week: 2 })
  end = yesterday
  if (checkEquality(start, end, startDate, endDate)) {
    return PERIOD_OPTIONS.last14Days
  }
  // Check last 28 days
  start = end.minus({ days: 28 })
  end = yesterday
  if (checkEquality(start, end, startDate, endDate)) {
    return PERIOD_OPTIONS.last28Days
  }
  // Check last month
  start = yesterday.minus({ month: 1 }).startOf('month')
  end = start.endOf('month')
  if (checkEquality(start, end, startDate, endDate)) {
    return PERIOD_OPTIONS.lastMonth
  }
  // Check last quarter
  start = yesterday.minus({ quarter: 1 }).startOf('quarter')
  end = start.endOf('quarter')
  if (checkEquality(start, end, startDate, endDate)) {
    return PERIOD_OPTIONS.lastQuarter
  }
  // Default: custom date
  return PERIOD_OPTIONS.custom
}
