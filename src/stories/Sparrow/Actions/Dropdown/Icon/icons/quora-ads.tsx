import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const QuoraAds: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#F44336' />
    <path
      d='M21.728 23.6749C24.2926 22.0891 26 19.2475 26 16.0091C26 11.035 21.9697 7 17 7C12.0286 7 8 11.035 8 16.01C8 21.8524 13.4609 26.1366 19.1214 24.7666C19.9743 26.3008 21.278 27.3874 24.0397 26.8691V25.3399C24.0397 25.3399 22.2689 24.8999 21.728 23.6749ZM20.3917 21.08C19.4034 20.0391 17.8529 19.185 15.8857 19.2933V21.0641C15.8857 21.0641 17.2211 21.1166 18.1331 22.6666C15.1177 23.5449 12.4717 20.6741 12.4717 17.2V14.8816C12.4717 11.7766 14.5289 9.26083 17.0669 9.26083C19.6057 9.26083 21.6646 11.7775 21.6646 14.8816C21.5369 16.2566 22.1591 18.8183 20.3917 21.08Z'
      fill='white'
    />
  </svg>
)

export default QuoraAds
