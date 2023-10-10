import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Close: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M11.8513 10.4379a.4999.4999 0 010 .71l-.7.7a.4999.4999 0 01-.71 0l-4.44-4.44-4.44 4.44a.4998.4998 0 01-.71 0l-.7-.7a.5.5 0 010-.71l4.44-4.44-4.44-4.44a.5.5 0 010-.71l.7-.7a.5.5 0 01.71 0l4.44 4.44 4.44-4.44a.5.5 0 01.71 0l.7.7a.4998.4998 0 010 .71l-4.44 4.44 4.44 4.44z'
      fill='currentColor'
    />
  </svg>
)
export default Close
