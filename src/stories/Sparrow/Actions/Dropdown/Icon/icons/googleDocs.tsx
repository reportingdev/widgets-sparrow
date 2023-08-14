import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleDocs: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
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
      d='M11.998 9.71401H16.798L18 9L13 4L11.998 5.1428V9.71401Z'
      fill='#1967D2'
    />
    <path
      d='M13 9V4H7.125C6.50344 4 6 4.48816 6 5.09086V18.9084C6 19.5111 6.50344 19.9992 7.125 19.9992H16.875C17.4966 19.9992 18 19.5111 18 18.9084V13.4541V9H13Z'
      fill='#4285F4'
    />
    <path d='M16 13H8V14H16V13Z' fill='white' />
    <path d='M13 15H8V16H13V15Z' fill='white' />
    <path d='M16 11H8V12H16V11Z' fill='white' />
  </svg>
)

export default GoogleDocs
