import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Arrow: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='12'
    height='12'
    viewBox='0 0 12 12'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M11.998 1v7.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V3.42l-8.44 8.43a.5.5 0 01-.71 0l-.7-.7a.5.5 0 010-.71L8.588 2h-5.09a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h7.5c.199 0 .39.08.53.22l.27.27c.129.139.2.32.2.51z'
      fill='currentColor'
    />
  </svg>
)

export default Arrow
