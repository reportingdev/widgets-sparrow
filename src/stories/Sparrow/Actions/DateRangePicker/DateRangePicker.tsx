import { DateTime } from 'luxon'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import SparrowDateRangePicker from './date-range-picker'
import { PERIOD_OPTIONS } from './constants'

export const DateRangePicker = ({color, onChange, canSelectToday, enableLocalDates}: any) => {
  const [dateRange, setDateRange] = useState<any>({
    from: enableLocalDates? DateTime.local().minus({ days: 29 }).toFormat('yyyy-MM-dd'): DateTime.utc().minus({days:29}),
    to: enableLocalDates? DateTime.local().minus({ days: 1 }).toFormat('yyyy-MM-dd'): DateTime.utc().minus({days:1}),
    period: PERIOD_OPTIONS.last28days
  })

  const onDateChange = ({ start, end, period }: any): any => {
    const startDate = DateTime.fromISO(start).toFormat('yyyy-MM-dd')
    const endDate = DateTime.fromISO(end).toFormat('yyyy-MM-dd')

    setDateRange({
      start: startDate,
      end: endDate,
      period
    } as any)
    onChange({startDate,endDate,period})
  }
 
  return (
    <SparrowDateRangePicker
      onDayChanged={onDateChange}
      initialPeriod={dateRange.period}
      from={dateRange.start}
      to={dateRange.end}
      color={color}
      canSelectToday={canSelectToday}
      enableLocalDates={enableLocalDates}
    />)
}
DateRangePicker.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
  canSelectToday: PropTypes.bool,
  enableLocalDates:PropTypes.bool,
};

DateRangePicker.defaultProps = {
  color: '#866cff',
  onChange: ()=>{},
  canSelectToday: false,
  enableLocalDates:true,
};