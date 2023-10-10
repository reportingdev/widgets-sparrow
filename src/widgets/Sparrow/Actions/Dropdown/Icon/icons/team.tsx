import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Team: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='18'
    viewBox='0 0 20 18'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7 10a4 4 0 100-8 4 4 0 000 8zM9.365 12h-4.73C2.09 12 0 14.018 0 16.473V18h14v-1.527C14 14.018 11.909 12 9.365 12zM14.084 5.428c0 .266 0 .533-.052.775.309.073.617.097.926.097 1.85-.048 3.29-1.526 3.24-3.246-.052-1.745-1.62-3.101-3.446-3.053-1.26.049-2.34.727-2.854 1.72 1.26.8 2.134 2.132 2.186 3.707zM16.164 8.1h-2.43a5.901 5.901 0 01-1.053 1.78 6.178 6.178 0 01-.783.706c1.89.423 3.43 1.92 4.05 3.814h4.05v-2.176c0-2.26-1.728-4.124-3.834-4.124z'
      fill='currentColor'
    />
  </svg>
)

export default Team
