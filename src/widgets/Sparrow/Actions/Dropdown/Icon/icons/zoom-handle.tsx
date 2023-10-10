import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ZoomHandle: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M9 8h6v10H9V8z' stroke='currentColor' strokeWidth='2' />
    <path
      d='M8.5.5h7V3a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5V.5zM19.5.5h4v3H20a.5.5 0 01-.5-.5V.5zM.5.5h4V3a.5.5 0 01-.5.5H.5v-3zM8.5 23a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v2.5h-7V23zM19.5 23a.5.5 0 01.5-.5h3.5v3h-4V23zM.5 22.5H4a.5.5 0 01.5.5v2.5h-4v-3zM.5 7.5H4a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H.5v-11zM19.5 8a.5.5 0 01.5-.5h3.5v11H20a.5.5 0 01-.5-.5V8z'
      fill='currentColor'
      stroke='currentColor'
    />
  </svg>
)

export default ZoomHandle
