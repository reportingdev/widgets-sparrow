import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Pack: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='19'
    height='18'
    viewBox='0 0 19 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M18.218 8.686a.653.653 0 00-.056-.032L16.885 8 9.8 11.565a.672.672 0 01-.602 0L2.116 8l-1.278.654a.59.59 0 00-.23.871L9.5 14l8.892-4.475a.587.587 0 00-.174-.84z'
      fill='currentColor'
    />
    <path
      d='M18.423 12.89a.624.624 0 00-.26-.245L16.884 12 9.8 15.518a.68.68 0 01-.602 0L2.115 12l-1.277.645a.585.585 0 00-.26.817c.059.104.15.189.26.245l8.357 4.22a.68.68 0 00.61 0l8.357-4.22a.584.584 0 00.26-.818zM18.218 4.52a.65.65 0 00-.056-.033L9.805.075c-.19-.1-.42-.1-.61 0L.838 4.487a.618.618 0 00-.23.898L9.5 10l8.892-4.615a.616.616 0 00-.174-.865z'
      fill='currentColor'
    />
  </svg>
)
export default Pack
