import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const DefaultMetrics: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='36'
    height='36'
    viewBox='0 0 36 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='21' y='12' width='3' height='12' fill='currentColor' />
    <rect x='16' y='19' width='3' height='5' fill='currentColor' />
    <rect x='11' y='16' width='3' height='8' fill='currentColor' />
  </svg>
)

export default DefaultMetrics
