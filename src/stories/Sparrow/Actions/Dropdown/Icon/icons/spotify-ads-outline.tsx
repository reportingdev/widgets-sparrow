import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SpotifyAds: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#18D860' />
    <path
      d='M22.91 21.649c-5.065-2.342-12.156-1.305-12.454-1.261a1.22 1.22 0 00-1.025 1.391 1.22 1.22 0 001.391 1.025c.066-.01 6.656-.975 11.063 1.062a1.22 1.22 0 101.025-2.218zM24.335 17.251c-5.752-2.659-13.818-1.482-14.16-1.429a1.222 1.222 0 00.364 2.417c.078-.013 7.69-1.119 12.772 1.23a1.22 1.22 0 101.025-2.218zM25.292 12.654c-6.355-2.938-15.278-1.634-15.657-1.578A1.222 1.222 0 0010 13.493c.084-.013 8.585-1.249 14.265 1.379a1.22 1.22 0 001.621-.596 1.218 1.218 0 00-.593-1.622z'
      fill='#fff'
    />
  </svg>
)

export default SpotifyAds
