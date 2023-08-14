import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Sync: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='14'
    viewBox='0 0 16 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7.00001 0C10.5195 0 13.4323 2.61378 13.9201 5.99998H16L13 8.99998L9.99998 5.99998H11.8989C11.4343 3.72069 9.41443 1.99998 7.00001 1.99998C4.24316 1.99998 2.00002 4.24315 2.00002 6.99997C2.00002 9.75679 4.24316 12 7.00001 12C8.60399 12 10.1221 11.2217 11.0606 9.91894L12.6836 11.0869C11.3701 12.9111 9.2456 14 7.00001 14C3.14016 14 0 10.8594 0 7C0 3.14062 3.14016 0 7.00001 0Z'
      fill='#A2ABB7'
    />
    <path
      d='M5.99998 4V8.16538L8.97445 10L9.99998 8.24342L7.99267 7.00502V4.00003L5.99998 4Z'
      fill='#A2ABB7'
    />
  </svg>
)

export default Sync
