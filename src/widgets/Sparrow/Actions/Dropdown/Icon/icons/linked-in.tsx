import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const LinkedIn: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 0 512 512'
    {...props}
  >
    <g id='XMLID_1_'>
      <circle id='XMLID_3_' fill='#346da6' cx='256' cy='256' r='256' />
      <path
        id='XMLID_7_'
        fill='#FFFFFF'
        d='M187.1,374.2V217.8h-48.4v156.4H187.1z M187.1,162.9c0-14-9.3-24.2-25.1-24.2
          c-14.9,0-25.1,10.2-25.1,24.2s9.3,24.2,24.2,24.2l0,0C176.9,187.1,187.1,175.9,187.1,162.9z M265.3,374.2v-89.4c0-4.7,0-9.3,1.9-13
          c3.7-9.3,12.1-19.5,27-19.5c19.5,0,30.7,11.2,30.7,32.6v89.4h48.4V283c0-49.3-26.1-71.7-60.5-71.7c-28.9,0-41,15.8-48.4,27v-20.5
          H216c0.9,14.9,0,157.3,0,157.3h49.3V374.2z'
      />
    </g>
  </svg>
)

export default LinkedIn
