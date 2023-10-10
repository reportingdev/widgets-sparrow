import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const QuoraAdsPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='20'
    viewBox='0 0 18 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M13.728 16.6749C16.2926 15.0891 18 12.2475 18 9.00913C18 4.03499 13.9697 0 9 0C4.02857 0 0 4.03499 0 9.00997C0 14.8524 5.46086 19.1366 11.1214 17.7666C11.9743 19.3008 13.278 20.3874 16.0397 19.8691V18.3399C16.0397 18.3399 14.2689 17.8999 13.728 16.6749ZM12.3917 14.08C11.4034 13.0391 9.85286 12.185 7.88571 12.2933V14.0641C7.88571 14.0641 9.22114 14.1166 10.1331 15.6666C7.11771 16.5449 4.47171 13.6741 4.47171 10.2V7.88164C4.47171 4.77665 6.52886 2.26083 9.06686 2.26083C11.6057 2.26083 13.6646 4.77748 13.6646 7.88164C13.5369 9.25663 14.1591 11.8183 12.3917 14.08Z'
      fill='#F44336'
    />
  </svg>
)

export default QuoraAdsPlain
