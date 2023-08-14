import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ArrowLeft: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='33'
    viewBox='0 0 18 33'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 16.5001c0-.3926.152-.7831.4556-1.0964l14.399-14.85c.6601-.6806 1.7969-.7425 2.5414-.1373.7424.6053.8099 1.6494.1498 2.33L4.2078 16.5l13.3358 13.7536c.6602.6806.5927 1.7248-.1497 2.3299-.7425.6053-1.8814.5434-2.5415-.1372L.4534 17.5962C.152 17.283 0 16.8924 0 16.4999v.0002z'
      fill='#A2ABB7'
    />
  </svg>
)

export default ArrowLeft
