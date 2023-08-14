import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const NotificationBell: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M19.74 15.168L20.6737 16.081C20.8816 16.2859 20.9988 16.5624 21 16.851V17.5C21 18.1075 20.4963 18.6 19.875 18.6H4.125C3.50368 18.6 3 18.1075 3 17.5V16.851C3.00124 16.5624 3.11841 16.2859 3.32625 16.081L4.26 15.168C4.89312 14.5497 5.24921 13.7109 5.25 12.836V9.8C5.25 6.70359 7.50245 3.2 10.875 3.2V1.55C10.875 1.24624 11.1268 1 11.4375 1H12.5625C12.8732 1 13.125 1.24624 13.125 1.55V3.2C16.4952 3.2 18.75 6.70651 18.75 9.8V12.836C18.7508 13.7109 19.1069 14.5497 19.74 15.168ZM12 23C13.1046 23 14 22.1046 14 21H10C10 22.1046 10.8954 23 12 23Z'
      fill='#A2ABB7'
    />
  </svg>
)

export default NotificationBell
