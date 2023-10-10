import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Crown: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4.97988 15C4.65545 12.848 4.33103 10.696 4.0066 8.54397C3.93465 8.06692 4.46655 7.74156 4.84489 8.03116C5.85566 8.80478 6.86638 9.57835 7.87716 10.352C8.20996 10.6067 8.68409 10.5238 8.91481 10.1706L11.4392 6.30627C11.706 5.89791 12.294 5.89791 12.5607 6.30627L15.0851 10.1706C15.3159 10.5238 15.79 10.6066 16.1228 10.352C17.1336 9.57835 18.1443 8.80478 19.1551 8.03116C19.5334 7.74156 20.0653 8.06692 19.9934 8.54397C19.669 10.696 19.3446 12.848 19.0201 15H4.97988Z'
      fill='#FFB743'
    />
    <path
      d='M18.27 18H5.7299C5.32679 18 5 17.7199 5 17.3744V16H19V17.3744C18.9999 17.7199 18.6732 18 18.27 18Z'
      fill='#FFB743'
    />
  </svg>
)

export default Crown
