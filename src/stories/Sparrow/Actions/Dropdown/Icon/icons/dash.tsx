import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Dash: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='12'
    height='2'
    viewBox='0 0 12 2'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <line y1='1' x2='12' y2='1' stroke='currentColor' stroke-width='2' />
  </svg>
)
export default Dash
