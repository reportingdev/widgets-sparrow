import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SEOMonitorPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='23'
    viewBox='0 0 24 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M5.53846 14.72L0 16.1L7.38462 16.56L9.23077 9.2L11.5385 23H12.4615L15.2308 12.88L16.6154 16.1H19.8462C20.7692 18.4 24 17.48 24 15.18C24 13.34 21.2308 11.96 19.8462 14.26H18L15.2308 7.36H14.7692L12.4615 14.72L9.69231 0H9.23077L5.53846 14.72Z'
      fill='url(#paint0_linear)'
    />
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='10.3636'
        y1='-4.92857'
        x2='10.5327'
        y2='22.0747'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#A8D600' />
        <stop offset='0.641349' stop-color='#74CA33' />
        <stop offset='1' stop-color='#3CAD3D' />
      </linearGradient>
    </defs>
  </svg>
)

export default SEOMonitorPlain
