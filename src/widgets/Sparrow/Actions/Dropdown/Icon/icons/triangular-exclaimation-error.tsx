import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const TriangularExclaimationError: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='12'
    viewBox='0 0 14 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='5' y='4' width='4' height='7' fill='white' />
    <path
      d='M6.13638 1.48075C6.52227 0.819252 7.47807 0.819264 7.86394 1.48077L13.1228 10.4961C13.5116 11.1628 13.0308 12 12.259 12H1.74106C0.969264 12 0.488393 11.1628 0.877286 10.4961L6.13638 1.48075ZM7.00018 4.22845C6.62667 4.22845 6.32391 4.51839 6.32391 4.87608V7.46661C6.32391 7.82425 6.62667 8.11423 7.00018 8.11423C7.37369 8.11423 7.67645 7.82423 7.67645 7.46661V4.87608C7.67648 4.51839 7.37369 4.22845 7.00018 4.22845ZM7.00018 10.7047C7.55956 10.7047 8.01461 10.269 8.01461 9.73328C8.01461 9.1976 7.55956 8.76183 7.00018 8.76183C6.4408 8.76183 5.98575 9.1976 5.98575 9.73328C5.98577 10.269 6.4408 10.7047 7.00018 10.7047Z'
      fill='#FF9600'
    />
  </svg>
)

export default TriangularExclaimationError
