import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ConvertKitPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='19'
    viewBox='0 0 20 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9.65045 14.9999C13.1234 14.9999 15.8078 12.3136 15.8078 9.00002C15.8078 5.89551 13.2859 4.00009 11.6156 4.00009C9.28964 4.00009 7.42519 5.67115 7.15956 8.15194C7.11037 8.61134 6.75482 8.99662 6.30363 8.99333C5.55364 8.98782 4.46309 8.98125 3.77282 8.98372C3.47561 8.98477 3.23 8.73789 3.24464 8.43377C3.34874 6.2822 4.05149 4.27043 5.39143 2.72509C6.88031 1.00794 9.0486 0 11.6156 0C15.9285 0 20 4.01217 20 9.00002C20 14.5228 15.5305 19 9.7422 19C5.61427 19 1.45672 16.2381 0.00513097 12.3767C-9.03792e-05 12.3624 -0.00135719 12.3469 0.00147025 12.3319C0.0209178 12.2177 0.059241 12.1133 0.0969922 12.0106C0.151903 11.8612 0.20567 11.715 0.197891 11.5467L0.172723 11.0089C0.166941 10.8787 0.199149 10.7497 0.265232 10.6383C0.331315 10.527 0.428272 10.4384 0.543715 10.3839L0.75352 10.2838C0.871063 10.2281 0.973859 10.1443 1.05328 10.0395C1.1327 9.93461 1.18644 9.81175 1.20997 9.6812C1.28032 9.28678 1.61848 9.00002 2.01327 9.00002C2.62987 9.00002 3.16594 9.41978 3.36728 10.0165C4.33657 12.8888 5.8775 14.9999 9.65045 14.9999Z'
      fill='#FB6970'
    />
  </svg>
)

export default ConvertKitPlain
