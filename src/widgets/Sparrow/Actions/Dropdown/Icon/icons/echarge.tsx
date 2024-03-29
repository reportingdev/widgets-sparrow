import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Echarge: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#3B3B3B' />
    <path
      d='M7.00064 16.9984C7.00451 11.8127 10.9979 7.48954 16.2003 7.03841C21.4026 6.58728 26.0907 10.1573 27 15.2637H17.0393L21.7113 12.5991L20.7898 11.9292C19.7041 11.1437 18.3945 10.7224 17.0512 10.7266C15.7079 10.7308 14.401 11.1601 13.3203 11.9523C12.2396 12.7445 11.4414 13.8583 11.0417 15.1317C10.642 16.4052 10.6617 17.772 11.0978 19.0336C11.534 20.2952 12.3639 21.3859 13.4669 22.1471C14.57 22.9083 15.8887 23.3005 17.2316 23.2665C18.5744 23.2326 19.8714 22.7744 20.9341 21.9584C21.9967 21.1425 22.7697 20.0113 23.1406 18.7293H26.9994C26.0933 23.8383 21.4059 27.4128 16.2009 26.9616C10.9966 26.5111 7.00258 22.1861 7 16.9984H7.00064Z'
      fill='white'
    />
  </svg>
)

export default Echarge
