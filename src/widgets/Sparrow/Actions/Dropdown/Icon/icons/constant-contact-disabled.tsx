import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ConstantContactDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='26'
    height='26'
    viewBox='0 0 26 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.705 10.5892C16.9436 11.2625 17.5829 11.7057 18.2988 11.7057C18.4692 11.7057 18.6738 11.6716 18.8443 11.6034C19.7221 11.2966 20.1653 10.3165 19.8585 9.4386C19.313 7.91299 18.1624 6.72831 16.5431 5.98681C15.7334 5.6118 14.7106 5.98681 14.3101 6.79649C13.935 7.60617 14.3101 8.62892 15.1197 9.0295C15.955 9.4386 16.4664 9.94997 16.705 10.5892Z'
      fill='#F3F5FB'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.1267 0.0296993C15.2147 -0.140759 14.3284 0.4388 14.1664 1.35075C13.996 2.26271 14.5755 3.14909 15.4875 3.31103C19.3143 4.05252 21.8882 6.62645 22.5274 10.351C22.6638 11.1606 23.4053 11.7402 24.1894 11.7402C24.2917 11.7402 24.3598 11.7402 24.4621 11.7061C25.3741 11.5357 25.9877 10.6578 25.8514 9.77993C24.965 4.70027 21.3427 1.00984 16.1267 0.0296993Z'
      fill='#F3F5FB'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.8652 16.8195C10.3396 16.8195 9.05264 15.5666 9.05264 14.0069C9.05264 12.4813 10.3055 11.1944 11.8652 11.1944C12.7772 11.1944 13.5613 10.4529 13.5613 9.49831C13.5613 8.55226 12.8198 7.80225 11.8652 7.80225C8.4816 7.80225 5.70312 10.5466 5.70312 13.9643C5.70312 17.3479 8.44751 20.1264 11.8652 20.1264C15.2829 20.1264 18.0273 17.382 18.0273 13.9643C18.0273 13.0524 17.2858 12.2683 16.3312 12.2683C15.4193 12.2683 14.6352 13.0098 14.6352 13.9643C14.6692 15.6007 13.3823 16.8195 11.8652 16.8195Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.0147 12.3878C21.1028 12.3878 20.3187 13.1293 20.3187 14.0838C20.3187 18.7544 16.4919 22.5812 11.8213 22.5812C7.15074 22.5812 3.32394 18.7544 3.32394 14.0838C3.32394 9.41326 7.15074 5.58646 11.8213 5.58646C12.7333 5.58646 13.5174 4.84497 13.5174 3.8904C13.5174 2.97845 12.7759 2.19434 11.8213 2.19434C5.3524 2.19434 0 7.51265 0 14.0497C0 20.5868 5.32683 25.8966 11.8639 25.8966C18.401 25.8966 23.7193 20.5783 23.7193 14.0412C23.7108 13.0952 23.0034 12.3878 22.0147 12.3878Z'
      fill='white'
    />
  </svg>
)

export default ConstantContactDisabled