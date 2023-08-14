import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleSlides: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
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
      d='M13.8078 4L17.9983 7.96973L16.4559 8.63135H13.1094V6.31568L13.8078 4Z'
      fill='#F29900'
    />
    <path
      d='M13.7647 7.9998V4H7.125C6.50344 4 6 4.48816 6 5.09086V18.9084C6 19.5111 6.50344 19.9992 7.125 19.9992H16.875C17.4966 19.9992 18 19.5111 18 18.9084V7.9998H13.7647Z'
      fill='#FBBC04'
    />
    <path
      d='M8 11V16H16V11H8ZM14.6667 14.75H9.33333V12.25H14.6667V14.75Z'
      fill='white'
    />
  </svg>
)

export default GoogleSlides
