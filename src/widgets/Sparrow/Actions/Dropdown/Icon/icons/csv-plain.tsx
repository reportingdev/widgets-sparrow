import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Csv: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='22'
    viewBox='0 0 16 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M14.5 21.2021H1.5C0.675 21.2021 0 20.5198 0 19.6858V1.71849C0 0.884504 0.675 0.202148 1.5 0.202148H10.4615L16 5.76097V19.6858C16 20.5198 15.325 21.2021 14.5 21.2021Z'
      fill='#0DC54C'
    />
    <path
      d='M10.4609 0.202148L15.9994 5.76097H10.4609V0.202148Z'
      fill='#08962D'
    />
    <path
      d='M2 8.20215V16.2021H14V8.20215H2ZM3.33333 9.53548H7.33333V11.5355H3.33333V9.53548ZM3.33333 12.8688H7.33333V14.8688H3.33333V12.8688ZM12.6667 14.8688H8.66667V12.8688H12.6667V14.8688ZM12.6667 11.5355H8.66667V9.53548H12.6667V11.5355Z'
      fill='#FDFFFF'
    />
  </svg>
)

export default Csv
