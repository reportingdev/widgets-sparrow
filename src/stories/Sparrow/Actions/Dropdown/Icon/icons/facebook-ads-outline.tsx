import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Facebook: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='18'
    fill='none'
    viewBox='0 0 20 18'
    {...props}
  >
    <path
      d='M8.075 13.889c-.045 0-.072-.002-.075-.002l-.165-.006-.407-2.18h.971l.062.072c.008.01.208.246.411.536.392.56.438.804.438.94a.493.493 0 01-.21.402 1.03 1.03 0 01-.37.166 2.84 2.84 0 01-.655.072z'
      fill='#A2B5D0'
    />
    <path
      d='M2.49 11.223l2.724 6.208s.188.615 1.48.566c0 0 1.713.123 1.549-1.305 0 0-.195-2.998-.704-5.47H2.49z'
      fill='#A2B5D0'
    />
    <path
      d='M18.14 0c-.93 4.719-8.403 4.625-8.403 4.625H7.629v7.25h2.108s7.473-.094 8.403 4.625H20V0h-1.86z'
      fill='#A2B5D0'
    />
    <path
      d='M2.22 4.625a1 1 0 00-.716.302l-1.22 1.25A1 1 0 000 6.876v2.748a1 1 0 00.284.699l1.22 1.25a1 1 0 00.716.302h5.408v-7.25H2.22z'
      fill='#355290'
    />
  </svg>
)

export default Facebook
