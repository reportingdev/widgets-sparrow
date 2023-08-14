import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Trash: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.5 3l1 .99H19v1.98H5V3.99h3.5l1-.99h5zM6 18.839c0 1.089.9 1.98 2 1.98h8c1.1 0 2-.891 2-1.98V6.959H6v11.88zm2-9.901h8v9.9H8v-9.9z'
      fill='currentColor'
    />
  </svg>
)

export default Trash
