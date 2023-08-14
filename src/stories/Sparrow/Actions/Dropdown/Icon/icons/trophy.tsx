import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Trophy: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='22'
    height='22'
    viewBox='0 0 22 22'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M16.5 11V9.664c2.256 0 4.09-1.797 4.09-4.007V2.986h-3.408V1.65H22v4.007C22 8.603 19.508 11 16.5 11zM5.5 11V9.664c-2.256 0-4.09-1.797-4.09-4.007V2.986h3.408V1.65H0v4.007C0 8.603 2.492 11 5.5 11zM9.35 13.75h3.3v7.15h-3.3v-7.15z'
      fill='currentColor'
    />
    <path
      d='M4.583 0v7.355c0 4.028 2.882 7.312 6.417 7.312 3.535 0 6.417-3.284 6.417-7.312V0H4.583zM17.05 20.625V22H4.95v-1.375c0-.756.636-1.375 1.414-1.375h9.272c.778 0 1.414.619 1.414 1.375z'
      fill='currentColor'
    />
  </svg>
)

export default Trophy
