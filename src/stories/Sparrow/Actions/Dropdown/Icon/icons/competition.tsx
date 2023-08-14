import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Competition: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='19'
    height='13'
    viewBox='0 0 19 13'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect y='4' width='5' height='9' rx='1' fill='currentColor' />
    <rect x='14' y='7' width='5' height='6' rx='1' fill='currentColor' />
    <rect x='7' width='5' height='13' rx='1' fill='currentColor' />
  </svg>
)

export default Competition
