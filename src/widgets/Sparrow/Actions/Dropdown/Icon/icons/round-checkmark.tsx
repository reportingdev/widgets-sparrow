import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const RoundCheckmark: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
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
      d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm-1.8-8a.532.532 0 01-.39-.17l-2.646-2.65a.56.56 0 010-.793l.59-.593a.532.532 0 01.778 0l1.667 1.666 5.27-5.3a.553.553 0 01.777 0l.59.592a.56.56 0 010 .794l-6.248 6.285A.532.532 0 0110.2 16z'
      fill='currentColor'
    />
  </svg>
)
export default RoundCheckmark
