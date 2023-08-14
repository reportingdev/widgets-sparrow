import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Report: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M23 21.8c0 .318-.166.623-.46.848a1.848 1.848 0 01-1.112.352H18c.183-.385.279-.79.283-1.2V11H23v10.8z'
      fill='var(--icon-secondary-color)'
    />
    <path
      d='M14 7H5a1 1 0 000 2h9a1 1 0 100-2zM14 11H5a1 1 0 000 2h9a1 1 0 000-2zM9 15H5a1 1 0 000 2h4a1 1 0 000-2z'
      fill='var(--icon-primary-color)'
    />
    <path
      d='M23 10h-4V3a3 3 0 00-3-3H3a3 3 0 00-3 3v18a3 3 0 003 3h18a3 3 0 003-3V11a1 1 0 00-1-1zm-9 12H3a1 1 0 01-1-1V3a1 1 0 011-1h13a1 1 0 011 1v18a1 1 0 01-1 1h-2zm8-1a1 1 0 01-1 1h-2.18a3 3 0 00.18-1v-9h3v9z'
      fill='var(--icon-primary-color)'
    />
  </svg>
)

export default Report
