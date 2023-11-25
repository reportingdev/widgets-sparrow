import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const PricingProfessional: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='61'
    height='61'
    viewBox='0 0 61 61'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g opacity='0.7'>
      <circle cx='40.25' cy='20' r='20' fill='#EAEEF5' />
      <line
        x1='52.75'
        y1='60'
        x2='1.75'
        y2='60'
        stroke='#A2ABB7'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M45.75 59V28C45.75 27.4477 45.3023 27 44.75 27L35.75 27.0002L26.75 27C26.1977 27 25.75 27.4477 25.75 28V59'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <rect
        x='31.75'
        y='49'
        width='8'
        height='11'
        rx='1'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <rect
        x='31.75'
        y='34'
        width='8'
        height='8'
        rx='1'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <path
        d='M25.75 59V16C25.75 15.4477 25.3023 15 24.75 15L15.75 15.0002L6.75002 15C6.19773 15 5.75 15.4477 5.75 16V59'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <rect
        x='11.75'
        y='49'
        width='8'
        height='11'
        rx='1'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <rect
        x='11.75'
        y='34'
        width='8'
        height='8'
        rx='1'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <rect
        x='11.75'
        y='21'
        width='8'
        height='8'
        rx='1'
        stroke='#A2ABB7'
        stroke-width='2'
      />
    </g>
  </svg>
)

export default PricingProfessional
