import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const LinkedinDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='21'
    height='21'
    viewBox='0 0 21 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M19.9962 20.0012V20.0003H20.0012V12.6658C20.0012 9.07771 19.2287 6.31372 15.034 6.31372C13.0175 6.31372 11.6642 7.42032 11.1117 8.46941H11.0534V6.6487H7.07617V20.0003H11.2176V13.3891C11.2176 11.6484 11.5475 9.96515 13.7032 9.96515C15.8273 9.96515 15.8589 11.9517 15.8589 13.5008V20.0012H19.9962Z'
      fill='white'
    />
    <path
      d='M0.330078 6.64746H4.47648V19.9991H0.330078V6.64746Z'
      fill='white'
    />
    <path
      d='M2.40151 0C1.07576 0 0 1.07576 0 2.40151C0 3.72726 1.07576 4.82552 2.40151 4.82552C3.72726 4.82552 4.80302 3.72726 4.80302 2.40151C4.80219 1.07576 3.72642 0 2.40151 0V0Z'
      fill='white'
    />
  </svg>
)

export default LinkedinDisabled
