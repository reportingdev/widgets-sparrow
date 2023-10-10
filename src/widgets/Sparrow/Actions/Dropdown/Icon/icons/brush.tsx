import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Brush: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='18'
    viewBox='0 0 20 18'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M19.516.782a1.64 1.64 0 00-1.168-.485 1.64 1.64 0 00-1.14.46L8 9c.986.252 1.95 1.072 2.5 2 .168.283.4.691.5 1l8.542-8.9c.295-.31.458-.717.458-1.146 0-.442-.172-.858-.484-1.172zM7.149 10.3a4.03 4.03 0 00-2.446.747c-.8.566-1.12 1.379-1.707 2.12-.737.928-1.87 1.382-2.996 1.691.655 1.703 3.09 2.4 4.686 2.437l.173.002c1.807 0 3.936-.66 4.807-2.408.957-1.919-.222-4.495-2.517-4.59z'
      fill='currentColor'
    />
  </svg>
)

export default Brush
