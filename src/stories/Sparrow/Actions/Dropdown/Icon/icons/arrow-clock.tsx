import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ArrowClock: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='26'
    height='22'
    viewBox='0 0 26 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M14 6V11.9681L19.136 15L20 13.5497L15.8 11.0729V6H14Z'
      fill='#866CFF'
    />
    <path
      d='M14.8509 0C8.69143 0 3.71429 4.92554 3.71429 11H0L4.82236 15.7605L4.90901 15.9377L9.90478 11H6.1905C6.1905 6.27613 10.0719 2.44446 14.8571 2.44446C19.6424 2.44446 23.5238 6.27613 23.5238 11C23.5238 15.7239 19.6424 19.5555 14.8571 19.5555C12.4614 19.5555 10.3009 18.59 8.73478 17.0439L6.98286 18.7733C8.99478 20.7655 11.7743 22 14.8509 22C21.0105 22 26 17.0745 26 11C26 4.92554 21.0105 0 14.8509 0Z'
      fill='#866CFF'
    />
  </svg>
)

export default ArrowClock
