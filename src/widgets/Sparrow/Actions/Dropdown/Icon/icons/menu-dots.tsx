import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const MenuDots: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='4'
    height='16'
    viewBox='0 0 4 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 2a2 2 0 11-4 0 2 2 0 014 0zm0 6a2 2 0 11-4 0 2 2 0 014 0zm-2 8a2 2 0 100-4 2 2 0 000 4z'
      fill='currentColor'
    />
  </svg>
)

export default MenuDots
