import React, { ButtonHTMLAttributes, FC } from 'react'
import classnames from 'classnames'
import './button.css'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: string
  className?: string
  loading?: boolean
  label?:string
  color: string
  isDisabled?: boolean
  loadingIconColor?: string
}

/**
 * Button component which accepts all HTML button attributes
 */
const SparrowButton: FC<Props> = ({
  children,
  loading,
  className = '',
  variant = 'primary',
  label="Learn more",
  color,
  isDisabled,
  ...props
}) => {
  // set the classes for the button and it's children
  const buttonClasses = classnames(
    'Button--Default',
    {
      'Button--Primary':variant === 'primary',
      'Button--Primary--widget':variant === 'primary',
      'Button--Secondary': variant === 'secondary',
      'Button--Secondary--widget': variant === 'secondary',
      'Button__Loading--default': loading
    },
    className
  )

  const cssStyle = `
    .Button--Primary--widget {
      background: ${color}
    }
    .Button--Primary--widget.Button__Loading--default {
      background: ${color};
      opacity: 0.5;
    }
    .Button--Primary--widget:hover:enabled {
      background: ${color};
      opacity: 0.9;
    }
    .Button--Secondary--widget {
      color: ${color};
    }
    `

  // render the button
  return (
    <>
    <style>{cssStyle}</style>
    <button className={buttonClasses} {...props}>
      <div className={classnames({ 'Button__Content--hidden': loading })}>
        {children}
      </div>
      {loading === true && (
        <div className='Button__Loading__Container'>
          <svg className='Button__Loading__Spinner' viewBox='0 0 50 50'>
            <circle
              className='Button__Loading__Spinner__Path'
              cx='25'
              cy='25'
              r='20'
              fill='none'
              strokeWidth='5'
              style={{ stroke: '#6B7280' }} />
          </svg>
        </div>
      )}
    </button>
    </>
  )
}

export default SparrowButton
