import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Competitive: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='21'
    height='21'
    viewBox='0 0 21 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      opacity='.6'
      d='M9.667 7H8.333C8.15 7 8 7.192 8 7.429v5.142c0 .237.15.429.333.429h1.334c.184 0 .333-.192.333-.429V7.43C10 7.192 9.85 7 9.667 7zM6.667 9H5.333C5.15 9 5 9.224 5 9.5v3c0 .276.15.5.333.5h1.334c.184 0 .333-.224.333-.5v-3c0-.276-.15-.5-.333-.5zM12.667 5h-1.334c-.184 0-.333.18-.333.4v7.2c0 .22.15.4.333.4h1.334c.184 0 .333-.18.333-.4V5.4c0-.22-.15-.4-.333-.4z'
      fill='currentColor'
    />
    <path
      d='M20.744 19.506l-5.223-5.223A8.706 8.706 0 0017.5 8.75C17.5 3.925 13.575 0 8.75 0S0 3.925 0 8.75s3.925 8.75 8.75 8.75a8.706 8.706 0 005.534-1.98l5.222 5.224a.873.873 0 001.238 0 .874.874 0 000-1.238zM8.75 15.75c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z'
      fill='currentColor'
    />
  </svg>
)

export default Competitive
