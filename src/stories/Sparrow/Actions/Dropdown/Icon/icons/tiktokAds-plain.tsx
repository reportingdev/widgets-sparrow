import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const TiktokAdsPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#010101' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.4601 14.8585C22.6869 15.735 24.1898 16.2507 25.8129 16.2507V13.1288C25.5057 13.129 25.1993 13.0969 24.8988 13.0332V15.4906C23.2758 15.4906 21.7731 14.9749 20.546 14.0984V20.4693C20.546 23.6563 17.9611 26.2397 14.7726 26.2397C13.583 26.2397 12.4772 25.8802 11.5586 25.2637C12.607 26.3351 14.069 26.9998 15.6865 26.9998C18.8752 26.9998 21.4602 24.4164 21.4602 21.2293V14.8585H21.4601ZM22.5878 11.709C21.9608 11.0244 21.5492 10.1397 21.4601 9.16153V8.76001H20.5939C20.8119 10.0031 21.5556 11.0652 22.5878 11.709ZM13.5753 22.8182C13.225 22.3591 13.0357 21.7976 13.0365 21.2202C13.0365 19.7625 14.2189 18.5807 15.6776 18.5807C15.9494 18.5805 16.2196 18.6222 16.4787 18.7044V15.5127C16.176 15.4713 15.8704 15.4537 15.5649 15.4602V17.9444C15.3057 17.8622 15.0354 17.8205 14.7634 17.8207C13.3048 17.8207 12.1225 19.0025 12.1225 20.4603C12.1225 21.491 12.7135 22.3835 13.5753 22.8182Z'
      fill='#EE1D52'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.547 14.0984C21.7741 14.9749 23.2768 15.4906 24.8998 15.4906V13.0332C23.9939 12.8404 23.1918 12.3672 22.5888 11.709C21.5566 11.0652 20.8129 10.0031 20.5949 8.76001H18.3195V21.2291C18.3143 22.6828 17.134 23.8597 15.6785 23.8597C14.8207 23.8597 14.0587 23.4512 13.5761 22.8182C12.7144 22.3835 12.1234 21.491 12.1234 20.4603C12.1234 19.0025 13.3057 17.8207 14.7643 17.8207C15.0438 17.8207 15.3131 17.8642 15.5658 17.9444V15.4602C12.4334 15.5248 9.91406 18.083 9.91406 21.2293C9.91406 22.7998 10.5414 24.2236 11.5596 25.2638C12.4782 25.8803 13.584 26.2398 14.7736 26.2398C17.9621 26.2398 20.547 23.6563 20.547 20.4694V14.0984Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24.8997 13.0332V12.3687C24.0827 12.37 23.2819 12.1413 22.5887 11.7088C23.2023 12.3802 24.0102 12.8433 24.8997 13.0332ZM20.5948 8.75999C20.574 8.6412 20.558 8.52161 20.5469 8.40152V8H17.4052V20.4692C17.4001 21.9228 16.2199 23.0997 14.7643 23.0997C14.3369 23.0997 13.9334 22.9984 13.5761 22.8182C14.0587 23.4511 14.8207 23.8597 15.6784 23.8597C17.1338 23.8597 18.3143 22.6827 18.3194 21.2291V8.75999H20.5948ZM15.5659 15.4601V14.7527C15.3033 14.7168 15.0387 14.6989 14.7737 14.699C11.5849 14.699 9 17.2825 9 20.4692C9 22.4672 10.0159 24.2279 11.5596 25.2637C10.5415 24.2235 9.91412 22.7997 9.91412 21.2291C9.91412 18.083 12.4333 15.5248 15.5659 15.4601Z'
      fill='#69C9D0'
    />
  </svg>
)

export default TiktokAdsPlain
