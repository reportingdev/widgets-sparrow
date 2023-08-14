import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Clicks: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='12'
    height='20'
    viewBox='0 0 12 20'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7 3v1.09A6 6 0 0112 10v4a6 6 0 01-12 0v-4a6 6 0 015-5.91V2.5A1.5 1.5 0 016.5 1H7V.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1A1.5 1.5 0 017.5 3H7zm-.5 8a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h1z'
      fill='currentColor'
    />
  </svg>
)

export default Clicks
