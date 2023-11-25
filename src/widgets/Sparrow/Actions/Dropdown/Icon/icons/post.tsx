import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Post: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='16'
    viewBox='0 0 20 16'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    {...props}
  >
    <rect
      x='1'
      y='1'
      width='18'
      height='14'
      rx='1'
      stroke='currentColor'
      strokeWidth='2'
    />
    <path
      d='M14.147 9.03c-.284-.346-.742-.346-1.026 0l-1.673 2.046-3.121-3.817c-.284-.345-.743-.345-1.026 0l-5.093 6.228c-.281.351-.995 1.169-.708 1.513.134.16 1.03.997 1.217 1h14.551c.402.003 1.23-1.009 1.232-1.5.001-.24-.577-.853-.715-1.022L14.147 9.03zM14.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
      fill='currentColor'
    />
  </svg>
)

export default Post
