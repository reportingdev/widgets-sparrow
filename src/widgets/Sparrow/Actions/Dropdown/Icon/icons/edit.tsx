import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Analytics: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.258 4.692a.83.83 0 010 1.175l-1.525 1.525-3.125-3.125 1.525-1.525a.83.83 0 011.175 0l1.95 1.95zM2.5 17.5v-3.125l9.217-9.217 3.125 3.125L5.625 17.5H2.5z'
      fill='currentColor'
    />
  </svg>
)

export default Analytics
