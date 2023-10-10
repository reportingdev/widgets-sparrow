import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Menu: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='12'
    height='10'
    viewBox='0 0 12 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect y='8' width='12' height='2' rx='1' fill='currentColor' />
    <rect y='4' width='12' height='2' rx='1' fill='currentColor' />
    <rect width='12' height='2' rx='1' fill='currentColor' />
  </svg>
)

export default Menu
