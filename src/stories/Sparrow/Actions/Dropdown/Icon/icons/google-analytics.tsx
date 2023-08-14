import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleAnalytics: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#FFF1D2' />
    <path
      d='M26 24.376c.007 1.442-1.11 2.616-2.495 2.624-.103 0-.207-.005-.309-.018-1.285-.198-2.227-1.362-2.195-2.713V8.73c-.031-1.353.913-2.517 2.2-2.713 1.375-.168 2.621.857 2.782 2.289.012.105.018.21.017.317v15.752z'
      fill='#F9AB00'
    />
    <path
      d='M9.58 21.832a2.582 2.582 0 012.581 2.584A2.582 2.582 0 019.581 27 2.582 2.582 0 017 24.416a2.582 2.582 0 012.58-2.584zM16.37 14a2.658 2.658 0 00-2.51 2.717v6.94c0 1.884.829 3.027 2.042 3.27A2.585 2.585 0 0019 24.386v-7.787A2.591 2.591 0 0016.415 14h-.044z'
      fill='#E37400'
    />
  </svg>
)

export default GoogleAnalytics
