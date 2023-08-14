import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ZoomIn: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='30'
    height='30'
    viewBox='0 0 30 30'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clipZoomIn0)' fill='currentColor'>
      <path d='M29.657 28l-8.464-8.465c3.856-4.692 3.594-11.657-.788-16.039-4.662-4.661-12.247-4.661-16.909 0-4.661 4.662-4.661 12.247 0 16.909 4.381 4.38 11.345 4.646 16.04.788l8.463 8.464a1.172 1.172 0 001.658-1.658zm-10.91-9.253c-3.748 3.748-9.845 3.748-13.593 0-3.748-3.748-3.748-9.846 0-13.593 3.747-3.748 9.845-3.748 13.593 0 3.748 3.747 3.748 9.845 0 13.593z' />
      <path d='M17.689 10.778h-4.567V6.211a1.172 1.172 0 00-2.344 0v4.567H6.211a1.172 1.172 0 100 2.344h4.567v4.567a1.172 1.172 0 102.344 0v-4.567h4.567a1.172 1.172 0 000-2.344z' />
    </g>
    <defs>
      <clipPath id='clipZoomIn0'>
        <path fill='currentColor' d='M0 0h30v30H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default ZoomIn
