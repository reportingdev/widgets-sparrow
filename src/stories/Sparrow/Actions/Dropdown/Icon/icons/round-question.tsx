import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Analytics: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 8a8 8 0 1116 0A8 8 0 010 8zm1.6 0a6.4 6.4 0 1012.8 0A6.4 6.4 0 001.6 8zm6.8 3.2h-.8a.4.4 0 00-.4.4v.8c0 .22.179.4.4.4h.8a.4.4 0 00.4-.4v-.8a.4.4 0 00-.4-.4zm.4-7.904A2.304 2.304 0 0111.104 5.6l.056.448a2.312 2.312 0 01-1.6 2.184l-.76.248a.104.104 0 00-.096.096V9.2a.4.4 0 01-.4.4h-.608a.4.4 0 01-.4-.4v-.624a1.504 1.504 0 011.032-1.424l.76-.248a.904.904 0 00.608-.856V5.6a.896.896 0 00-.896-.896H7.2a.896.896 0 00-.896.896V6a.4.4 0 01-.4.4h-.608a.4.4 0 01-.4-.4v-.4A2.304 2.304 0 017.2 3.296h1.6z'
      fill='currentColor'
    />
  </svg>
)

export default Analytics
