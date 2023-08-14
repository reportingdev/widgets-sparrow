import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Images: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='22'
    height='22'
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M18 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h14a2 2 0 012 2zM8 6.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm7 8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-.33a.51.51 0 01.1-.3l2.37-3.17a.51.51 0 01.81 0l1 1.36a.5.5 0 00.79 0l2.29-2.88a.5.5 0 01.78 0l3.74 4.67a.52.52 0 01.11.32l.01.33zm5 3.5V4a2 2 0 012 2v12a4 4 0 01-4 4H6a2 2 0 01-2-2h14a2 2 0 002-2z'
      fill='currentColor'
    />
  </svg>
)

export default Images
