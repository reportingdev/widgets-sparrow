import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const PricingFree: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='49'
    height='46'
    viewBox='0 0 49 46'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g opacity='0.7'>
      <circle cx='28.5938' cy='20.5' r='20' fill='#EAEEF5' />
      <line
        x1='37.4062'
        y1='44.5'
        x2='1.40625'
        y2='44.5'
        stroke='#A2ABB7'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M32.4062 43.5V25.9142C32.4062 25.6192 32.276 25.3393 32.0504 25.1493L20.0504 15.0426C19.6782 14.729 19.1343 14.729 18.7621 15.0426L6.76206 25.1493C6.53646 25.3393 6.40625 25.6192 6.40625 25.9142V43.5'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <rect
        x='14.4062'
        y='36.5'
        width='10'
        height='8'
        rx='1'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <circle cx='19.4062' cy='27.5' r='4' stroke='#A2ABB7' stroke-width='2' />
    </g>
  </svg>
)

export default PricingFree
