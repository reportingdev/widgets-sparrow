import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Checkmark: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='19'
    height='15'
    viewBox='0 0 19 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M6.3749 11.875L1.9999 7.5.5416 8.9584l5.8333 5.8333 12.5-12.5L17.4166.8334 6.3749 11.875z'
      fill='currentColor'
    />
  </svg>
)
export default Checkmark
