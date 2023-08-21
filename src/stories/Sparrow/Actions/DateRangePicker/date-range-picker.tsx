import React from 'react'
import { DateUtils } from 'react-day-picker'
import { DateTime } from 'luxon'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import DateRangeInput from './date-range-input'
import DateRangeOverlay, { DateContext } from './date-range-overlay'
import { PERIOD_OPTIONS } from './constants'
import { removeOffset } from './utils'
import hexRgb from 'hex-rgb';
import './daterangepicker.css'
import PropTypes from 'prop-types'

export default class DateRangePicker extends React.Component {
  static propTypes = {
    onDayChanged: PropTypes.any,
    initialPeriod: PropTypes.any,
    from: PropTypes.any,
    to: PropTypes.any,
    color: PropTypes.any,
    canSelectToday: PropTypes.any,
    enableLocalDates: PropTypes.any,
  };
  constructor (props:any) {
    const yesterday = props.enableLocalDates? DateTime.local().minus({ day: 1 }):DateTime.utc().minus({ day: 1 })
    super(props);
    (this as any).pickerRef = React.createRef();
    (this as any).calendarRef = React.createRef();
    (this as any).inputRef = React.createRef();
    (this as any).isVisible = false;
    (this as any).color = props.color;
    (this as any).canSelectToday = props.canSelectToday;
    (this as any).enableLocalDates = props.enableLocalDates;
    this.setPeriod = this.setPeriod.bind(this);
    this.setDate = this.setDate.bind(this);
    this.state = {
      from: new Date(props.from || yesterday),
      to: new Date(props.to || yesterday),
      currentPeriod: props.initialPeriod || PERIOD_OPTIONS.custom,
      error: false 
    }
  }

  handleInputClick (props: any) {
    return (e: any) => {
      props.onClick(e)
      if ((this as any).isVisible) {
        (this as any).pickerRef.current.hideDayPicker()
        (this as any).isVisible = false
        return
      }
      (this as any).isVisible = true
    }
  }

  setPeriod = (period: any) => {
    let end = (this as any).enableLocalDates? DateTime.local().minus({ day: 1 }): DateTime.utc().minus({day:1})
    let start: any
    switch (period) {
      case PERIOD_OPTIONS.lastWeek:
        start = DateTime.local().minus({ weeks: 1 }).startOf('week').minus({ day: 1 });
        end = start.plus({ days: 6 });
        break;
      case PERIOD_OPTIONS.last14Days:
        start = end.minus({ week: 2 }).plus({ day: 1 })
        break
      case PERIOD_OPTIONS.last28Days:
        start = end.minus({ days: 27 })
        break
      case PERIOD_OPTIONS.lastMonth:
        start = end.minus({ month: 1 }).startOf('month')
        end = start.endOf('month')
        break
      case PERIOD_OPTIONS.lastQuarter:
        start = end.minus({ quarter: 1 }).startOf('quarter')
        end = start.endOf('quarter')
        break
      case PERIOD_OPTIONS.custom:
        start = end
        break
      default:
        return
    }

    const from = new Date(start);
    const to = new Date(end as any);

    (this as any).calendarRef.current.showMonth(from)

    this.setState({
      from,
      to,
      currentPeriod: period,
      error: false
    })
  }

  handleOutsideClick = (e: any) => {
    let isClickOutiseCalendar = true
    let { target } = e

    // eslint requires inputRef to be destructered from props.
    const { inputRef: inputRefProps }: any = this.props
    const inputRef = inputRefProps || (this as any).inputRef
    // If inputRef is provided in props, use that.
    // Otherwise, use default from class.
    if (!inputRef.current) {
      return
    }
    do {
      if (target === inputRef.current.parentElement) {
        isClickOutiseCalendar = false
      } else target = target.parentElement
    } while (target && isClickOutiseCalendar)

    if (isClickOutiseCalendar) {
      this.handleApplyClick()
    }
  }

  setDate = (date: any) => {
    this.setState({ ...date, currentPeriod: PERIOD_OPTIONS.custom })
  }

  handleDayClick = (day: any, modifiers = {}) => {
    let from, to
    if ((this.props as any).hideDefaultTimePeriod) {
      from = to = day
    } else {
      const dateRange = DateUtils.addDayToRange(removeOffset(day) as any, (this as any).state)
      from = dateRange.from
      to = dateRange.to
    }
    const error = !from || !to
    // Don't let users select anything that is disabled
    if ((modifiers as any).disabled) {
      return
    }
    this.setState({
      from,
      to,
      currentPeriod: PERIOD_OPTIONS.custom,
      error
    })
  }

