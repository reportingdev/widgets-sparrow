import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Plus: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='20'
    fill='none'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 10C0 4.477 4.477 0 10 0A10 10 0 110 10zm13.5 1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H11V6.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V9H6.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H9v2.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V11h2.5z'
      fill='#A2ABB7'
    />
  </svg>
)

export default Plus
