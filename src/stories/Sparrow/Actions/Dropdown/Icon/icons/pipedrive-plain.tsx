import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const PipeDrivePlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='18'
    viewBox='0 0 14 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8.37023 0C6.40562 0 5.26648 0.908411 4.72167 1.51402C4.65563 0.975701 4.30894 0.285981 2.95517 0.285981H0V3.41495H1.20518C1.40329 3.41495 1.46933 3.48224 1.46933 3.68411V18H4.96931V12.6505V12.2467C5.51412 12.7514 6.5542 13.4579 8.18863 13.4579C11.6061 13.4579 13.9999 10.6991 13.9999 6.72897C14.0164 2.70841 11.7381 0 8.37023 0ZM7.66033 10.3458C5.77827 10.3458 4.91978 8.51215 4.91978 6.79626C4.91978 4.10467 6.35609 3.14579 7.70986 3.14579C9.36079 3.14579 10.4834 4.59252 10.4834 6.76262C10.4669 9.25234 9.04711 10.3458 7.66033 10.3458Z'
      fill='#203232'
    />
  </svg>
)

export default PipeDrivePlain
