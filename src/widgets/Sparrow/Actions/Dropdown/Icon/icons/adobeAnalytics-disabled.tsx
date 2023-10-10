import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const AdobeAnalyticsDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='25'
    height='21'
    viewBox='0 0 25 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3.82227 11.8246V17.1929C3.37084 16.7443 2.94958 16.2632 2.5613 15.7528V11.8247C2.5613 11.4816 2.84356 11.2036 3.19178 11.2036C3.54001 11.2036 3.82227 11.4815 3.82227 11.8246ZM8.1355 7.95303C7.78727 7.95303 7.50501 8.23109 7.50501 8.57414V19.7804C7.91385 19.9722 8.33444 20.1433 8.76598 20.2923V8.57423C8.76598 8.23109 8.48372 7.95303 8.1355 7.95303ZM12.9724 7.19985C12.6242 7.19985 12.3419 7.47792 12.3419 7.82097V20.9814C12.661 20.9978 12.9835 21.004 13.3097 20.9975C13.408 20.9955 13.5055 20.9918 13.6029 20.988V7.82097C13.6029 7.47802 13.3206 7.19985 12.9724 7.19985ZM17.905 3.94388C17.5567 3.94388 17.2745 4.22195 17.2745 4.565V20.3313C17.7103 20.1847 18.1309 20.0155 18.5354 19.8244V4.565C18.5354 4.22195 18.2531 3.94388 17.905 3.94388ZM23.354 6.45882C23.354 6.11577 23.0718 5.8377 22.7235 5.8377C22.3753 5.8377 22.0931 6.11577 22.0931 6.45882V17.187C22.5556 16.6788 22.976 16.1274 23.354 15.5384V6.45882ZM24.8962 2.84757C25.0194 2.74532 25.0349 2.56472 24.9321 2.44337C24.8283 2.32297 24.645 2.30672 24.5218 2.40897L22.9611 3.70184L18.8988 0L10.7383 5.72762L7.05241 4.34971L2.9038 8.97748L0.235377 9.49062C0.0782395 9.52024 -0.0255489 9.67122 0.00549056 9.82697C0.0326501 9.96362 0.154867 10.0582 0.290665 10.0582C0.309095 10.0582 0.328494 10.0563 0.346924 10.0534L3.20934 9.50304L7.22216 5.02624L10.8227 6.37263L18.8503 0.737692L22.9427 4.46629L24.8962 2.84757Z'
      fill='white'
    />
  </svg>
)

export default AdobeAnalyticsDisabled