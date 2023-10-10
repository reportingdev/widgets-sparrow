import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Ads: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='22'
    height='18'
    viewBox='0 0 22 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='22' height='18' rx='2' fill='#BEC4CD' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13 14H15.3333C17.9071 14 20 11.7576 20 9C20 6.24242 17.9071 4 15.3333 4H13V14ZM18 9C18 10.6538 16.6538 12 15 12V6C16.6538 6 18 7.3462 18 9Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5 14V12H9V14H11V7.75C11 5.68217 9.20569 4 7 4C4.79431 4 3 5.68217 3 7.75V14H5ZM7 6C8.10347 6 9 6.89653 9 8V10H5V8C5 6.89653 5.89653 6 7 6Z'
      fill='white'
    />
  </svg>
)

export default Ads
