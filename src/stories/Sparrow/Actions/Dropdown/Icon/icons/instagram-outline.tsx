import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const InstagramOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='15'
    height='15'
    viewBox='0 0 15 15'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.834 0H4.167A4.167 4.167 0 000 4.167v6.667A4.167 4.167 0 004.167 15h6.667A4.167 4.167 0 0015 10.834V4.167A4.167 4.167 0 0010.834 0zm2.707 10.836a2.716 2.716 0 01-2.709 2.708H4.165a2.717 2.717 0 01-2.708-2.708V4.17a2.717 2.717 0 012.708-2.708h6.667a2.717 2.717 0 012.708 2.708v6.667zm-2.084-6.463a.833.833 0 100-1.665.833.833 0 000 1.665zM7.5 3.75a3.75 3.75 0 103.75 3.75A3.742 3.742 0 007.5 3.75zM5.207 7.503a2.292 2.292 0 104.583 0 2.292 2.292 0 00-4.583 0z'
      fill='#c12382'
    />
  </svg>
)

export default InstagramOutline
