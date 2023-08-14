import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Password: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='9'
    height='12'
    viewBox='0 0 9 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      opacity='0.6'
      d='M6.65941 6.46197V3.56359C6.65941 2.38454 5.69051 1.42543 4.49941 1.42543C3.30832 1.42543 2.33941 2.38454 2.33941 3.56359V6.46197H0.899414V3.56359C0.899414 1.59874 2.51449 0 4.49941 0C6.48433 0 8.09941 1.59874 8.09941 3.56359V6.46197H6.65941Z'
      fill='#546070'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.03846 11.9991H7.96154C8.53417 11.9991 9 11.516 9 10.9221V6.6141C9 6.02023 8.53417 5.53711 7.96154 5.53711H1.03846C0.465831 5.53711 0 6.02023 0 6.6141V10.9221C0 11.516 0.465831 11.9991 1.03846 11.9991ZM4.61181 7.198C5.09565 7.198 5.48925 7.60172 5.48925 8.09799C5.48925 8.48881 5.24404 8.81869 4.90429 8.94291V9.89799C4.90429 10.0638 4.77348 10.198 4.61181 10.198C4.45015 10.198 4.31933 10.0638 4.31933 9.89799V8.94291C3.97959 8.81869 3.73438 8.48881 3.73438 8.09799C3.73438 7.60172 4.12797 7.198 4.61181 7.198Z'
      fill='#546070'
    />
  </svg>
)

export default Password
