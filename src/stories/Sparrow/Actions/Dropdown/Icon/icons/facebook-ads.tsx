import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const FacebookAds: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    width='34'
    height='34'
    fill='none'
    viewBox='0 0 34 34'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#355290' />
    <path
      d='M13.032 22c-.072 0-.116-.001-.12-.002l-.263-.008L12 19h1.548l.099.1c.013.013.332.337.656.734.625.767.697 1.103.697 1.289 0 .152-.058.371-.333.552a1.779 1.779 0 01-.592.227 5.225 5.225 0 01-1.043.098z'
      fill='#A2B5D0'
    />
    <path
      d='M9 19l2.363 6.412s.163.636 1.283.585c0 0 1.487.127 1.344-1.348 0 0-.169-3.097-.61-5.649H9z'
      fill='#fff'
    />
    <path
      d='M23.326 8c-.838 4.29-8.429 4-8.429 4H13v7h1.897s7.591-.29 8.429 4H25V8h-1.674z'
      fill='#fff'
    />
    <path
      d='M8.087 12a1 1 0 00-.733.32l-1.087 1.172a1 1 0 00-.267.68v2.656a1 1 0 00.267.68l1.087 1.172a1 1 0 00.733.32H13v-7H8.087z'
      fill='#A2B5D0'
    />
  </svg>
)

export default FacebookAds
