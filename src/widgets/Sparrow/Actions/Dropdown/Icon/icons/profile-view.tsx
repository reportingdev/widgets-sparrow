import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ProfileView: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='23'
    height='16'
    viewBox='0 0 23 16'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.01 8.87002L18.41 1.13002C18.0763 0.43935 17.3771 0.000353404 16.61 2.31919e-05H15C14.7239 2.31919e-05 14.5 0.223881 14.5 0.500023V1.50002C14.5 1.77617 14.7239 2.00002 15 2.00002H16.61L18.5 6.11002C16.3787 5.65429 14.2084 6.63601 13.15 8.53002C12.6641 8.19488 12.0902 8.01052 11.5 8.00002C10.9013 8.00579 10.3187 8.19419 9.83001 8.54002C8.77473 6.65288 6.61671 5.66902 4.50001 6.11002L6.39001 2.00002H8.00001C8.27615 2.00002 8.50001 1.77617 8.50001 1.50002V0.500023C8.50001 0.223881 8.27615 2.31919e-05 8.00001 2.31919e-05H6.39001C5.61117 -0.00371622 4.90101 0.445016 4.57001 1.15002L0.970009 8.89002C0.659173 9.54992 0.498648 10.2706 0.500009 11C0.500009 13.7614 2.73858 16 5.50001 16C8.26143 16 10.5 13.7614 10.5 11C10.5 10.4477 10.9477 10 11.5 10C12.0523 10 12.5 10.4477 12.5 11C12.5 13.7614 14.7386 16 17.5 16C20.2614 16 22.5 13.7614 22.5 11C22.4981 10.2623 22.3307 9.53442 22.01 8.87002ZM5.5 14C3.84315 14 2.5 12.6569 2.5 11C2.5 9.34315 3.84315 8 5.5 8C7.15685 8 8.5 9.34315 8.5 11C8.5 12.6569 7.15685 14 5.5 14ZM14.5 11C14.5 12.6569 15.8431 14 17.5 14C19.1569 14 20.5 12.6569 20.5 11C20.5 9.34315 19.1569 8 17.5 8C15.8431 8 14.5 9.34315 14.5 11Z'
      fill='currentColor'
    />
  </svg>
)

export default ProfileView