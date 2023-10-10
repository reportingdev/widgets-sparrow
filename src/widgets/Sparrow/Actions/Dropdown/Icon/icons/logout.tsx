import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Logout: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 16h5.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H2a2 2 0 01-2-2V2a2 2 0 012-2h5.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H2v14zM12.64 3.15l5.14 5.13a.77.77 0 01.22.53v.38a.75.75 0 01-.22.53l-5.14 5.13a.5.5 0 01-.71 0l-.71-.7a.5.5 0 010-.71L14.67 10H4.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h10.17l-3.45-3.44a.49.49 0 010-.7l.71-.71a.5.5 0 01.71 0z'
      fill='currentColor'
    />
  </svg>
)

export default Logout
