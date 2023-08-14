import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SalesForce: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#00A1E0' />
    <path
      d='M14.82 10.963a4.58 4.58 0 013.296-1.4c1.716 0 3.214.947 4.011 2.352a5.594 5.594 0 012.267-.477c3.096 0 5.606 2.504 5.606 5.593a5.599 5.599 0 01-6.71 5.484 4.104 4.104 0 01-3.576 2.076 4.116 4.116 0 01-1.793-.408A4.677 4.677 0 0113.618 27a4.675 4.675 0 01-4.387-3.027 4.338 4.338 0 01-3.061-8.002 4.918 4.918 0 01-.416-1.983C5.754 11.233 8.015 9 10.804 9c1.637 0 3.092.77 4.015 1.963z'
      fill='#fff'
    />
  </svg>
)

export default SalesForce
