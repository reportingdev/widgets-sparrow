import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Filter: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='14'
    viewBox='0 0 18 14'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.5 2H.5a.5.5 0 01-.5-.5v-1A.5.5 0 01.5 0h17a.5.5 0 01.5.5v1a.5.5 0 01-.5.5zM15 7.5v-1a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h11a.5.5 0 00.5-.5zm-3 5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h5a.5.5 0 01.5.5z'
      fill='currentColor'
    />
  </svg>
)

export default Filter
