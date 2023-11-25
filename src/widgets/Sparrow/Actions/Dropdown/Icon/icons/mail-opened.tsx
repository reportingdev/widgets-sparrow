import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const MailOpened: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='22'
    height='22'
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M14.583 14.55L22 19.238V9.663l-7.417 4.887zM0 9.663v9.575l7.417-4.688L0 9.663zM11.364.104a.69.69 0 00-.729 0L0 6.874v1.143l11 7.248 11-7.248V6.875L11.364.105zM13.324 15.38l-1.946 1.282a.687.687 0 01-.756 0l-1.946-1.283-8.632 5.46C.15 21.492.692 22 1.375 22h19.25c.683 0 1.225-.507 1.33-1.16l-8.631-5.458z'
      fill='currentColor'
    />
  </svg>
)
export default MailOpened
