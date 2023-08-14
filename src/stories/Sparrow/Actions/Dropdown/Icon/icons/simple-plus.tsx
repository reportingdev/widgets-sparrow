import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SimplePlus: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='14'
    viewBox='0 0 14 14'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.526 5.877H7.422V.773H5.875v5.104H.771v1.547h5.104v5.103h1.547V7.425h5.104V5.877z'
      fill='currentColor'
    />
  </svg>
)

export default SimplePlus
