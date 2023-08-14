import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Twitter: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#1D9DEE' />
    <path
      d='M24.9781 12.029C24.591 12.5959 24.1232 13.0904 23.5926 13.4934C23.5926 13.6415 23.5926 13.7895 23.5926 13.9458C23.5969 16.635 22.6186 19.2136 20.8772 21.1035C19.1357 22.9934 16.7768 24.0365 14.3291 23.999C12.914 24.0042 11.5171 23.6494 10.2477 22.9624C10.1793 22.9296 10.1351 22.8553 10.1354 22.7732V22.6827C10.1354 22.5646 10.2226 22.4688 10.3301 22.4688C11.7211 22.4185 13.0624 21.8889 14.1643 20.9551C12.9053 20.9273 11.7725 20.1083 11.2512 18.849C11.2249 18.7803 11.2331 18.7014 11.2729 18.6409C11.3126 18.5804 11.3782 18.547 11.4459 18.5529C11.8286 18.5951 12.215 18.556 12.5842 18.4377C11.1944 18.1209 10.1501 16.854 10.0006 15.3033C9.99529 15.2289 10.0256 15.1568 10.0807 15.1131C10.1358 15.0695 10.2076 15.0604 10.2702 15.0894C10.6432 15.2701 11.0458 15.3653 11.4534 15.3691C10.2356 14.4914 9.70956 12.822 10.1728 11.305C10.2207 11.1576 10.3356 11.0487 10.4753 11.0184C10.615 10.988 10.759 11.0406 10.8543 11.157C12.4977 13.0775 14.7557 14.2219 17.1523 14.349C17.0909 14.08 17.0608 13.8036 17.0625 13.5263C17.0849 12.0723 17.9042 10.7771 19.1368 10.2469C20.3695 9.71683 21.7715 10.0568 22.6865 11.1076C23.3102 10.9771 23.9132 10.7471 24.4763 10.4248C24.5176 10.3965 24.5699 10.3965 24.6111 10.4248C24.6369 10.4701 24.6369 10.5275 24.6111 10.5729C24.3384 11.2586 23.8776 11.8338 23.2931 12.2182C23.805 12.153 24.3078 12.0205 24.7908 11.8233C24.8315 11.7929 24.885 11.7929 24.9256 11.8233C24.9597 11.8404 24.9852 11.8732 24.9953 11.9128C25.0054 11.9524 24.9991 11.9949 24.9781 12.029Z'
      fill='white'
    />
  </svg>
)

export default Twitter
