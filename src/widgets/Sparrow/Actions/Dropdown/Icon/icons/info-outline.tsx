import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Arrow: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='16'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 8a8 8 0 1116 0A8 8 0 010 8zm1.6 0a6.4 6.4 0 1012.8 0A6.4 6.4 0 001.6 8zM9 11.375c0 .345-.224.625-.5.625h-1c-.276 0-.5-.28-.5-.625v-3.75C7 7.28 7.224 7 7.5 7h1c.276 0 .5.28.5.625v3.75zM8.5 6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1z'
      fill='currentColor'
    />
  </svg>
)

export default Arrow
