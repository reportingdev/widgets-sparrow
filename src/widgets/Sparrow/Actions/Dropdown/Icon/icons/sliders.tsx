import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Sliders: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='22'
    height='20'
    viewBox='0 0 22 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 0a1 1 0 00-1 1v18a1 1 0 102 0V1a1 1 0 00-1-1zm7 1a1 1 0 112 0v18a1 1 0 11-2 0V1zm8 0a1 1 0 112 0v18a1 1 0 11-2 0V1z'
      fill='currentColor'
    />
    <circle cx='11' cy='15' r='3' fill='currentColor' />
    <circle cx='11' cy='15' r='1' fill='#fff' />
    <circle cx='3' cy='7' r='3' fill='currentColor' />
    <circle cx='3' cy='7' r='1' fill='#fff' />
    <circle cx='19' cy='6' r='3' fill='currentColor' />
    <circle cx='19' cy='6' r='1' fill='#fff' />
  </svg>
)

export default Sliders
