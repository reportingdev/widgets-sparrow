import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Camera: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    width='24'
    height='15'
    viewBox='0 0 24 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M23.5937 1.79087C23.341 1.63897 23.0254 1.6251 22.7597 1.7542L17.1428 4.6875V2.5C17.1428 1.11929 15.9916 0 14.5714 0H2.57143C1.15127 0 0 1.11929 0 2.5V12.5C0 13.8807 1.15127 15 2.57143 15H14.5714C15.9916 15 17.1428 13.8807 17.1428 12.5V10.3125L22.7597 13.25C23.1832 13.4557 23.6979 13.2888 23.9096 12.8771C23.9698 12.76 24.0007 12.6308 24 12.5V2.5C24.0001 2.21113 23.8464 1.94282 23.5937 1.79087Z'
      fill='#5179E1'
    />
  </svg>
)

export default Camera
