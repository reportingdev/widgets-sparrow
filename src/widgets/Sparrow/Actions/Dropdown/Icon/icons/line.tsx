import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Line: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='11'
    viewBox='0 0 18 11'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.6046 0.43934C18.1318 1.02513 18.1318 1.97487 17.6046 2.56066L11.8742 8.92777C11.0635 9.82853 9.7729 9.90796 8.87764 9.11217L5.95019 6.51L2.30459 10.5607C1.77739 11.1464 0.922614 11.1464 0.395406 10.5607C-0.131802 9.97487 -0.131802 9.02513 0.395406 8.43934L4.3258 4.07223C5.13649 3.17146 6.4271 3.09204 7.32236 3.88783L10.2498 6.49L15.6954 0.43934C16.2226 -0.146447 17.0774 -0.146447 17.6046 0.43934Z'
      fill='#866CFF'
    />
  </svg>
)

export default Line
