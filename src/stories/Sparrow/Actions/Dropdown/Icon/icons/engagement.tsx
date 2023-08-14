import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Engagement: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='10'
    height='12'
    viewBox='0 0 10 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9.908 8.556l-5.5-4.5a.248.248 0 00-.265-.032A.249.249 0 004 4.25v7.5a.251.251 0 00.25.25.25.25 0 00.208-.112L6.384 9H9.75a.25.25 0 00.158-.444zM4.25 0A.25.25 0 004 .25v2a.25.25 0 00.5 0v-2A.25.25 0 004.25 0zM2.25 4h-2a.25.25 0 000 .5h2a.25.25 0 000-.5zM8.25 4h-2a.25.25 0 000 .5h2a.25.25 0 000-.5zM3.013 2.659L1.599 1.245a.25.25 0 00-.354.353l1.414 1.414a.251.251 0 00.354 0 .25.25 0 000-.353zM3.013 5.488a.25.25 0 00-.354 0L1.245 6.902a.25.25 0 00.353.353l1.415-1.413a.25.25 0 000-.354zM7.255 1.245a.25.25 0 00-.353 0L5.487 2.659a.25.25 0 00.354.353L7.255 1.6a.25.25 0 000-.354z'
      fill='currentColor'
    />
  </svg>
)

export default Engagement
