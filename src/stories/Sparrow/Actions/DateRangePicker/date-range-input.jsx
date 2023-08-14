import React, { Component } from 'react'
import { DateTime } from 'luxon'
import classnames from 'classnames'
import IconCalendar from './images/icon-calendar.svg'
import IconTriangle from './images/icon-triangle.svg'
import { PERIOD_OPTIONS } from './constants'

export default class DateRangeInput extends Component {
  renderDateRange () {
    const { from, to, currentPeriod, hideDefaultTimePeriod } = this.props
    const startDate = from ? DateTime.fromJSDate(from).toFormat('MMM d') : ''
    const endDate = to ? DateTime.fromJSDate(to).toFormat('MMM d') : ''

    return (
      <div className='DayPickerInput__label'>
        {currentPeriod === PERIOD_OPTIONS.custom
          ? (
            <>
              {hideDefaultTimePeriod
                ? (
                    startDate
                  )
                : (
                  <>
                    {startDate}
                    <span className='DayPickerInput__labelTo'>to</span>
                    {endDate}
                  </>
                  )}
            </>
            )
          : (
              currentPeriod
            )}
      </div>
    )
  }

  render () {
    const {
      inputRef,
      error,
      disabled,
      from,
      to,
      currentPeriod,
      hideDefaultTimePeriod,
      ...props
    } = this.props
    const buttonClasses = classnames('DayPickerInput__labelWrapper', {
      'DayPickerInput__labelWrapper--error': error,
      'DayPickerInput__labelWrapper--disabled': disabled,
      'DayPickerInput__labelWrapper-single': hideDefaultTimePeriod
    })

    return (
      <button
        ref={inputRef}
        type='button'
        {...props}
        disabled={disabled}
        className={buttonClasses}
      >
        <img src={IconCalendar} alt='calendar' />
        {this.renderDateRange()}
        <img src={IconTriangle} alt='triangle' />
      </button>
    )
  }
}
