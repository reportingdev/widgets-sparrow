import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const NotificationBellUnRead: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='22'
    viewBox='0 0 20 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M16.74 14.168L17.6737 15.081C17.8816 15.2859 17.9988 15.5624 18 15.851V16.5C18 17.1075 17.4963 17.6 16.875 17.6H1.125C0.50368 17.6 0 17.1075 0 16.5V15.851C0.0012427 15.5624 0.118413 15.2859 0.32625 15.081L1.26 14.168C1.89312 13.5497 2.24921 12.7109 2.25 11.836V8.8C2.25 5.70359 4.50245 2.2 7.875 2.2V0.55C7.875 0.246243 8.12684 0 8.4375 0H9.5625C9.87316 0 10.125 0.246243 10.125 0.55V2.2C13.4952 2.2 15.75 5.70651 15.75 8.8V11.836C15.7508 12.7109 16.1069 13.5497 16.74 14.168ZM9 22C10.1046 22 11 21.1046 11 20H7C7 21.1046 7.89543 22 9 22Z'
      fill='#A2ABB7'
    />
    <path
      d='M14.5 2C16.9853 2 19 4.01472 19 6.5C19 8.98528 16.9853 11 14.5 11C12.0147 11 10 8.98528 10 6.5C10 4.01472 12.0147 2 14.5 2Z'
      fill='#866CFF'
      stroke='white'
      stroke-width='2'
    />
  </svg>
)

export default NotificationBellUnRead
