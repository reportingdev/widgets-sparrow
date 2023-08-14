import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const LowerThan: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='9'
    height='13'
    viewBox='0 0 9 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M8 1L2 6.5L8 12' stroke='currentColor' strokeWidth='2' />
  </svg>
)

export default LowerThan
