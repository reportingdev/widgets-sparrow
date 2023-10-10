import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const FacebookPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='9'
    height='18'
    viewBox='0 0 9 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8.55 3H5.85C5.35294 3 4.95 3.44772 4.95 4V7H8.55C8.65236 6.99748 8.74944 7.05039 8.8103 7.14188C8.87116 7.23336 8.8882 7.35201 8.856 7.46L8.19 9.66C8.12863 9.86192 7.95881 9.99842 7.767 10H4.95V17.5C4.95 17.7761 4.74853 18 4.5 18H2.25C2.00147 18 1.8 17.7761 1.8 17.5V10H0.45C0.201472 10 0 9.77614 0 9.5V7.5C0 7.22386 0.201472 7 0.45 7H1.8V4C1.8 1.79086 3.41177 0 5.4 0H8.55C8.79853 0 9 0.223858 9 0.5V2.5C9 2.77614 8.79853 3 8.55 3Z'
      fill='#207FF8'
    />
  </svg>
)

export default FacebookPlain
