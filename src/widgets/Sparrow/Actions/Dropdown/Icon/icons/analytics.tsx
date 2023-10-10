import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Analytics: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M23 17.997H1V4h22v13.997z' fill='var(--icon-secondary-color)' />
    <path
      d='M22 3h-9V1a1 1 0 00-2 0v2H2a2 2 0 00-2 1.999v11.997a2 2 0 002 2h6.59l-3.3 3.289a1 1 0 000 1.42 1 1 0 001.42 0l4.7-4.71h1.18l4.7 4.71a1 1 0 001.42 0 1 1 0 000-1.42l-3.3-3.29H22a2 2 0 002-2V5a2 2 0 00-2-2zm0 13.996H2V4.999h20v11.997z'
      fill='var(--icon-primary-color)'
    />
    <path
      d='M9.957 9.39l-3.649 3.762a1.079 1.079 0 00-.308.763 1.104 1.104 0 00.308.763 1.043 1.043 0 00.74.318 1.015 1.015 0 00.74-.318l2.91-3.01 1.866 1.935a1.04 1.04 0 00.74.318 1.017 1.017 0 00.74-.318l3.65-3.762A1.082 1.082 0 0018 9.077a1.109 1.109 0 00-.307-.763 1.045 1.045 0 00-.74-.316 1.02 1.02 0 00-.74.316l-2.909 3.01-1.866-1.935a1.04 1.04 0 00-.74-.318 1.016 1.016 0 00-.74.318z'
      fill='var(--icon-primary-color)'
    />
  </svg>
)

export default Analytics
