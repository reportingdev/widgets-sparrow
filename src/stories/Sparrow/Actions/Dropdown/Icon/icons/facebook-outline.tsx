import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const FacebookOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='7'
    height='15'
    viewBox='0 0 7 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M6.65 2.5h-2.1c-.387 0-.7.373-.7.833v2.5h2.8a.234.234 0 01.202.119c.048.076.061.175.036.265L6.37 8.05c-.048.168-.18.282-.329.283H3.85v6.25c0 .23-.157.417-.35.417H1.75c-.193 0-.35-.187-.35-.417v-6.25H.35c-.193 0-.35-.186-.35-.416V6.25c0-.23.157-.417.35-.417H1.4v-2.5C1.4 1.493 2.654 0 4.2 0h2.45c.193 0 .35.187.35.417v1.666c0 .23-.157.417-.35.417z'
      fill='#207ff8'
    />
  </svg>
)

export default FacebookOutline
