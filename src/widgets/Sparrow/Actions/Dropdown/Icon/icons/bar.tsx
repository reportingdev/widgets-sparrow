import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Bar: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='11'
    viewBox='0 0 16 11'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M0 4.42969C0 4.15355 0.223858 3.92969 0.5 3.92969H3.5C3.77614 3.92969 4 4.15355 4 4.42969V10.5011C4 10.7773 3.77614 11.0011 3.5 11.0011H0.5C0.223858 11.0011 0 10.7773 0 10.5011V4.42969Z'
      fill='#866CFF'
    />
    <path
      d='M6 0.5C6 0.223858 6.22386 0 6.5 0H9.5C9.77614 0 10 0.223858 10 0.5V10.5C10 10.7761 9.77614 11 9.5 11H6.5C6.22386 11 6 10.7761 6 10.5V0.5Z'
      fill='#866CFF'
    />
    <rect
      x='12'
      y='6.28516'
      width='4'
      height='4.71429'
      rx='0.5'
      fill='#866CFF'
    />
  </svg>
)

export default Bar
