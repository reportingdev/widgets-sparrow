import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Document: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='19'
    viewBox='0 0 18 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3.644 0C2.976 0 2.43.534 2.43 1.188v16.625c0 .653.546 1.187 1.214 1.187h12.143c.668 0 1.214-.534 1.214-1.188V4.75L12.144 0h-8.5z'
      fill='#DFE4F0'
    />
    <path
      d='M13.359 4.75h3.643L12.145 0v3.563c0 .653.546 1.187 1.214 1.187z'
      fill='#B1BDDA'
    />
    <path
      d='M12 14.076c0 .314-.262.57-.583.57H.583a.579.579 0 01-.583-.57V10.37c0-.314.263-.57.583-.57h10.834c.32 0 .583.256.583.57v3.705z'
      fill='currentColor'
    />
  </svg>
)

export default Document
