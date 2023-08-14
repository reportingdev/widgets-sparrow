import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const KlaviyoPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='14'
    viewBox='0 0 20 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M0.408466 6.33737L9.37216 0.174842C9.76273 -0.0582805 10.2412 -0.0582805 10.6318 0.174842L19.5955 6.33737C19.947 6.51982 20.1032 6.95566 19.9274 7.33068C19.8591 7.48272 19.7419 7.60434 19.5955 7.67529L18.3944 8.49629C15.4554 3.68181 9.32334 2.25267 4.68526 5.29339C3.44519 6.11439 2.39063 7.19891 1.59972 8.49629L0.388938 7.67529C0.0374202 7.48271 -0.0992809 7.03674 0.0764778 6.67186C0.154593 6.52996 0.271765 6.40832 0.408466 6.33737ZM9.98731 6.26643C7.41928 6.27656 5.02701 7.64489 3.66 9.90516L5.72028 11.3242C7.13612 8.88145 10.1924 8.101 12.5358 9.57068C13.2291 10.0065 13.8052 10.6045 14.2251 11.3242L16.2853 9.90516C14.9379 7.63475 12.5553 6.25629 9.98731 6.26643ZM9.98731 11.4154C9.07923 11.4255 8.24926 11.9323 7.8001 12.7533L9.18664 13.6959C9.41122 13.8986 9.69438 14 9.98731 14C10.2802 14 10.5732 13.8885 10.788 13.6959L12.1745 12.7533C11.7351 11.9222 10.8954 11.4154 9.98731 11.4154Z'
      fill='url(#paint0_linear_30599_86137)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_30599_86137'
        x1='9.99551'
        y1='13.9964'
        x2='9.99551'
        y2='0.00167664'
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

export default KlaviyoPlain
