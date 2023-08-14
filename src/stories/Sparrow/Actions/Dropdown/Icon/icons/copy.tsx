import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Copy: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='16'
    viewBox='0 0 14 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M5.347 13C3.915 13 3 11.953 3 10.474V4H1.68C.755 4 0 4.779 0 5.737v8.526C0 15.221.754 16 1.68 16h7.64c.926 0 1.68-.779 1.68-1.737V13H5.347z'
      fill='currentColor'
    />
    <path
      d='M14 1.68C14 .753 13.307 0 12.453 0H6.547C5.692 0 5 .752 5 1.68v7.64c0 .928.692 1.68 1.547 1.68h5.906C13.307 11 14 10.248 14 9.32V1.68z'
      fill='currentColor'
    />
  </svg>
)

export default Copy
