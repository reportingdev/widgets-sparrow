import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const BigCommercePlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='23'
    height='23'
    viewBox='0 0 23 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12.0087 12.9671H14.8838C15.7015 12.9671 16.2188 12.5175 16.2188 11.7951C16.2188 11.1138 15.7015 10.623 14.8838 10.623H12.0087C11.9135 10.623 11.832 10.7045 11.832 10.7869V12.8032C11.8449 12.8984 11.9126 12.9671 12.0087 12.9671ZM12.0087 17.613H14.9791C15.8919 17.613 16.4368 17.1497 16.4368 16.332C16.4368 15.6233 15.9194 15.051 14.9791 15.051H12.0087C11.9135 15.051 11.832 15.1325 11.832 15.2149V17.4363C11.8449 17.5452 11.9126 17.613 12.0087 17.613Z'
      fill='#34313F'
    />
    <path
      d='M22.5274 0.0500867L14.0248 8.52519H15.4147C17.5811 8.52519 18.8621 9.88765 18.8621 11.3728C18.8621 12.5448 18.0719 13.4028 17.2268 13.7846C17.0903 13.8395 17.0903 14.03 17.2405 14.084C18.2211 14.4658 18.9161 15.4877 18.9161 16.6862C18.9161 18.3756 17.7853 19.7243 15.5914 19.7243H9.56932C9.4741 19.7243 9.39261 19.6428 9.39261 19.5604V13.1427L0.0586435 22.4364C-0.0640514 22.5591 0.01744 22.777 0.195073 22.777H22.6363C22.7178 22.777 22.7865 22.7093 22.7865 22.6269V0.172781C22.8268 0.0226177 22.6363 -0.0588737 22.5274 0.0500867Z'
      fill='#34313F'
    />
  </svg>
)

export default BigCommercePlain
