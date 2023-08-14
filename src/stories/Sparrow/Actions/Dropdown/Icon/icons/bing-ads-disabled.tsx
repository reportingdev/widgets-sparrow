import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const BingAdsDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='26'
    viewBox='0 0 18 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8.83105 14.2027L12.3808 15.8852L5.14051 20.1085V1.82728L0 0V23.1089L5.14344 26L18 18.5075V12.6203L6.59147 8.57095L8.83105 14.2027Z'
      fill='white'
    />
  </svg>
)

export default BingAdsDisabled
