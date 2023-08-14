import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Pptx: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
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
      d='M8.00027 4C7.45039 4 7.00049 4.45 7.00049 5V19C7.00049 19.55 7.45039 20 8.00027 20H17.9981C18.548 20 18.9979 19.55 18.9979 19V7.99999L14.9987 4H8.00027Z'
      fill='#DFE4F0'
    />
    <path
      d='M16.0003 7.99999H18.9996L15.0005 4V6.99999C15.0005 7.54999 15.4504 7.99999 16.0003 7.99999Z'
      fill='#B1BDDA'
    />
    <path
      d='M15.0005 15.5291C15.0005 15.7881 14.7817 16 14.5144 16H5.4866C5.21924 16 5.00049 15.7881 5.00049 15.5291V12.4709C5.00049 12.2119 5.21924 12 5.4866 12H14.5144C14.7817 12 15.0005 12.2119 15.0005 12.4709V15.5291Z'
      fill='#EF6C00'
    />
  </svg>
)

export default Pptx
