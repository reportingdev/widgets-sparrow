import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Happy: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
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
      fill='#FFEB4B'
    />
    <path
      opacity='.98'
      d='M5.921 7.672a1.75 1.75 0 100-3.498 1.75 1.75 0 000 3.498z'
      fill='#0F2229'
    />
    <path
      opacity='.98'
      d='M13.077 7.672a1.75 1.75 0 100-3.498 1.75 1.75 0 000 3.498z'
      fill='#0A1E28'
    />
    <path
      opacity='.98'
      d='M13.22 14.23a.557.557 0 01-.434-.208 4.197 4.197 0 00-3.288-1.58 4.197 4.197 0 00-3.288 1.58.557.557 0 01-.868 0 5.34 5.34 0 01-1.17-3.33c0-.964.785-1.749 1.749-1.749h7.155c.964 0 1.749.785 1.749 1.75a5.34 5.34 0 01-1.17 3.329.557.557 0 01-.434.208z'
      fill='#0F2229'
    />
    <path
      d='M9.498 16.019a5.304 5.304 0 01-4.157-1.997.557.557 0 010-.697 5.304 5.304 0 014.157-1.997c1.623 0 3.139.728 4.157 1.997a.557.557 0 010 .697 5.305 5.305 0 01-4.157 1.997z'
      fill='#FF5860'
    />
  </svg>
)

export default Happy
