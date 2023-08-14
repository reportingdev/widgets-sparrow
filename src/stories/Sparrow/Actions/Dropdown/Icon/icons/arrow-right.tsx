import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ArrowRight: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='9'
    height='14'
    viewBox='0 0 9 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M1 1L7 7L1 13' stroke='#A2ABB7' stroke-width='2' />
  </svg>
)

export default ArrowRight
