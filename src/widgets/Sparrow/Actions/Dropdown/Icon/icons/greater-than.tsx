import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GreaterThan: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='9'
    height='13'
    viewBox='0 0 9 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M1 1l6 5.5L1 12' stroke='currentColor' strokeWidth='2' />
  </svg>
)

export default GreaterThan
