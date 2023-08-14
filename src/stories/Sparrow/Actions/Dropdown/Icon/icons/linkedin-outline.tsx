import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const LinkedinOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='14'
    viewBox='0 0 14 14'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M13.997 13.999H14V8.863c0-2.511-.54-4.446-3.477-4.446-1.411 0-2.358.775-2.745 1.509h-.04V4.652H4.952v9.346h2.899V9.371c0-1.219.231-2.397 1.74-2.397 1.487 0 1.509 1.39 1.509 2.475v4.55h2.896zM.23 4.652h2.903v9.346H.23V4.652zM1.681 0C.753 0 0 .753 0 1.681s.753 1.697 1.681 1.697 1.681-.769 1.681-1.697S2.608 0 1.681 0z'
      fill='#346da6'
    />
  </svg>
)

export default LinkedinOutline
