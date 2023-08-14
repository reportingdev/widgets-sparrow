import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Settings: FC<IconProps> = ({ className = '' }: IconProps) => (
  <svg
    width='22'
    height='24'
    className={`Icon ${className}`}
    viewBox='0 0 22 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 6.524L11 0l11 6.524v12.04L11 24 0 18.563V6.523zm6.843 8.254a5 5 0 118.314-5.556 5 5 0 01-8.314 5.556z'
      fill='var(--icon-secondary-color)'
    />
    <path
      d='M6 12a5 5 0 1010 0 5 5 0 00-10 0zm8 0a3 3 0 11-5.999 0A3 3 0 0114 12z'
      fill='var(--icon-primary-color)'
    />
    <path
      d='M11 0L0 6.524v12.04L11 24l11-5.437V6.523L11 0zm9 17.348l-9 4.448-9-4.448V7.64l9-5.338 9 5.338v9.707z'
      fill='var(--icon-primary-color)'
    />
  </svg>
)

export default Settings
