import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const PipeDriveDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='24'
    viewBox='0 0 18 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10.7617 0C8.2358 0 6.77118 1.21121 6.07072 2.01869C5.98581 1.30093 5.54006 0.381308 3.7995 0.381308H0V4.55327H1.54952C1.80423 4.55327 1.88914 4.64299 1.88914 4.91215V24H6.38911V16.8673V16.329C7.08958 17.0019 8.42683 17.9439 10.5282 17.9439C14.9221 17.9439 17.9999 14.2654 17.9999 8.97196C18.0211 3.61121 15.0919 0 10.7617 0ZM9.84899 13.7944C7.4292 13.7944 6.32543 11.3495 6.32543 9.06168C6.32543 5.4729 8.17212 4.19439 9.91267 4.19439C12.0353 4.19439 13.4787 6.12336 13.4787 9.01682C13.4575 12.3364 11.632 13.7944 9.84899 13.7944Z'
      fill='white'
    />
  </svg>
)

export default PipeDriveDisabled
