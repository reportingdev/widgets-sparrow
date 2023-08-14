import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Mongo: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='12'
    height='24'
    viewBox='0 0 12 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clip-path='url(#clip0_266_18889)'>
      <path
        d='M7.68129 2.67158C6.67329 1.47625 5.80529 0.262242 5.63729 0.0101015C5.61863 -0.00857551 5.59062 -0.00857551 5.57196 0.0101015C5.39462 0.262242 4.52662 1.47625 3.51862 2.67158C-5.12404 13.7004 4.88129 21.1432 4.88129 21.1432L4.96529 21.1992C5.03996 22.3478 5.22662 24.0008 5.22662 24.0008H5.59996H5.97329C5.97329 24.0008 6.15996 22.3572 6.23463 21.1992L6.31862 21.1338C6.31862 21.1432 16.324 13.7004 7.68129 2.67158ZM5.59996 20.9751C5.59996 20.9751 5.15196 20.5922 5.03062 20.3961V20.3774L5.57196 8.36808C5.57196 8.33072 5.62796 8.33072 5.62796 8.36808L6.15996 20.3774V20.3961C6.03863 20.5922 5.59996 20.9751 5.59996 20.9751Z'
        fill='#00684A'
      />
    </g>
    <defs>
      <clipPath id='clip0_266_18889'>
        <rect width='11.2' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default Mongo
