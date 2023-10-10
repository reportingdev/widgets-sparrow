import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SeoMonitorOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#F3F5FB' />
    <path
      d='M10.5385 20.72L5 22.1L12.3846 22.56L14.2308 15.2L16.5385 29H17.4615L20.2308 18.88L21.6154 22.1H24.8462C25.7692 24.4 29 23.48 29 21.18C29 19.34 26.2308 17.96 24.8462 20.26H23L20.2308 13.36H19.7692L17.4615 20.72L14.6923 6H14.2308L10.5385 20.72Z'
      fill='url(#paint0_linear)'
    />
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='15.3636'
        y1='1.07143'
        x2='15.5327'
        y2='28.0747'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#A8D600' />
        <stop offset='0.641349' stop-color='#74CA33' />
        <stop offset='1' stop-color='#3CAD3D' />
      </linearGradient>
    </defs>
  </svg>
)

export default SeoMonitorOutline
