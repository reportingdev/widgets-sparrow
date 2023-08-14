import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const YoutubeDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='16'
    viewBox='0 0 24 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.5816 0.485601C21.5707 0.747171 22.3507 1.51285 22.6169 2.48423C23.1116 4.25848 23.0926 7.95679 23.0926 7.95679C23.0926 7.95679 23.0926 11.6363 22.6171 13.4107C22.3507 14.3819 21.5709 15.1477 20.5816 15.4091C18.7745 15.8762 11.5463 15.8762 11.5463 15.8762C11.5463 15.8762 4.33691 15.8762 2.51095 15.3906C1.52169 15.129 0.741904 14.3632 0.475516 13.392C0 11.6363 0 7.93811 0 7.93811C0 7.93811 0 4.25848 0.475516 2.48423C0.741728 1.51303 1.54072 0.728488 2.51078 0.46709C4.31788 0 11.5461 0 11.5461 0C11.5461 0 18.7745 0 20.5816 0.485601ZM15.2112 7.93701L7.88376 12.2114V3.66264L15.2112 7.93701Z'
      fill='white'
    />
  </svg>
)

export default YoutubeDisabled
