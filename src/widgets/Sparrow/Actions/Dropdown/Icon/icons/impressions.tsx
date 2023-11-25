import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Impressions: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='14'
    viewBox='0 0 20 14'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9.994 0a10.643 10.643 0 019.994 6.7c.016.1.016.201 0 .3a.81.81 0 01-.06.33A10.644 10.644 0 019.994 14c-4.37.023-8.31-2.63-9.934-6.69A.81.81 0 010 7a1 1 0 01.06-.33A10.643 10.643 0 019.994 0zM6.996 7a3 3 0 102.998-3 3 3 0 00-2.998 3z'
      fill='currentColor'
    />
  </svg>
)

export default Impressions
