import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Arrow: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='15'
    viewBox='0 0 20 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M19.588 2.191A2.506 2.506 0 0017.825.428C16.26 0 10 0 10 0S3.74 0 2.175.412c-.84.23-1.533.923-1.763 1.78C0 3.755 0 7.001 0 7.001s0 3.262.412 4.81c.23.857.906 1.532 1.763 1.763 1.581.428 7.825.428 7.825.428s6.26 0 7.825-.412a2.506 2.506 0 001.763-1.762C20 10.263 20 7.019 20 7.019s.016-3.263-.412-4.828z'
      fill='#ff0000'
    />
    <path d='M8 10l5-3-5-3v6z' fill='#fff' />
  </svg>
)

export default Arrow
