import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const CircularPlay: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='12' cy='12' r='11.5' fill='white' stroke='#E0E6EE' />
    <path
      d='M10.0197 7.63128C9.21927 7.15846 8.57031 7.5458 8.57031 8.49573V15.5058C8.57031 16.4567 9.21927 16.8435 10.0197 16.3712L15.9698 12.8573C16.7705 12.3843 16.7705 11.618 15.9698 11.1451L10.0197 7.63128Z'
      fill='#866CFF'
    />
  </svg>
)

export default CircularPlay
