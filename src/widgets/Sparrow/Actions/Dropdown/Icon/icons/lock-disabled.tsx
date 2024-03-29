import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const LockDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='20'
    viewBox='0 0 16 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      opacity='0.6'
      d='M10.8976 10V5.51471C10.8976 3.69011 9.41736 2.20588 7.59763 2.20588C5.7779 2.20588 4.29763 3.69011 4.29763 5.51471V10H2.09763V5.51471C2.09763 2.47408 4.56511 0 7.59763 0C10.6301 0 13.0976 2.47408 13.0976 5.51471V10H10.8976Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.8284 20H13.3669C14.3212 20 15.0976 19.1776 15.0976 18.1667V10.8333C15.0976 9.82239 14.3212 9 13.3669 9H1.8284C0.87401 9 0.0976257 9.82239 0.0976257 10.8333V18.1667C0.0976257 19.1776 0.87401 20 1.8284 20ZM7.59761 11.8125C8.42474 11.8125 9.09761 12.4853 9.09761 13.3125C9.09761 13.9638 8.67841 14.5136 8.09761 14.7207V16.3125C8.09761 16.5888 7.87398 16.8125 7.59761 16.8125C7.32124 16.8125 7.09761 16.5888 7.09761 16.3125V14.7207C6.51681 14.5136 6.09761 13.9638 6.09761 13.3125C6.09761 12.4853 6.77048 11.8125 7.59761 11.8125Z'
      fill='white'
    />
  </svg>
)

export default LockDisabled
