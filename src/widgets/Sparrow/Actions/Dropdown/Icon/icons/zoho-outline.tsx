import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ZohoOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#F3F5FB' />
    <path
      d='M22.7894 23.2738C22.6518 23.0388 22.447 22.8481 22.1841 22.7026C21.9136 22.5532 21.5753 22.4468 21.1678 22.3793C20.7839 22.3157 20.3383 22.2866 19.8297 22.2911L13.9938 22.3404C14.1232 21.9035 14.4318 21.3522 14.9261 20.7001C15.4788 19.9692 16.2593 19.1107 17.2672 18.1277C17.6138 17.7849 17.8793 17.5225 18.0624 17.3417C18.1922 17.2225 18.3746 17.0458 18.6119 16.8115C20.1815 15.2867 21.2058 14.0032 21.6867 12.9422C21.961 12.3409 22.167 11.7233 22.3051 11.0898C22.3429 10.9164 22.3747 10.7434 22.4015 10.5708C22.4726 10.1122 22.5058 9.65461 22.5004 9.19798C22.4954 8.78184 22.45 8.42884 22.361 8.13686C22.2719 7.84545 22.1375 7.61275 21.9523 7.44936C21.7432 7.26727 21.4271 7.15231 21.0013 7.08101C20.6497 7.02273 20.2213 6.99634 19.7144 7.00041L12.97 7.05868C12.1533 7.06593 11.529 7.20746 11.0986 7.50536C10.7566 7.74107 10.5456 8.08481 10.4814 8.50889C10.4642 8.6195 10.4564 8.73559 10.4581 8.85735C10.4621 9.44206 10.6881 9.90782 11.1239 10.1979C11.3809 10.3712 11.7058 10.4874 12.096 10.5521C12.3618 10.5962 12.6582 10.6163 12.9858 10.6137L18.6285 10.5788C18.6225 10.6794 18.6136 10.7794 18.5984 10.8775C18.544 11.228 18.4314 11.5603 18.2601 11.8775C18.0249 12.3147 17.5144 12.9108 16.7339 13.6468C16.5142 13.8466 16.1765 14.1588 15.7212 14.582C13.9549 16.1687 12.6511 17.555 11.8071 18.748L11.8066 18.7491C11.2119 19.5679 10.7585 20.3971 10.4504 21.2355C10.2708 21.7246 10.1443 22.2018 10.0721 22.6679C10.0203 23.0016 9.9964 23.3289 10.0004 23.6503C10.0061 24.1113 10.0572 24.4994 10.1579 24.8168C10.2588 25.1329 10.4113 25.382 10.6214 25.5492C10.8173 25.7033 11.1249 25.8026 11.5581 25.8757C12.1082 25.9669 12.8616 26.0069 13.8244 25.999L19.9438 25.9468C21.0277 25.9365 21.8012 25.8013 22.2831 25.5146C22.6682 25.2854 22.9055 24.9226 22.9753 24.4603C22.9935 24.3435 23.0016 24.221 22.9997 24.0919C22.9962 23.7838 22.927 23.5085 22.7894 23.2738Z'
      fill='#EB3C3B'
    />
  </svg>
)

export default ZohoOutline