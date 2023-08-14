import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Template: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='15'
    viewBox='0 0 18 15'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect y='6' width='4' height='9' rx='1' fill='currentColor' />
    <rect width='18' height='4' rx='1' fill='currentColor' />
    <rect x='6' y='6' width='12' height='9' rx='1' fill='currentColor' />
  </svg>
)

export default Template
