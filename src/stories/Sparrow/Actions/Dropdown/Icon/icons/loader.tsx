import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Loader: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon__Loading ${className}`}
    width='24'
    viewBox='0 0 50 50'
    {...props}
  >
    <circle
      className='Icon__Loading__Spinner__Path'
      cx='25'
      cy='25'
      r='20'
      fill='none'
      strokeWidth='5'
    />
  </svg>
)

export default Loader
