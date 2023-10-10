import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const PipeDriveOutline: FC<IconProps> = ({
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
    <circle cx='17' cy='17' r='17' fill='#F3F5FB' />
    <path
      d='M18.3702 8C16.4056 8 15.2665 8.90841 14.7217 9.51402C14.6556 8.9757 14.3089 8.28598 12.9552 8.28598H10V11.415H11.2052C11.4033 11.415 11.4693 11.4822 11.4693 11.6841V26H14.9693V20.6505V20.2467C15.5141 20.7514 16.5542 21.4579 18.1886 21.4579C21.6061 21.4579 23.9999 18.6991 23.9999 14.729C24.0164 10.7084 21.7381 8 18.3702 8ZM17.6603 18.3458C15.7783 18.3458 14.9198 16.5121 14.9198 14.7963C14.9198 12.1047 16.3561 11.1458 17.7099 11.1458C19.3608 11.1458 20.4834 12.5925 20.4834 14.7626C20.4669 17.2523 19.0471 18.3458 17.6603 18.3458Z'
      fill='#203232'
    />
  </svg>
)

export default PipeDriveOutline
