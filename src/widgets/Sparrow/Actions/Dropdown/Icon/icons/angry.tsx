import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Angry: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='19'
    height='19'
    viewBox='0 0 19 19'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      opacity='.98'
      d='M13.077 19H5.923A5.93 5.93 0 010 13.077V5.923A5.93 5.93 0 015.923 0h7.154A5.93 5.93 0 0119 5.923v7.154A5.93 5.93 0 0113.077 19z'
      fill='#EF5353'
    />
    <path
      d='M12 12.5c-1.5-1.5-3.5-1.5-5 0'
      stroke='#000'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      opacity='.98'
      d='M5.75 9.498A1.75 1.75 0 105.75 6a1.75 1.75 0 000 3.498z'
      fill='#0A1E28'
    />
    <path d='M5 5l2 2' stroke='#0E1D27' strokeLinecap='round' />
    <path
      opacity='.98'
      d='M12.75 9.497a1.75 1.75 0 100-3.498 1.75 1.75 0 000 3.498z'
      fill='#0A1E28'
    />
    <path d='M14 5l-2.5 2' stroke='#0E1D27' strokeLinecap='round' />
  </svg>
)

export default Angry
