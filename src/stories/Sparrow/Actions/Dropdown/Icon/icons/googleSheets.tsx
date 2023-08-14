import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoogleSheets: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M13 4L18 9L16.798 9.71401H11.998V5.1428L13 4Z' fill='#188038' />
    <path
      d='M13 9V4H7.125C6.50344 4 6 4.48816 6 5.09086V18.9084C6 19.5111 6.50344 19.9992 7.125 19.9992H16.875C17.4966 19.9992 18 19.5111 18 18.9084V9H13Z'
      fill='#34A853'
    />
    <path
      d='M8.40039 11V16.714H15.6004V11H8.40039ZM11.5504 15.7288H9.30039V14.3496H11.5504V15.7288ZM11.5504 13.3644H9.30039V11.9852H11.5504V13.3644ZM14.7004 15.7288H12.4504V14.3496H14.7004V15.7288ZM14.7004 13.3644H12.4504V11.9852H14.7004V13.3644Z'
      fill='white'
    />
  </svg>
)

export default GoogleSheets
