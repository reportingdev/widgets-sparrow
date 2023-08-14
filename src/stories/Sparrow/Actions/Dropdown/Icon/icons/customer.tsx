import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Customer: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
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
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M12 2C9.79086 2 8 3.79086 8 6C8 7.98145 9.82401 10 12 10C14.176 10 16 7.98145 16 6C16 3.79086 14.2091 2 12 2ZM6 6C6 2.68629 8.68629 0 12 0C15.3137 0 18 2.68629 18 6C18 9.01855 15.3469 12 12 12C8.65315 12 6 9.01855 6 6Z'
      fill='#7E8B9D'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M2.05086 22H21.9491C21.7577 20.1628 21.0237 18.5686 19.714 17.3752C18.1631 15.9621 15.6823 15 12 15C8.31771 15 5.83689 15.9621 4.28601 17.3752C2.97629 18.5686 2.24233 20.1628 2.05086 22ZM2.93899 15.8969C4.96311 14.0526 7.98229 13 12 13C16.0177 13 19.0369 14.0526 21.061 15.8969C23.0939 17.7491 24 20.2883 24 23V24H0V23C0 20.2883 0.906096 17.7491 2.93899 15.8969Z'
      fill='#7E8B9D'
    />
  </svg>
)

export default Customer
