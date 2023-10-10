import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Grid: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='5' height='5' rx='1' fill='currentColor' />
    <rect y='7' width='5' height='5' rx='1' fill='currentColor' />
    <rect x='7' width='5' height='5' rx='1' fill='currentColor' />
    <rect x='7' y='7' width='5' height='5' rx='1' fill='currentColor' />
  </svg>
)

export default Grid
