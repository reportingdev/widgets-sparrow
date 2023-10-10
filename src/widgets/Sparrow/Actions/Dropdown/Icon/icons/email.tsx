import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Email: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M3 2C1.34315 2 0 3.34315 0 5V6.79226V19C0 20.6569 1.34314 22 3 22H21C22.6569 22 24 20.6569 24 19V6.79226V5C24 3.34315 22.6569 2 21 2H3ZM22 5.57392V5C22 4.44771 21.5523 4 21 4H3C2.44772 4 2 4.44772 2 5V5.57392L11.4416 11.7096C11.7823 11.931 12.2177 11.931 12.5584 11.7096L22 5.57392ZM2 8.09197L10.3247 13.5018C11.3469 14.1661 12.6531 14.1661 13.6753 13.5018L22 8.09197V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V8.09197Z'
      fill='#7E8B9D'
    />
  </svg>
)

export default Email
