import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Youtube: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='30'
    height='30'
    fill='none'
    viewBox='0 0 30 30'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='15' cy='15' r='15' fill='#ff0000' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.26 10.336a1.987 1.987 0 011.41 1.385c.343 1.23.33 3.792.33 3.792s0 2.55-.33 3.779a1.987 1.987 0 01-1.41 1.384C20.008 21 15 21 15 21s-4.995 0-6.26-.337a1.987 1.987 0 01-1.41-1.384C7 18.062 7 15.5 7 15.5s0-2.55.33-3.779a2.027 2.027 0 011.41-1.397C9.992 10 15 10 15 10s5.008 0 6.26.336zM17 15.5L13 18v-5l4 2.5z'
      fill='#fff'
    />
  </svg>
)

export default Youtube
