import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SalesForcePlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='26'
    height='18'
    viewBox='0 0 26 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10.8196 1.96317C11.6581 1.09899 12.8256 0.563049 14.1167 0.563049C15.833 0.563049 17.3304 1.50965 18.1278 2.91489C18.8207 2.60864 19.5878 2.43829 20.3948 2.43829C23.4904 2.43829 26 4.94216 26 8.03069C26 11.1196 23.4904 13.6235 20.3948 13.6235C20.017 13.6235 19.6478 13.5861 19.2907 13.5147C18.5885 14.7536 17.2504 15.5906 15.7144 15.5906C15.0715 15.5906 14.4633 15.4437 13.9219 15.1826C13.21 16.8387 11.5515 18 9.61852 18C7.60556 18 5.89 16.7402 5.23148 14.9734C4.9437 15.0338 4.64556 15.0653 4.33963 15.0653C1.94296 15.0653 0 13.1238 0 10.7283C0 9.12309 0.872963 7.72151 2.17 6.97163C1.90296 6.36389 1.75444 5.69314 1.75444 4.98795C1.75444 2.23315 4.01556 0 6.80444 0C8.44185 0 9.89704 0.770027 10.8196 1.96317Z'
      fill='#00A1E0'
    />
  </svg>
)

export default SalesForcePlain