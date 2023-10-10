import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const HeavyPlus: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='16'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M8 0v16m8-8H0' stroke='currentColor' strokeWidth='3' />
  </svg>
)

export default HeavyPlus
