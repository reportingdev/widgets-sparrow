import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Facebook: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...props}
  >
    <circle cx='12' cy='12' r='12' fill='#207ff8' />
    <path
      d='M14.65 8.167h-2.1c-.387 0-.7.323-.7.722v2.167h2.8a.242.242 0 01.202.102.26.26 0 01.036.23l-.518 1.589a.351.351 0 01-.329.245H11.85v5.417c0 .2-.157.361-.35.361H9.75a.356.356 0 01-.35-.361v-5.417H8.35a.356.356 0 01-.35-.36v-1.445c0-.2.157-.361.35-.361H9.4V8.889C9.4 7.293 10.654 6 12.2 6h2.45c.193 0 .35.162.35.361v1.445c0 .199-.157.36-.35.36z'
      fill='#ffffff'
    />
  </svg>
)

export default Facebook
