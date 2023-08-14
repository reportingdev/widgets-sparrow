import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Shares: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='10'
    height='8'
    viewBox='0 0 10 8'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9.85 3.106L6.553.1c-.25-.25-.55 0-.55.401v1.503c-2.347 0-4.345 1.453-5.295 3.406C.358 6.061.16 6.763.01 7.464c-.1.501.65.752.95.3C2.056 6.012 3.905 4.86 6.003 4.86v1.653c0 .401.3.652.55.401L9.85 3.907c.2-.2.2-.6 0-.801z'
      fill='currentColor'
    />
  </svg>
)

export default Shares
