import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SortAsc: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='23'
    height='18'
    viewBox='0 0 23 18'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7.863 13.53l-.675-.697a.477.477 0 00-.675 0l-1.56 1.619V0H3.051v14.452l-1.57-1.619a.477.477 0 00-.675 0l-.665.697a.492.492 0 00-.141.348.503.503 0 00.14.348l3.52 3.629a.475.475 0 00.337.145.463.463 0 00.338-.145l3.528-3.629a.508.508 0 000-.696zM22.536 6H10.464c-.256 0-.464.224-.464.5v1c0 .276.208.5.464.5h12.072c.256 0 .464-.224.464-.5v-1c0-.276-.208-.5-.464-.5zM19.488 0h-8.976A.506.506 0 0010 .5v1c0 .276.23.5.512.5h8.976A.506.506 0 0020 1.5v-1c0-.276-.23-.5-.512-.5zM19.488 12h-8.976a.506.506 0 00-.512.5v1c0 .276.23.5.512.5h8.976a.506.506 0 00.512-.5v-1c0-.276-.23-.5-.512-.5z'
      fill='currentColor'
    />
  </svg>
)

export default SortAsc
