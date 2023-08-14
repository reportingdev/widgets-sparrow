import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const LimlistDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M1.6 0C2.48366 0 3.2 0.716344 3.2 1.6V9.6C3.2 11.3673 4.63269 12.8 6.4 12.8H14.4C15.2837 12.8 16 13.5163 16 14.4C16 15.2837 15.2837 16 14.4 16H6.4C2.86538 16 0 13.1346 0 9.6V1.6C0 0.716344 0.716344 0 1.6 0ZM12.8 6.4C13.6837 6.4 14.4 7.11634 14.4 8C14.4 8.88366 13.6837 9.6 12.8 9.6H8C7.11634 9.6 6.4 8.88366 6.4 8C6.4 7.11634 7.11634 6.4 8 6.4H12.8ZM14.4 0C15.2837 0 16 0.716344 16 1.6C16 2.48366 15.2837 3.2 14.4 3.2H8C7.11634 3.2 6.4 2.48366 6.4 1.6C6.4 0.716344 7.11634 0 8 0H14.4Z'
      fill='white'
    />
  </svg>
)

export default LimlistDisabled
