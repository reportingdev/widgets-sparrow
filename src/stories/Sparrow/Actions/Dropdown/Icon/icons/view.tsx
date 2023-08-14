import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const View: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 19V5H22V19H2ZM19.8949 7H4.10547V11H19.8949V7ZM4.10547 17V13H8.316V17H4.10547ZM10.4219 13V17H19.8956V13H10.4219Z'
      fill='currentColor'
    />
  </svg>
)

export default View
