import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const DataStudio: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M18.002 15.1816H12.192C10.7872 15.1816 10 16.1071 10 17.0916C10 18.0002 10.6675 19.0015 12.192 19.0015H18.002V15.1816Z'
      fill='#669DF3'
    />
    <path
      d='M18.0026 18.9976C19.1065 18.9976 20.0014 18.1425 20.0014 17.0877C20.0014 16.0328 19.1065 15.1777 18.0026 15.1777C16.8988 15.1777 16.0039 16.0328 16.0039 17.0877C16.0039 18.1425 16.8988 18.9976 18.0026 18.9976Z'
      fill='#1A73E8'
    />
    <path
      d='M12.002 10.0898H6.19202C4.78721 10.0898 4 11.0153 4 12.0004C4 12.909 4.66752 13.9103 6.19202 13.9103H12.002V10.0898Z'
      fill='#669DF3'
    />
    <path
      d='M12.0007 13.9097C13.1046 13.9097 13.9994 13.0546 13.9994 11.9998C13.9994 10.9449 13.1046 10.0898 12.0007 10.0898C10.8968 10.0898 10.002 10.9449 10.002 11.9998C10.002 13.0546 10.8968 13.9097 12.0007 13.9097Z'
      fill='#1A73E8'
    />
    <path
      d='M18.002 5H12.192C10.7872 5 10 5.92546 10 6.90993C10 7.81854 10.6675 8.81987 12.192 8.81987H18.002V5Z'
      fill='#669DF3'
    />
    <path
      d='M18.0026 8.81987C19.1065 8.81987 20.0014 7.96476 20.0014 6.90993C20.0014 5.85511 19.1065 5 18.0026 5C16.8988 5 16.0039 5.85511 16.0039 6.90993C16.0039 7.96476 16.8988 8.81987 18.0026 8.81987Z'
      fill='#1A73E8'
    />
  </svg>
)

export default DataStudio
