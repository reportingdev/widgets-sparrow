import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Views: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='22'
    height='16'
    viewBox='0 0 22 16'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M21.51 8.87l-3.6-7.74A2 2 0 0016.11 0H14.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1.61L18 6.11a4.94 4.94 0 00-5.35 2.42A3 3 0 0011 8a2.94 2.94 0 00-1.67.54A4.95 4.95 0 004 6.11L5.89 2H7.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H5.89a2 2 0 00-1.82 1.15L.47 8.89A4.93 4.93 0 000 11a5 5 0 0010 0 1 1 0 112 0 5 5 0 0010 0 4.929 4.929 0 00-.49-2.13zM5 14a3 3 0 110-6 3 3 0 010 6zm9-3a3 3 0 106 0 3 3 0 00-6 0z'
      fill='currentColor'
    />
  </svg>
)

export default Views
