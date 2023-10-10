import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Info: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12A12 12 0 0012 0zm1 16.25c0 .414-.224.75-.5.75h-1c-.276 0-.5-.336-.5-.75v-4.5c0-.414.224-.75.5-.75h1c.276 0 .5.336.5.75v4.5zM12.5 9a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1z'
      fill='currentColor'
    />
  </svg>
)

export default Info
