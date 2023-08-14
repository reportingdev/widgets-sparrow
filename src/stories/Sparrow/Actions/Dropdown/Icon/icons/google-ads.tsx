import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleAds: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#E1E7EF' />
    <path
      d='M7.5 21L14 11c.838.507 5.318 1.92 6 2.376L13 25c-.24.325-6.237-2.703-5.5-4z'
      fill='#FBBC04'
    />
    <path
      d='M28.497 21.05L21.027 9.64c-1.044-1.55-3.294-2.114-5.14-1.198-1.848.916-2.41 2.889-1.366 4.509l7.47 11.411c1.044 1.55 3.293 2.114 5.14 1.198 1.768-.916 2.41-2.959 1.366-4.508z'
      fill='#4285F4'
    />
    <path d='M10.5 26a3.5 3.5 0 100-7 3.5 3.5 0 000 7z' fill='#34A853' />
  </svg>
)

export default GoogleAds
