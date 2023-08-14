import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Followers: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='14'
    viewBox='0 0 20 14'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10 3a3 3 0 11-6 0 3 3 0 016 0zm4.501-1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-2.05 7.66A3 3 0 009.76 8H4.238a3.001 3.001 0 00-2.69 1.66L.106 12.55A1 1 0 00.997 14h12.004a1 1 0 00.89-1.45l-1.44-2.89zm6.492.99l.95 1.9a1 1 0 01-.89 1.45h-3.171a3 3 0 00-.15-2.34L14.352 9h1.91c1.133 0 2.17.638 2.68 1.65z'
      fill='currentColor'
    />
  </svg>
)

export default Followers
