import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Overview: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='14'
    viewBox='0 0 14 14'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='8' width='6' height='6' rx='1' fill='currentColor' />
    <rect width='6' height='6' rx='1' fill='currentColor' />
    <rect x='8' y='8' width='6' height='6' rx='1' fill='currentColor' />
    <rect y='8' width='6' height='6' rx='1' fill='currentColor' />
  </svg>
)

export default Overview
