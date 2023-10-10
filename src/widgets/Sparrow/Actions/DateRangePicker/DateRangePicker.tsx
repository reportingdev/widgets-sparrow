import { DateTime } from 'luxon'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import SparrowDateRangePicker from './date-range-picker'
import { PERIOD_OPTIONS } from './constants'

export const DateRangePicker = ({color, onChange, canSelectToday, enableLocalDates}: any) => {

  const dateTime = enableLocalDates ? DateTime.local():DateTime.utc() ;
  const timezoneSuffix = enableLocalDates ? 'T00:00:00' : 'T00:00:00Z';

  const getInitialDateRange = () => {
    let end = dateTime.minus({ days: 1 });

    return {
      start: end.minus({ days: 27 }).toFormat('yyyy-MM-dd')+timezoneSuffix,
      end: end.toFormat('yyyy-MM-dd')+timezoneSuffix,
      period: PERIOD_OPTIONS.last28Days
    }
  };

  const [dateRange, setDateRange] = useState<any>(getInitialDateRange());

  useEffect(() => {
    setDateRange(getInitialDateRange());
  }, [enableLocalDates]);

  const onDateChange = ({ start, end, period }: any): any => {
    const startDate = DateTime.fromISO(start).toFormat('yyyy-MM-dd');
    const endDate = DateTime.fromISO(end).toFormat('yyyy-MM-dd');

    setDateRange({
      start: startDate+timezoneSuffix,
      end: endDate+timezoneSuffix,
      period
    } as any);
    onChange({startDate, endDate, period});
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