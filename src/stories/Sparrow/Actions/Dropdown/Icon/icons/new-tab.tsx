import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const NewTab: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='17'
    height='17'
    viewBox='0 0 17 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M14 11.864V14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h2.136'
      stroke='currentColor'
      strokeWidth='2'
    />
    <path
      d='M16.251 8.445l-.002.021h-.602c-.414 0-.792-.378-.792-.792V3.625l-7.142 7.156a.734.734 0 01-1.046 0l-.448-.45a.72.72 0 01.001-1.035l7.187-7.153H9.306c-.414 0-.78-.388-.78-.801V.706c0-.414.366-.706.78-.706h6.974c.2 0 .373.057.515.2A.679.679 0 0117 .707v6.966c0 .414-.335.77-.749.77z'
      fill='currentColor'
    />
  </svg>
)

export default NewTab
