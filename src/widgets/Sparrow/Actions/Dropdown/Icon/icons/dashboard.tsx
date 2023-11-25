import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Dashboard: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 0h6c.5523 0 1 .4477 1 1v16c0 .5523-.4477 1-1 1H1c-.5523 0-1-.4477-1-1V1c0-.5523.4477-1 1-1zm4 16.0001c.5523 0 1-.4477 1-1v-12c0-.5523-.4477-1-1-1H3c-.5523 0-1 .4477-1 1v12c0 .5523.4477 1 1 1h2zm10-14c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1s.4477-1 1-1h2zM11 0h6c.5523 0 1 .4477 1 1v4c0 .5523-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1V1c0-.5523.4477-1 1-1zm4 10c.5523 0 1 .4477 1 1v4c0 .5523-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1v-4c0-.5523.4477-1 1-1h2zm-4-2.0001h6c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1v-8c0-.5523.4477-1 1-1z'
      fill='currentColor'
    />
  </svg>
)

export default Dashboard
