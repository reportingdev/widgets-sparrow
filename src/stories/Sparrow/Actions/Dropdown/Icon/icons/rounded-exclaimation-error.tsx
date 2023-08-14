import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const RoundedExclamationError: FC<IconProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 8C0 3.58172 3.58172 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM1.6001 8C1.6001 11.5346 4.46548 14.4 8.0001 14.4C9.69748 14.4 11.3253 13.7257 12.5256 12.5255C13.7258 11.3253 14.4001 9.69739 14.4001 8C14.4001 4.46538 11.5347 1.6 8.0001 1.6C4.46548 1.6 1.6001 4.46538 1.6001 8ZM9 11.375C9 11.7202 8.77614 12 8.5 12H7.5C7.22386 12 7 11.7202 7 11.375V7.625C7 7.27982 7.22386 7 7.5 7H8.5C8.77614 7 9 7.27982 9 7.625V11.375ZM8.5 6C8.77614 6 9 5.77614 9 5.5V4.5C9 4.22386 8.77614 4 8.5 4H7.5C7.22386 4 7 4.22386 7 4.5V5.5C7 5.77614 7.22386 6 7.5 6H8.5Z'
      fill='#FF9600'
    />
  </svg>
)

export default RoundedExclamationError
