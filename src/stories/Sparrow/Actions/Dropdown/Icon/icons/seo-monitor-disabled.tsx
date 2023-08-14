import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SEOMonitorDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='28'
    height='27'
    viewBox='0 0 28 27'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M6.46154 17.28L0 18.9L8.61538 19.44L10.7692 10.8L13.4615 27H14.5385L17.7692 15.12L19.3846 18.9H23.1538C24.2308 21.6 28 20.52 28 17.82C28 15.66 24.7692 14.04 23.1538 16.74H21L17.7692 8.64H17.2308L14.5385 17.28L11.3077 0H10.7692L6.46154 17.28Z'
      fill='white'
    />
  </svg>
)

export default SEOMonitorDisabled
