import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Flodesk: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#1F1C1C' />
    <path
      d='M20.1087 28C18.2244 26.2596 18.5382 26.4287 18.5382 16.2994H21.3654L21.6795 15.4291C20.6849 15.4775 18.4451 15.3934 17.4391 15.2841C14.7692 14.994 14.1896 12.669 14.9263 11.803C16.6539 9.77217 17.5962 12.093 19.4808 12.9633C24.3246 15.2001 26.3911 6.12742 19.952 6.00087C14.9274 5.90212 13.6699 14.2686 11 16.2994H13.8269C13.8269 24.398 14.141 26.4044 12.4135 28H20.1087Z'
      fill='#FBFCFD'
    />
  </svg>
)

export default Flodesk
