import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleSheet: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#0DC54C' />
    <path
      d='M23.5 27H10.5C9.675 27 9 26.3176 9 25.4837V7.51635C9 6.68236 9.675 6 10.5 6H19.4615L25 11.5588V25.4837C25 26.3176 24.325 27 23.5 27Z'
      fill='#FDFFFF'
    />
    <path d='M19.4609 6L24.9994 11.5588H19.4609V6Z' fill='#08962D' />
    <path
      d='M11 14V22H23V14H11ZM12.3333 15.3333H16.3333V17.3333H12.3333V15.3333ZM12.3333 18.6667H16.3333V20.6667H12.3333V18.6667ZM21.6667 20.6667H17.6667V18.6667H21.6667V20.6667ZM21.6667 17.3333H17.6667V15.3333H21.6667V17.3333Z'
      fill='#08962D'
    />
  </svg>
)

export default GoogleSheet
