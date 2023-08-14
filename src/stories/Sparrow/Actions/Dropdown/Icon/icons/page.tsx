import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Page: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 5H22V7H12V5ZM22 9H12V11H22V9ZM12 13H22V15H12V13ZM12 17H22V19H12V17ZM4 7V17H8V7H4ZM10 5H2V19H10V5Z'
      fill='currentColor'
    />
  </svg>
)

export default Page
