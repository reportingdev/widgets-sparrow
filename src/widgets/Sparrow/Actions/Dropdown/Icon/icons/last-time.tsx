import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const LastTime: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='26'
    height='22'
    viewBox='0 0 26 22'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M14 6v5.968L19.136 15 20 13.55l-4.2-2.477V6H14z'
      fill='currentColor'
    />
    <path
      d='M14.85 0C8.692 0 3.715 4.926 3.715 11H0l4.822 4.76.087.178L9.905 11H6.19c0-4.724 3.88-8.556 8.666-8.556 4.785 0 8.667 3.832 8.667 8.556 0 4.724-3.882 8.555-8.667 8.555a8.688 8.688 0 01-6.122-2.511l-1.752 1.73A11.144 11.144 0 0014.85 22C21.01 22 26 17.075 26 11c0-6.074-4.99-11-11.15-11z'
      fill='currentColor'
    />
  </svg>
)

export default LastTime
