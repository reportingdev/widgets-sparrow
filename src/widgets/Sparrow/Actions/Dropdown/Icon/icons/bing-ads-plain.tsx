import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const BingAdsPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='20'
    viewBox='0 0 14 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M6.86859 10.9251L9.62954 12.2194L3.99818 15.4681V1.4056L0 0V17.7761L4.00046 20L14 14.2365V9.70796L5.1267 6.59304L6.86859 10.9251Z'
      fill='#008373'
    />
  </svg>
)

export default BingAdsPlain
