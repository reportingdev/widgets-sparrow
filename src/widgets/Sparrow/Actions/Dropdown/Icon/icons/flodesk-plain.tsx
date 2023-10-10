import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const FlodeskPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='13'
    height='22'
    viewBox='0 0 13 22'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9.10873 22C7.22439 20.2596 7.53821 20.4287 7.53821 10.2994H10.3654L10.6795 9.42914C9.68486 9.47749 7.44514 9.3934 6.43913 9.28409C3.76924 8.99399 3.18955 6.66901 3.9263 5.80295C5.65387 3.77217 6.59618 6.09298 8.4808 6.96328C13.3246 9.2001 15.3911 0.127417 8.95196 0.000866893C3.92743 -0.0978813 2.66988 8.26861 0 10.2994H2.82693C2.82693 18.398 3.14104 20.4044 1.41347 22H9.10873Z'
      fill='#1F1C1C'
    />
  </svg>
)

export default FlodeskPlain
