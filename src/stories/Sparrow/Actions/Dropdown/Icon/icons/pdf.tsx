import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Pdf: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
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
      d='M7 4C6.45 4 6 4.45 6 5V19C6 19.55 6.45 20 7 20H17C17.55 20 18 19.55 18 19V9L13 4H7Z'
      fill='#EC352A'
    />
    <path
      d='M8 16.9998H8.78904V16.0681H9.18814C9.84873 16.0681 10.3579 15.6454 10.3579 15.0318C10.3579 14.4091 9.86249 14.0001 9.18814 14.0001H8V16.9998ZM8.78904 15.3863V14.6818H9.19273C9.41293 14.6818 9.55514 14.8182 9.55514 15.0318C9.55514 15.2454 9.41293 15.3863 9.19273 15.3863H8.78904Z'
      fill='white'
    />
    <path
      d='M10.7865 16.9998H11.8416C12.7683 17.0134 13.5068 16.3771 13.4931 15.4909C13.5068 14.5909 12.7683 13.991 11.8416 14.0001H10.7865V16.9998ZM11.5755 16.2953V14.7091H11.837C12.3371 14.7091 12.6857 14.9818 12.6857 15.4909C12.6857 15.9863 12.3325 16.2953 11.837 16.2953H11.5755Z'
      fill='white'
    />
    <path
      d='M14 16.9998H14.7339V15.9817H15.7615V15.2772H14.7339V14.7046H16V14.0001H14V16.9998Z'
      fill='white'
    />
    <path
      d='M14.25 9H18L13 4V7.75C13 8.4375 13.5625 9 14.25 9Z'
      fill='#FFB5B0'
    />
  </svg>
)

export default Pdf
