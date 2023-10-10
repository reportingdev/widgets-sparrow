import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ZoomOut: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='50'
    height='50'
    viewBox='0 0 50 50'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clipZoomOut0)' fill='currentColor'>
      <path d='M49.428 46.665L35.32 32.56c6.427-7.82 5.99-19.429-1.313-26.732-7.77-7.77-20.412-7.77-28.18 0-7.77 7.77-7.77 20.411 0 28.18 7.3 7.302 18.907 7.744 26.73 1.314l14.107 14.107a1.954 1.954 0 002.763-2.763zm-18.183-15.42c-6.246 6.246-16.41 6.246-22.655 0-6.246-6.246-6.246-16.41 0-22.655 6.246-6.246 16.409-6.247 22.655 0 6.246 6.246 6.246 16.409 0 22.655z' />
      <path d='M8.398 19.917c0-1.079.875-1.953 1.954-1.953h19.13a1.954 1.954 0 110 3.907h-19.13a1.954 1.954 0 01-1.954-1.954z' />
    </g>
    <defs>
      <clipPath id='clipZoomOut0'>
        <path fill='currentColor' d='M0 0h50v50H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default ZoomOut
