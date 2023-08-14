import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const TriangularArrow: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='7'
    height='5'
    viewBox='0 0 7 5'
    fill=' '
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M6.87928 3.94028C6.95654 4.03414 7 4.16189 7 4.29517C7 4.42845 6.95654 4.5562 6.87928 4.65006L6.71603 4.85C6.63924 4.94762 6.53285 5.00191 6.42218 4.99995L0.577823 4.99995C0.467151 5.00191 0.360761 4.94762 0.283972 4.84999L0.120722 4.65006C0.0434585 4.5562 -4.2687e-07 4.42845 -4.15219e-07 4.29517C-4.03568e-07 4.16189 0.0434585 4.03413 0.120722 3.94028L3.21431 0.151471C3.28837 0.0548245 3.39178 1.61396e-07 3.5 1.70857e-07C3.60822 1.80319e-07 3.71163 0.0548245 3.78569 0.151471L6.87928 3.94028Z'
      fill='currentColor'
    />
  </svg>
)

export default TriangularArrow
