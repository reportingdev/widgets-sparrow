import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const YoutubePlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='14'
    viewBox='0 0 20 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.8252 0.428213C18.6819 0.658872 19.3574 1.33407 19.5879 2.19065C20.0164 3.75522 19.9999 7.01648 19.9999 7.01648C19.9999 7.01648 19.9999 10.2611 19.5881 11.8258C19.3574 12.6823 18.682 13.3576 17.8252 13.5881C16.2602 14 9.99996 14 9.99996 14C9.99996 14 3.75609 14 2.17467 13.5718C1.3179 13.3411 0.642545 12.6658 0.411833 11.8094C0 10.2611 0 7 0 7C0 7 0 3.75522 0.411833 2.19065C0.642392 1.33422 1.33438 0.642396 2.17452 0.41189C3.73961 0 9.99981 0 9.99981 0C9.99981 0 16.2602 0 17.8252 0.428213ZM12 7L7 10V4L12 7Z'
      fill='#FF0000'
    />
  </svg>
)

export default YoutubePlain
