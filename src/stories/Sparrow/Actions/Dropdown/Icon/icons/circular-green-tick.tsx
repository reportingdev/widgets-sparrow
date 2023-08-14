import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const CircularGreenTick: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='12' cy='12' r='12' fill='#33C635' />
    <path
      d='M9.81009 15.8306C9.91095 15.9387 10.0518 16 10.1992 16C10.3465 16 10.4874 15.9387 10.5882 15.8306L16.8356 9.54637C16.9408 9.44139 17 9.29849 17 9.14942C17 9.00034 16.9408 8.85744 16.8356 8.75246L16.2464 8.15982C16.0303 7.94673 15.6844 7.94673 15.4683 8.15982L10.1992 13.46L8.53171 11.7939C8.43085 11.6858 8.29003 11.6245 8.14264 11.6245C7.99526 11.6245 7.85444 11.6858 7.75357 11.7939L7.16441 12.3866C7.05919 12.4915 7 12.6344 7 12.7835C7 12.9326 7.05919 13.0755 7.16441 13.1805L9.81009 15.8306Z'
      fill='white'
    />
  </svg>
)

export default CircularGreenTick
