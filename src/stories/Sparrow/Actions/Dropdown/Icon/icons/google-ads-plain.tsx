import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleAdsPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='22'
    height='18'
    viewBox='0 0 22 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M0.500311 13.0002L7 3.00024C7.83826 3.50693 12.3181 4.91964 13 5.37636L5.99919 17.0001C5.7602 17.3246 -0.237296 14.2967 0.500311 13.0002Z'
      fill='#FBBC04'
    />
    <path
      d='M21.497 13.0501L14.027 1.63876C12.9827 0.0887749 10.7335 -0.474732 8.88618 0.44114C7.03886 1.35701 6.47636 3.32998 7.52067 4.94988L14.9906 16.3612C16.0349 17.9112 18.2841 18.4747 20.1315 17.5589C21.8989 16.643 22.5413 14.6001 21.497 13.0508V13.0501Z'
      fill='#4285F4'
    />
    <path
      d='M3.5 18C5.433 18 7 16.433 7 14.5C7 12.567 5.433 11 3.5 11C1.567 11 0 12.567 0 14.5C0 16.433 1.567 18 3.5 18Z'
      fill='#34A853'
    />
  </svg>
)

export default GoogleAdsPlain
