import React, { useContext, useState } from 'react'
import { DateTime } from 'luxon'
import classnames from 'classnames'
import { PERIODS_LIST } from './constants'
import SparrowButton from '../Button'
import './daterangepicker.css'


export const DateContext = React.createContext(null)

const DateRangeOverlay = ({
  classNames,
  children,
  selectedDay,
  month,
  enableLocalDates,
  ...props
}: any) => {
  const {
    currentPeriod,
    setPeriod,
    onApplyClick,
    isApplyDisabled,
    setDate,
    hideDefaultTimePeriod,
    style,
    color,
  }: any = useContext(DateContext)

  const dateTime = enableLocalDates ? DateTime.local() : DateTime.utc();
  const [error, setError] = useState<any>(null)
  const { from, to } = selectedDay[1]

  const startDate = from ? DateTime.fromJSDate(from).toFormat('MMM d') : ''
  const endDate = to ? DateTime.fromJSDate(to).toFormat('MMM d') : ''
  const yesterday = dateTime.minus({ day: 1 }).toFormat('yyyy-MM-dd')

  const handleDateInput = (dateProp: any, e: any) => {
    setError(null)
    const { value } = e.target
    const date = new Date(value)

    if (date > new Date()) {
      setError('Date period must be in past.')
      return
    }

    setDate({ [dateProp]: date })
  }

  const overlayClass = classnames(classNames.overlay,'DayPickerInput-Overlay--right');

  return (
    <div className={classNames.overlayWrapper} {...props} style={{ ...style }}>
      <div className={overlayClass}>
        <div className='DayPicker__mobile-form'>
          <h2 className='DayPicker__mobile-form-title'>Time period</h2>
          {error && <div className='DayPicker__mobile-form-error'>{error}</div>}
          <label className='DayPicker__mobile-form-label' htmlFor='start'>
            Start
            <div className='DayPicker__mobile-form-input'>{startDate}</div>
          </label>
          <input
            className='visually-hidden'
            type='date'
            id='start'
            value={from ? DateTime.fromJSDate(from).toFormat('yyyy-MM-dd') : ''}
            onChange={handleDateInput.bind(this, 'from')}
            max={yesterday}
          />
          <label className='DayPicker__mobile-form-label' htmlFor='end'>
            End
            <div className='DayPicker__mobile-form-input'>{endDate}</div>
          </label>
          <input
            className='visually-hidden'
            type='date'
            id='end'
            value={to ? DateTime.fromJSDate(to).toFormat('yyyy-MM-dd') : ''}
            onChange={handleDateInput.bind(this, 'to')}
            max={yesterday}
          />
        </div>
        {children}
        {!hideDefaultTimePeriod && (
          <div className='DayPickerInput__periodsWrapper'>
            <div className='DayPickerInput__periodsList' >
              {PERIODS_LIST.map((period) => {
                const periodClasses = classnames('DayPickerInput__periodItem', {
                  'DayPickerInput__periodItem--active': currentPeriod === period
                })
                return (
                  <button
                    key={period}
                    type='button'
                    onClick={() => setPeriod(period)}
                    className={periodClasses}
                    style={periodClasses==='DayPickerInput__periodItem DayPickerInput__periodItem--active'?{color:color}:{color:'#2c3039'}}
                  >
                    {period}
                  </button>
                )
              })}
            </div>
            <SparrowButton
              className='DayPickerInput__periodSubmit'
              onClick={onApplyClick}
              disabled={isApplyDisabled}
              color={color}
              variant='primary'
            >
              Apply
            </SparrowButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default DateRangeOverlay
