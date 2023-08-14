import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Csv: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='35'
    viewBox='0 0 34 35'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17.2021' r='17' fill='#0DC54C' />
    <path
      d='M23.5 27.2021H10.5C9.675 27.2021 9 26.5198 9 25.6858V7.71849C9 6.8845 9.675 6.20215 10.5 6.20215H19.4615L25 11.761V25.6858C25 26.5198 24.325 27.2021 23.5 27.2021Z'
      fill='#FDFFFF'
    />
    <path d='M19.4609 6.20215L24.9994 11.761H19.4609V6.20215Z' fill='#08962D' />
    <path
      d='M11 14.2021V22.2021H23V14.2021H11ZM12.3333 15.5355H16.3333V17.5355H12.3333V15.5355ZM12.3333 18.8688H16.3333V20.8688H12.3333V18.8688ZM21.6667 20.8688H17.6667V18.8688H21.6667V20.8688ZM21.6667 17.5355H17.6667V15.5355H21.6667V17.5355Z'
      fill='#08962D'
    />
  </svg>
)

export default Csv
