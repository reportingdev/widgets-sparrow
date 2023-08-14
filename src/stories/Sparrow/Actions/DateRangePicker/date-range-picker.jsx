import { DateTime } from 'luxon'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import SparrowDateRangePicker from './DateRangePicker'
import { PERIODS_LIST } from './constants'

export const DateRangePicker = ({color, onChange, canSelectToday, enableLocalDates}) => {
  const [dateRange, setDateRange] = useState({
    from: enableLocalDates? DateTime.local().minus({ days: 29 }).toFormat('yyyy-MM-dd'): DateTime.utc().minus({days:29}),
    to: enableLocalDates? DateTime.local().minus({ days: 1 }).toFormat('yyyy-MM-dd'): DateTime.utc().minus({days:1}),
    period: PERIODS_LIST.last28days
  })

  const onDateChange = ({ start, end, period }) => {
    const startDate = DateTime.fromISO(start).toFormat('yyyy-MM-dd')
    const endDate = DateTime.fromISO(end).toFormat('yyyy-MM-dd')

    setDateRange({
      start: startDate,
      end: endDate,
      period
    })
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