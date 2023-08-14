import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const KlaviyoOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='22'
    viewBox='0 0 18 22'
    fill='none'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#F3F5FB' />
    <path
      d='M7.40847 16.3374L16.3722 10.1748C16.7627 9.94172 17.2412 9.94172 17.6318 10.1748L26.5955 16.3374C26.947 16.5198 27.1032 16.9557 26.9274 17.3307C26.8591 17.4827 26.7419 17.6043 26.5955 17.6753L25.3944 18.4963C22.4554 13.6818 16.3233 12.2527 11.6853 15.2934C10.4452 16.1144 9.39063 17.1989 8.59972 18.4963L7.38894 17.6753C7.03742 17.4827 6.90072 17.0367 7.07648 16.6719C7.15459 16.53 7.27177 16.4083 7.40847 16.3374ZM16.9873 16.2664C14.4193 16.2766 12.027 17.6449 10.66 19.9052L12.7203 21.3242C14.1361 18.8814 17.1924 18.101 19.5358 19.5707C20.2291 20.0065 20.8052 20.6045 21.2251 21.3242L23.2853 19.9052C21.9379 17.6348 19.5553 16.2563 16.9873 16.2664ZM16.9873 21.4154C16.0792 21.4255 15.2493 21.9323 14.8001 22.7533L16.1866 23.6959C16.4112 23.8986 16.6944 24 16.9873 24C17.2802 24 17.5732 23.8885 17.788 23.6959L19.1745 22.7533C18.7351 21.9222 17.8954 21.4154 16.9873 21.4154Z'
      fill='url(#paint0_linear_30652_88720)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_30652_88720'
        x1='16.9955'
        y1='23.9964'
        x2='16.9955'
        y2='10.0017'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#EFC119' />
        <stop offset='0.3314' stop-color='#92C84E' />
        <stop offset='0.4859' stop-color='#71BF5B' />
        <stop offset='0.7506' stop-color='#15B158' />
        <stop offset='0.903' stop-color='#23AC69' />
        <stop offset='1' stop-color='#23AC69' />
      </linearGradient>
    </defs>
  </svg>
)

export default KlaviyoOutline
