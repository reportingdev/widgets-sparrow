import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Refresh: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='21'
    height='18'
    viewBox='0 0 21 18'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M20.998 9a9 9 0 01-9 9 8.89 8.89 0 01-5.16-1.63.5.5 0 01-.07-.76l.72-.73a.5.5 0 01.63-.06 6.911 6.911 0 003.88 1.18 7 7 0 10-7-7h2.36a.49.49 0 01.36.15l.2.2a.5.5 0 010 .71l-3.53 3.54a.51.51 0 01-.71 0l-3.53-3.54a.5.5 0 010-.71l.2-.2A.49.49 0 01.708 9h2.29a9 9 0 0118 0z'
      fill='currentColor'
    />
  </svg>
)

export default Refresh