  handleDayPickerShow = () => {
    const { from }: any = (this as any).state;
    (this as any).calendarRef.current.showMonth(from || new Date())
    window.addEventListener('click', this.handleOutsideClick, true)
  }

  handleDayPickerHide = () => {
    (this as any).shouldBeVisible = false;
    window.removeEventListener('click', this.handleOutsideClick, true);
    (this as any).isVisible = false;
  }

  handleApplyClick = () => {
    const { from, to, error, currentPeriod }: any = (this as any)?.state;
    (this as any)?.pickerRef?.current?.hideDayPicker();

    if (error) return

    const { onDayChanged }: any = this.props
    onDayChanged({
      start: from?.toISOString(),
      end: to?.toISOString(),
      period: currentPeriod
    })
  }

  render () {
    const { from, to, currentPeriod, error }: any = this.state;
    const {
      numberOfMonths = 1,
      disabled,
      hideDefaultTimePeriod = false,
      style = {},
      color,
      enableLocalDates,
      canSelectToday
    }: any = this.props
    const modifiers = { start: from, end: to }
    const { setDate } = this
    const dateContext = {
      setPeriod: this.setPeriod,
      currentPeriod,
      onApplyClick: this.handleApplyClick,
      isApplyDisabled: !from || !to,
      setDate,
      hideDefaultTimePeriod,
      color:color,
      enableLocalDates:enableLocalDates,
      canSelectToday:canSelectToday,
      style
    }
    // If inputRef is provided from props, use that. Otherwise, use default from class.
    const { inputRef: inputRefProps }: any = this.props
    const inputRef = inputRefProps || (this as any).inputRef
    
    const checkColor = (color: any) => {
      const isHex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;
      let newColor;
      if (color.match(isHex)){
        newColor = hexRgb(color,{format: 'css',alpha:0.2})
        return newColor
      }
      else {
        newColor = color.replace(/[^,]+(?=\))/, 0.2)
        return newColor
      }
    } 
    const lightColor = checkColor(color);
    const cssStyle = `
    .DayPicker-Day--today {
      color: ${color}
    }
    .Selectable .DayPicker-Day--start:not(.DayPicker-Day--outside),
    .Selectable .DayPicker-Day--end:not(.DayPicker-Day--outside) {
      background-color: ${color}
    }
    .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      background-color: ${lightColor}
    }
    .Selectable .DayPicker-Day--start:not(.DayPicker-Day--outside) + .DayPicker-Day--selected:not(.DayPicker-Day--outside)::before,
    .Selectable .DayPicker-Day--end:not(.DayPicker-Day--outside):not(:first-of-type):not(.DayPicker-Day--start)::after {
      background-color: ${lightColor}
    }
    .DayPickerInput__labelWrapper:focus {
      border: 1px solid ${color}
    }
    `;

    const disabledDays = [
      (day: any) => canSelectToday ? 
        day > DateTime.local().plus({days: 1}) : 
        day >= DateTime.local()
    ]
    


    // Show the custom calendar
    return (
      <DateContext.Provider value={dateContext as any}>
        <style>{cssStyle}</style>
        <DayPickerInput
          overlayComponent={DateRangeOverlay}
          component={(props: any) => (
            <DateRangeInput
              color={props.color}
              {...props}
              keepFocus={false}
              onClick={this.handleInputClick(props)}
            />
          )}
          inputProps={{
            from,
            to,
            currentPeriod,
            inputRef,
            error,
            disabled,
            hideDefaultTimePeriod,
          }}
          hideOnDayClick={hideDefaultTimePeriod}
          ref={(this as any).pickerRef}
          onDayPickerHide={this.handleDayPickerHide}
          onDayPickerShow={this.handleDayPickerShow}
          dayPickerProps={{
            className: 'Selectable',
            ref: (this as any).calendarRef,
            numberOfMonths,
            selectedDays: [from, { from, to }],
            modifiers,
            disabledDays: disabledDays,
            onDayClick: this.handleDayClick,
            showOutsideDays: true,
          } as any}
        />
      </DateContext.Provider>
    )
  }
}
