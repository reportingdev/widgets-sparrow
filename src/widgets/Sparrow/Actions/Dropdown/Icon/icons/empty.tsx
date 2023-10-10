import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Empty: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='50'
    height='41'
    viewBox='0 0 50 41'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M39.5717 40.6369H1.68801C0.816225 40.6369 0.182277 39.8109 0.409956 38.9706L9.01439 15.4314C9.17012 14.8554 9.69404 14.4551 10.2924 14.4551H48.1761C49.0479 14.4551 49.4542 15.2861 49.4542 16.1214L40.8498 39.6606C40.694 40.2366 40.1701 40.6369 39.5717 40.6369Z'
      fill='#F3F5FB'
    />
    <path
      d='M43.0735 6.47022H21.6045L17.3563 0.545898H1.83488C1.02261 0.545898 0.363281 1.20181 0.363281 2.01174V38.1738C0.421907 38.1755 0.480533 38.1789 0.53746 38.1823L9.04671 15.0656C9.20304 14.4875 9.72898 14.0872 10.3297 14.0872H44.5451V7.93607C44.5451 7.12613 43.8858 6.47022 43.0735 6.47022Z'
      fill='#C2C8DC'
    />
  </svg>
)

export default Empty
