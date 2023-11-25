import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const LimlistOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#F3F5FB' />
    <path
      d='M10.6 9C11.4837 9 12.2 9.71634 12.2 10.6V18.6C12.2 20.3673 13.6327 21.8 15.4 21.8H23.4C24.2837 21.8 25 22.5163 25 23.4C25 24.2837 24.2837 25 23.4 25H15.4C11.8654 25 9 22.1346 9 18.6V10.6C9 9.71634 9.71634 9 10.6 9ZM21.8 15.4C22.6837 15.4 23.4 16.1163 23.4 17C23.4 17.8837 22.6837 18.6 21.8 18.6H17C16.1163 18.6 15.4 17.8837 15.4 17C15.4 16.1163 16.1163 15.4 17 15.4H21.8ZM23.4 9C24.2837 9 25 9.71634 25 10.6C25 11.4837 24.2837 12.2 23.4 12.2H17C16.1163 12.2 15.4 11.4837 15.4 10.6C15.4 9.71634 16.1163 9 17 9H23.4Z'
      fill='url(#paint0_linear_30602_86314)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_30602_86314'
        x1='17'
        y1='9'
        x2='17'
        y2='25'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#4731FF' />
        <stop offset='1' stop-color='#4F12FF' />
      </linearGradient>
    </defs>
  </svg>
)

export default LimlistOutline
