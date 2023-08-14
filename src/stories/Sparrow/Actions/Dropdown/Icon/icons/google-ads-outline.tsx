import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleAdsOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='22'
    height='18'
    viewBox='0 0 22 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M.5 13L7 3c.838.507 5.318 1.92 6 2.376L6 17c-.24.324-6.237-2.703-5.5-4z'
      fill='#FBBC04'
    />
    <path
      d='M21.497 13.05L14.027 1.64C12.983.089 10.734-.475 8.887.44 7.038 1.357 6.476 3.33 7.52 4.95l7.47 11.411c1.044 1.55 3.293 2.114 5.14 1.198 1.768-.916 2.41-2.959 1.366-4.508z'
      fill='#4285F4'
    />
    <path d='M3.5 18a3.5 3.5 0 100-7 3.5 3.5 0 000 7z' fill='#34A853' />
  </svg>
)

export default GoogleAdsOutline
