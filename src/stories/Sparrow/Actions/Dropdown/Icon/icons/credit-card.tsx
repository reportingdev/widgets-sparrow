import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const CreditCard: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='10'
    viewBox='0 0 14 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M0 4.647v3.274C0 9.069.935 10 2.088 10h9.824C13.065 10 14 9.068 14 7.92V4.647c0-.2-.163-.361-.363-.361H.363c-.2 0-.363.162-.363.361zM3.863 7.18h-.968a.634.634 0 01-.635-.633c0-.35.284-.633.635-.633h.968a.634.634 0 110 1.266zM14 2.455V2.31C14 1.034 13.065 0 11.912 0H2.088C.935 0 0 1.034 0 2.31v.145c0 .222.163.402.363.402h13.274c.2 0 .363-.18.363-.402z'
      fill='currentColor'
    />
  </svg>
)

export default CreditCard
