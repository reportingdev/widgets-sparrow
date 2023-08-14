import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const BigCommerceDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='33'
    height='33'
    viewBox='0 0 33 33'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M17.3887 18.7747H21.5515C22.7353 18.7747 23.4844 18.1238 23.4844 17.0778C23.4844 16.0914 22.7353 15.3809 21.5515 15.3809H17.3887C17.2508 15.3809 17.1328 15.4988 17.1328 15.6182V18.5374C17.1514 18.6753 17.2495 18.7747 17.3887 18.7747ZM17.3887 25.5014H21.6893C23.0111 25.5014 23.7999 24.8306 23.7999 23.6467C23.7999 22.6206 23.0508 21.7921 21.6893 21.7921H17.3887C17.2508 21.7921 17.1328 21.91 17.1328 22.0294V25.2456C17.1514 25.4033 17.2495 25.5014 17.3887 25.5014Z'
      fill='white'
    />
    <path
      d='M32.6168 0.0725193L20.3062 12.3434H22.3186C25.4553 12.3434 27.31 14.3161 27.31 16.4664C27.31 18.1633 26.1659 19.4056 24.9422 19.9584C24.7447 20.0379 24.7447 20.3137 24.9621 20.3919C26.382 20.9447 27.3882 22.4242 27.3882 24.1596C27.3882 26.6056 25.7509 28.5584 22.5745 28.5584H13.8552C13.7173 28.5584 13.5993 28.4404 13.5993 28.321V19.029L0.0849085 32.4851C-0.0927385 32.6628 0.0252509 32.9783 0.282441 32.9783H32.7746C32.8926 32.9783 32.992 32.8802 32.992 32.7609V0.250166C33.0504 0.0327476 32.7746 -0.0852418 32.6168 0.0725193Z'
      fill='white'
    />
  </svg>
)

export default BigCommerceDisabled