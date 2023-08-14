import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Datasource: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
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
      d='M1 2.286c0-.341.116-.668.322-.91.206-.24.486-.376.778-.376h19.8c.292 0 .572.135.778.377.206.24.322.568.322.909v6.428c0 .341-.116.668-.322.91A1.026 1.026 0 0121.9 10H2.1c-.292 0-.572-.135-.778-.377A1.404 1.404 0 011 8.714V2.286z'
      fill='var(--icon-secondary-color)'
    />
    <path
      d='M24 3a3 3 0 00-3-3H3a3 3 0 00-3 3v5a3 3 0 00.78 2A3 3 0 000 12v5a3 3 0 003 3h8v2H5a1 1 0 000 2h14a1 1 0 000-2h-6v-2h8a3 3 0 003-3v-5a3 3 0 00-.78-2A3 3 0 0024 8V3zM2 3a1 1 0 011-1h18a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm20 14a1 1 0 01-1 1H3a1 1 0 01-1-1v-5a1 1 0 011-1h18a1 1 0 011 1v5z'
      fill='var(--icon-primary-color)'
    />
    <path
      d='M5 6h7a1 1 0 100-2H5a1 1 0 000 2zM12 13H5a1 1 0 000 2h7a1 1 0 000-2zM19.71 13.287a1.002 1.002 0 00-.33-.21 1.004 1.004 0 00-1.09.21.995.995 0 00-.21.328.99.99 0 00.323 1.188 1.003 1.003 0 001.597-.81.832.832 0 00-.08-.378 1.142 1.142 0 00-.21-.328zM18.28 5.71c.091.093.2.168.32.22.124.049.256.072.39.07a.999.999 0 00.4-.07 1 1 0 00.32-.22.871.871 0 00.22-.321c.049-.124.073-.257.07-.39.001-.13-.022-.26-.07-.38a1 1 0 00-.24-.31.93.93 0 00-.15-.131l-.15-.1a1.392 1.392 0 00-.19-.06.999.999 0 00-.9.28 1.003 1.003 0 00-.3.7c0 .135.027.268.08.391.042.12.11.23.2.32z'
      fill='var(--icon-primary-color)'
    />
  </svg>
)

export default Datasource