import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Sheets: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clip-path='url(#clip0_266_18932)'>
      <path
        d='M14.5 0.890625L20 6.39062L17.25 6.89062L14.5 6.39062L14 3.64062L14.5 0.890625Z'
        fill='#188038'
      />
      <path
        d='M14.5 6.39062V0.890625H5.5C4.67125 0.890625 4 1.56188 4 2.39062V21.3906C4 22.2194 4.67125 22.8906 5.5 22.8906H18.5C19.3288 22.8906 20 22.2194 20 21.3906V6.39062H14.5Z'
        fill='#34A853'
      />
      <path
        d='M7 9.39062V16.6406H17V9.39062H7ZM11.375 15.3906H8.25V13.6406H11.375V15.3906ZM11.375 12.3906H8.25V10.6406H11.375V12.3906ZM15.75 15.3906H12.625V13.6406H15.75V15.3906ZM15.75 12.3906H12.625V10.6406H15.75V12.3906Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_266_18932'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default Sheets
