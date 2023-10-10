import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const PricingStarter: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='55'
    height='49'
    viewBox='0 0 55 49'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g opacity='0.7'>
      <circle cx='34.75' cy='20' r='20' fill='#EAEEF5' />
      <line
        x1='42.25'
        y1='48'
        x2='1.25'
        y2='48'
        stroke='#A2ABB7'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M37.25 47V18C37.25 17.4477 36.8023 17 36.25 17L21.75 17.0002L7.25001 17C6.69772 17 6.25 17.4477 6.25 18V47'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <rect x='15.25' y='36' width='13' height='12' rx='1' fill='#EAEEF5' />
      <rect x='15.25' y='36' width='13' height='12' rx='1' fill='#EAEEF5' />
      <rect
        x='15.25'
        y='36'
        width='13'
        height='12'
        rx='1'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <rect x='12.25' y='23' width='7' height='7' rx='1' fill='#EAEEF5' />
      <rect x='12.25' y='23' width='7' height='7' rx='1' fill='#EAEEF5' />
      <rect
        x='12.25'
        y='23'
        width='7'
        height='7'
        rx='1'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <rect x='24.25' y='23' width='7' height='7' rx='1' fill='#EAEEF5' />
      <rect x='24.25' y='23' width='7' height='7' rx='1' fill='#EAEEF5' />
      <rect
        x='24.25'
        y='23'
        width='7'
        height='7'
        rx='1'
        stroke='#A2ABB7'
        stroke-width='2'
      />
    </g>
  </svg>
)

export default PricingStarter
