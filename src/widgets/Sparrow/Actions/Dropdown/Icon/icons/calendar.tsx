import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Analytics: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15 2h1a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4a2 2 0 012-2h1V.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V2h8V.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V2zM2 16h14V6H2v10z'
      fill='currentColor'
    />
  </svg>
)

export default Analytics
