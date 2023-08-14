import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Database: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8 6C11.3137 6 14 5.10457 14 4C14 2.89543 11.3137 2 8 2C4.68629 2 2 2.89543 2 4C2 5.10457 4.68629 6 8 6Z'
      stroke='#7E8B9D'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M2 4V11.619C2 12.9333 4.68615 14 8 14C11.3138 14 14 12.9333 14 11.619V4'
      stroke='#7E8B9D'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M14 8C14 9.104 11.3138 10 8 10C4.68615 10 2 9.104 2 8'
      stroke='#7E8B9D'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)

export default Database
