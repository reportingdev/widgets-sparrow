import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const CircularDatasource: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='110'
    height='110'
    viewBox='0 0 110 110'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='55' cy='55' r='55' fill='#E1E6F4' />
    <rect
      x='86.6621'
      y='36.5977'
      width='8.97899'
      height='2.6937'
      rx='1.34685'
      transform='rotate(-30 86.6621 36.5977)'
      fill='#A3ABC5'
    />
    <rect
      x='79.4229'
      y='36.6309'
      width='8.97899'
      height='9.87689'
      transform='rotate(-30 79.4229 36.6309)'
      fill='#A3ABC4'
    />
    <path
      d='M81.4375 36.5286C78.9522 32.224 73.4479 30.7491 69.1433 33.2344L59.8302 38.6113L72.8498 61.1618L82.1628 55.7849C86.4674 53.2996 87.9423 47.7953 85.457 43.4906L81.4375 36.5286Z'
      fill='#C2C8DC'
    />
    <rect
      x='18.8271'
      y='75.7422'
      width='9.21484'
      height='2.68966'
      rx='1.34483'
      transform='rotate(-30 18.8271 75.7422)'
      fill='#A3ABC4'
    />
    <rect
      x='22.2607'
      y='69.5391'
      width='10'
      height='10'
      transform='rotate(-30 22.2607 69.5391)'
      fill='#A3ABC4'
    />
    <rect
      x='41.9111'
      y='53.5762'
      width='15'
      height='3'
      rx='1.5'
      transform='rotate(-30 41.9111 53.5762)'
      fill='#A3ABC4'
    />
    <rect
      x='49.4111'
      y='66.5664'
      width='15'
      height='3'
      rx='1.5'
      transform='rotate(-30 49.4111 66.5664)'
      fill='#A3ABC4'
    />
    <path
      d='M29.6885 66.4056C27.2032 62.1009 28.6781 56.5966 32.9827 54.1113L43.375 48.1113L56.375 70.628L45.9827 76.628C41.6781 79.1133 36.1738 77.6384 33.6885 73.3338L29.6885 66.4056Z'
      fill='#C2C8DC'
    />
  </svg>
)

export default CircularDatasource
