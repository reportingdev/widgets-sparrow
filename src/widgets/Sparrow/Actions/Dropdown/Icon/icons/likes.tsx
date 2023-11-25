import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Likes: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='18'
    viewBox='0 0 20 18'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M20 5.351C20 2.396 17.538 0 14.5 0A6.436 6.436 0 0010 2.014 6.436 6.436 0 005.5 0C2.462 0 0 2.396 0 5.351c0 3.814 4.75 8.027 7 10.217l2.28 2.218a.76.76 0 00.53.214h.38a.76.76 0 00.53-.214L13 15.568c2.25-2.19 7-6.403 7-10.217z'
      fill='currentColor'
    />
  </svg>
)

export default Likes
