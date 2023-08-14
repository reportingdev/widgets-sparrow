import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Comments: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='18'
    viewBox='0 0 20 18'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M20 2a2 2 0 00-2-2H2a2 2 0 00-2 2v12a2 2 0 002 2h5.09a1 1 0 01.7.29l1.49 1.49c.14.14.331.22.53.22h.38a.75.75 0 00.53-.22l1.49-1.49a1 1 0 01.7-.29H18a2 2 0 002-2V2zm-8 8.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1zM15.5 7a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h11z'
      fill='currentColor'
    />
  </svg>
)

export default Comments
