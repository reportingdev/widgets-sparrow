import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const PinterestPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='23'
    viewBox='0 0 18 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7.83736 0.078209C3.99197 0.508551 0.16215 3.59402 0.00646635 8.01111C-0.0947281 10.7068 0.987274 12.7286 3.57163 13.297C3.86742 12.0222 3.92191 11.3321 3.92191 11.3321C3.92191 11.3321 2.78542 10.1953 2.66866 9.47265C1.71899 3.65898 9.41755 -0.311535 13.4575 3.74829C16.2443 6.56581 14.4072 15.2295 9.90796 14.3282C5.59551 13.4675 12.0175 6.57393 8.57686 5.21795C5.78233 4.11368 4.29555 8.58761 5.61887 10.8043C4.84045 14.6205 3.16685 18.2175 3.84407 23C6.047 21.4167 6.7865 18.3799 7.39366 15.2132C8.49902 15.8791 9.09062 16.5773 10.4996 16.6829C15.6994 17.0808 18.6029 11.5269 17.8945 6.3953C17.2562 1.84829 12.6947 -0.465808 7.83736 0.078209Z'
      fill='#CB1F27'
    />
  </svg>
)

export default PinterestPlain