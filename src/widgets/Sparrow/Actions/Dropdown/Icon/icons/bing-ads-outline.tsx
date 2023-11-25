import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const BingAdsOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#F3F5FB' />
    <path
      d='M17.8686 17.9251L20.6295 19.2194L14.9982 22.4681V8.4056L11 7V24.7761L15.0005 27L25 21.2365V16.708L16.1267 13.593L17.8686 17.9251Z'
      fill='#008373'
    />
  </svg>
)

export default BingAdsOutline
