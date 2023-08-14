import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Drip: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#F224F2' />
    <path
      d='M9 19.3521H11.4012C11.4012 19.4423 11.4012 19.5325 11.4012 19.6227C11.4012 23.3087 14.3375 25.5126 17 25.5126C19.6625 25.5126 22.5988 23.3087 22.5988 19.6227C22.5988 19.5325 22.5988 19.4423 22.5988 19.3521H25C25 19.4423 25 19.5325 25 19.6227C25 24.6878 21.0062 28 17 28C12.9938 28 9 24.6878 9 19.6227C9 19.5454 9 19.4423 9 19.3521ZM17 9.13181L15.3079 11.529H12.2846C13.703 9.59578 15.2208 7.66257 17 6C18.7792 7.66257 20.2846 9.59578 21.7154 11.529H18.6921L17 9.13181ZM21.8025 13.836C20.9191 13.836 20.1975 14.5835 20.1975 15.4985C20.1975 16.4136 20.9191 17.1611 21.8025 17.1611C22.6858 17.1611 23.4075 16.4136 23.4075 15.4985C23.395 14.5706 22.6858 13.836 21.8025 13.836ZM17 13.836C16.1166 13.836 15.395 14.5835 15.395 15.4985C15.395 16.4136 16.1166 17.1611 17 17.1611C17.8834 17.1611 18.605 16.4136 18.605 15.4985C18.605 14.5706 17.8834 13.836 17 13.836ZM12.1975 13.836C11.3142 13.836 10.5925 14.5835 10.5925 15.4985C10.5925 16.4136 11.3142 17.1611 12.1975 17.1611C13.0809 17.1611 13.8025 16.4007 13.8025 15.4856C13.8025 14.5706 13.0809 13.836 12.1975 13.836Z'
      fill='white'
    />
  </svg>
)

export default Drip
