import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Profile: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='15'
    height='16'
    viewBox='0 0 15 16'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7.5 7a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM9.844 9H5.156C2.312 9 0 11.158 0 13.813v.874C0 15.412.63 16 1.406 16h12.188C14.37 16 15 15.412 15 14.687v-.874C15 11.158 12.688 9 9.844 9z'
      fill='currentColor'
    />
  </svg>
)

export default Profile
