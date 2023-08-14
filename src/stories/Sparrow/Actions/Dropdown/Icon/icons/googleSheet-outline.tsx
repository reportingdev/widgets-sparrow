import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleSheetOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#F3F5FB' />
    <path
      d='M23.5 28H10.5C9.675 28 9 27.3176 9 26.4837V8.51635C9 7.68236 9.675 7 10.5 7H19.4615L25 12.5588V26.4837C25 27.3176 24.325 28 23.5 28Z'
      fill='#0DC54C'
    />
    <path d='M19.4609 7L24.9994 12.5588H19.4609V7Z' fill='#08962D' />
    <path
      d='M11 15V23H23V15H11ZM12.3333 16.3333H16.3333V18.3333H12.3333V16.3333ZM12.3333 19.6667H16.3333V21.6667H12.3333V19.6667ZM21.6667 21.6667H17.6667V19.6667H21.6667V21.6667ZM21.6667 18.3333H17.6667V16.3333H21.6667V18.3333Z'
      fill='#FDFFFF'
    />
  </svg>
)

export default GoogleSheetOutline
