import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const QuoraAdsDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='22'
    height='24'
    viewBox='0 0 22 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M16.7787 20.0099C19.9131 18.1069 22 14.6969 22 10.811C22 4.84198 17.0741 0 11 0C4.92381 0 0 4.84198 0 10.812C0 17.8229 6.67438 22.9639 13.5929 21.3199C14.6352 23.1609 16.2287 24.4649 19.6041 23.8429V22.0079C19.6041 22.0079 17.4397 21.4799 16.7787 20.0099ZM15.1454 16.8959C13.9375 15.6469 12.0424 14.6219 9.6381 14.7519V16.8769C9.6381 16.8769 11.2703 16.9399 12.385 18.7999C8.69943 19.8539 5.46543 16.4089 5.46543 12.24V9.45797C5.46543 5.73198 7.97971 2.71299 11.0817 2.71299C14.1848 2.71299 16.7011 5.73298 16.7011 9.45797C16.545 11.108 17.3056 14.1819 15.1454 16.8959Z'
      fill='white'
    />
  </svg>
)

export default QuoraAdsDisabled
