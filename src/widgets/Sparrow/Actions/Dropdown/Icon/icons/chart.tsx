import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Chart: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M5 23v-7h5v7H5zM15 23V12h5v11h-5z'
      fill='var(--icon-secondary-color)'
    />
    <path
      d='M23 22h-2v-9a2 2 0 00-2-2h-3V7a2 2 0 00-2-2h-3a2 2 0 00-2 2v8H6a2 2 0 00-2 2v5H2V1a1 1 0 00-2 0v21a2 2 0 002 2h21a1 1 0 000-2zM6 22v-5h3v5H6zm5 0V7h3v15h-3zm5 0v-9h3v9h-3z'
      fill='var(--icon-primary-color)'
    />
  </svg>
)

export default Chart
