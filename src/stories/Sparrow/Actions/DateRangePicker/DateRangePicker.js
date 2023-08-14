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

export default class DateRangePicker extends React.Component {
  constructor (props) {
    const yesterday = props.enableLocalDates? DateTime.local().minus({ day: 1 }):DateTime.utc().minus({ day: 1 })
    super(props)
    this.pickerRef = React.createRef()
    this.calendarRef = React.createRef()
    this.inputRef = React.createRef()
    this.isVisible = false
    this.color = props.color
    this.canSelectToday = props.canSelectToday
    this.enableLocalDates = props.enableLocalDates
    this.setPeriod = this.setPeriod.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.setDate = this.setDate.bind(this)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.handleDayPickerShow = this.handleDayPickerShow.bind(this)
    this.handleDayPickerHide = this.handleDayPickerHide.bind(this)
    this.handleApplyClick = this.handleApplyClick.bind(this)
    this.state = {
      from: new Date(props.from || yesterday),
      to: new Date(props.to || yesterday),
      currentPeriod: props.initialPeriod || PERIOD_OPTIONS.custom,
      error: false 
    }
  }

  handleInputClick (props) {
    return (e) => {
      props.onClick(e)
      if (this.isVisible) {
        this.pickerRef.current.hideDayPicker()
        this.isVisible = false
        return
      }
      this.isVisible = true
    }
  }

  setPeriod (period) {
    let end = this.enableLocalDates? DateTime.local().minus({ day: 1 }): DateTime.utc().minus({day:1})
    let start
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

    const from = new Date(start)
    const to = new Date(end)

    this.calendarRef.current.showMonth(from)

    this.setState({
      from,
      to,
      currentPeriod: period,
      error: false
    })
  }

  handleOutsideClick (e) {
    let isClickOutiseCalendar = true
    let { target } = e

    // eslint requires inputRef to be destructered from props.
    const { inputRef: inputRefProps } = this.props
    const inputRef = inputRefProps || this.inputRef
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

  setDate (date) {
    this.setState({ ...date, currentPeriod: PERIOD_OPTIONS.custom })
  }

  handleDayClick (day, modifiers = {}) {
    let from, to
    if (this.props.hideDefaultTimePeriod) {
      from = to = day
    } else {
      const dateRange = DateUtils.addDayToRange(removeOffset(day), this.state)
      from = dateRange.from
      to = dateRange.to
    }
    const error = !from || !to
    // Don't let users select anything that is disabled
    if (modifiers.disabled) {
      return
    }
    this.setState({
      from,
      to,
      currentPeriod: PERIOD_OPTIONS.custom,
      error
    })
  }

  handleDayPickerShow () {
    const { from } = this.state
    this.calendarRef.current.showMonth(from || new Date())
    window.addEventListener('click', this.handleOutsideClick, true)
  }

  handleDayPickerHide () {
    this.shouldBeVisible = false
    window.removeEventListener('click', this.handleOutsideClick, true)
    this.isVisible = false
  }

  handleApplyClick () {
    const { from, to, error, currentPeriod } = this.state
    this.pickerRef.current?.hideDayPicker()

    if (error) return

    const { onDayChanged } = this.props
    onDayChanged({
      start: from?.toISOString(),
      end: to?.toISOString(),
      period: currentPeriod
    })
  }

  render () {
    const { from, to, currentPeriod, error } = this.state
    const {
      numberOfMonths = 1,
      disabled,
      hideDefaultTimePeriod = false,
      style = {},
      color,
      enableLocalDates,
      canSelectToday
    } = this.props
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
    const { inputRef: inputRefProps } = this.props
    const inputRef = inputRefProps || this.inputRef
    
    const checkColor = (color) => {
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
      (day) => canSelectToday ? 
        day > DateTime.local().plus({days: 1}) : 
        day >= DateTime.local()
    ]
    


    // Show the custom calendar
    return (
      <DateContext.Provider value={dateContext}>
        <style>{cssStyle}</style>
        <DayPickerInput
          overlayComponent={DateRangeOverlay}
          component={(props) => (
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
          ref={this.pickerRef}
          onDayPickerHide={this.handleDayPickerHide}
          onDayPickerShow={this.handleDayPickerShow}
          dayPickerProps={{
            className: 'Selectable',
            ref: this.calendarRef,
            numberOfMonths,
            selectedDays: [from, { from, to }],
            modifiers,
            disabledDays: disabledDays,
            onDayClick: this.handleDayClick,
            showOutsideDays: true,
          }}
        />
      </DateContext.Provider>
    )
  }
}
