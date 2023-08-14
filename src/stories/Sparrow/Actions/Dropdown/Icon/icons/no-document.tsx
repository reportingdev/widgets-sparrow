import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const NoDocument: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='100'
    height='100'
    viewBox='0 0 100 100'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='50' cy='50' r='50' fill='#E1E6F4' />
    <path
      d='M73.9214 74H27.6191C26.5536 74 25.7788 72.9905 26.057 71.9634L36.5736 43.1933C36.7639 42.4893 37.4043 42 38.1356 42H84.4379C85.5035 42 86 43.0157 86 44.0366L75.4835 72.8067C75.2931 73.5107 74.6528 74 73.9214 74Z'
      fill='#F3F5FB'
    />
    <path
      d='M78.2014 32.2408H51.9615L46.7692 25H27.7986C26.8058 25 26 25.8017 26 26.7916V70.9897C26.0717 70.9917 26.1433 70.9959 26.2129 71L36.6131 42.7463C36.8042 42.0398 37.447 41.5505 38.1812 41.5505H80V34.0324C80 33.0425 79.1942 32.2408 78.2014 32.2408Z'
      fill='#C2C8DC'
    />
  </svg>
)

export default NoDocument
