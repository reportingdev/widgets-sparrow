import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Download: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M14.914 7.302c-.14-.245-.433-.4-.754-.4h-1.979V.714c0-.395-.376-.715-.84-.715H6.659c-.463 0-.84.32-.84.715v6.186H3.84c-.32 0-.613.156-.754.4a.63.63 0 00.09.754l5.16 5.668A.9.9 0 009 14c.26 0 .505-.102.664-.277l5.16-5.668a.63.63 0 00.09-.753z'
      fill='currentColor'
    />
    <rect y='16' width='18' height='2' rx='1' fill='currentColor' />
  </svg>
)

export default Download
