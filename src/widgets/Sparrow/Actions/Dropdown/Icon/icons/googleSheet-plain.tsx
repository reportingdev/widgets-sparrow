import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleSheetPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='21'
    viewBox='0 0 16 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M14.5 21H1.5C0.675 21 0 20.3176 0 19.4837V1.51635C0 0.682356 0.675 0 1.5 0H10.4615L16 5.55882V19.4837C16 20.3176 15.325 21 14.5 21Z'
      fill='#0DC54C'
    />
    <path d='M10.4609 0L15.9994 5.55882H10.4609V0Z' fill='#08962D' />
    <path
      d='M2 8V16H14V8H2ZM3.33333 9.33333H7.33333V11.3333H3.33333V9.33333ZM3.33333 12.6667H7.33333V14.6667H3.33333V12.6667ZM12.6667 14.6667H8.66667V12.6667H12.6667V14.6667ZM12.6667 11.3333H8.66667V9.33333H12.6667V11.3333Z'
      fill='#FDFFFF'
    />
  </svg>
)

export default GoogleSheetPlain
