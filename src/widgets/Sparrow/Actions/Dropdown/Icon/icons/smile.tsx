import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Smile: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12A12 12 0 0012 0zm0 21.6a9.6 9.6 0 110-19.2 9.6 9.6 0 010 19.2zm4.656-8.196c.117.13.17.307.144.48h-.048a4.8 4.8 0 01-9.504 0 .588.588 0 01.144-.48.588.588 0 01.456-.204H16.2a.588.588 0 01.456.204zM15.6 7.2a2.4 2.4 0 00-2.4 2.4v.6a.6.6 0 00.6.6h3.6a.6.6 0 00.6-.6v-.6a2.4 2.4 0 00-2.4-2.4zm-4.8 2.4v.6a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6v-.6a2.4 2.4 0 014.8 0z'
      fill='currentColor'
    />
  </svg>
)

export default Smile
