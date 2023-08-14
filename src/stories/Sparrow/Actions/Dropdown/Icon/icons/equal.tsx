import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Equal: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='11'
    height='7'
    viewBox='0 0 11 7'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path stroke='currentColor' strokeWidth='2' d='M11 6H0M11 1H0' />
  </svg>
)

export default Equal
