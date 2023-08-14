import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const DefaultAvatar: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <mask id='a' maskUnits='userSpaceOnUse' x='0' y='0' width='48' height='48'>
      <circle cx='24' cy='24' r='24' fill='#E0E6EE' />
    </mask>
    <g mask='url(#a)'>
      <circle cx='24' cy='24' r='24' fill='#E0E6EE' />
      <circle cx='24' cy='17' r='9' fill='#fff' />
      <path
        d='M7.784 36.169A11 11 0 0117.666 30h12.668a11 11 0 019.882 6.169L46 48H2l5.784-11.831z'
        fill='#fff'
      />
    </g>
  </svg>
)

export default DefaultAvatar
