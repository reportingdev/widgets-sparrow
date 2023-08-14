import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Drag: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='5.33333' cy='5.33333' r='1.33333' fill='currentColor' />
    <circle cx='5.33333' cy='10.6663' r='1.33333' fill='currentColor' />
    <circle cx='10.6673' cy='5.33333' r='1.33333' fill='currentColor' />
    <circle cx='10.6673' cy='10.6663' r='1.33333' fill='currentColor' />
  </svg>
)
export default Drag
