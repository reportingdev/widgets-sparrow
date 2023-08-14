import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Report: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='20'
    viewBox='0 0 16 20'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.24 0H14a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V7.24a3 3 0 01.88-2.12L5.12.88A3 3 0 017.24 0zM2 8v10h12V2H8v5a1 1 0 01-1 1H2z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 11.5v-1a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5zm.5 2.5h4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5z'
      fill='currentColor'
    />
  </svg>
)

export default Report
