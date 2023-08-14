import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleSheetDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='27'
    viewBox='0 0 20 27'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M18.125 26.1538H1.875C0.84375 26.1538 0 25.304 0 24.2654V1.88849C0 0.84982 0.84375 0 1.875 0H13.0769L20 6.92308V24.2654C20 25.304 19.1562 26.1538 18.125 26.1538Z'
      fill='#FDFFFF'
    />
    <path
      opacity='0.3'
      d='M13.0781 0L20.0012 6.92308H13.0781V0Z'
      fill='#7E8B9D'
    />
    <path
      d='M3.07812 9.23071V18.4615H16.9243V9.23071H3.07812ZM4.61659 10.7692H9.23197V13.0769H4.61659V10.7692ZM4.61659 14.6153H9.23197V16.923H4.61659V14.6153ZM15.3858 16.923H10.7704V14.6153H15.3858V16.923ZM15.3858 13.0769H10.7704V10.7692H15.3858V13.0769Z'
      fill='#E0E6EE'
    />
  </svg>
)

export default GoogleSheetDisabled
