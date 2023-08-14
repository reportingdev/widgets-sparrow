import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SortDesc: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='23'
    height='18'
    viewBox='0 0 23 18'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M.137 4.47l.675.697a.477.477 0 00.675 0l1.56-1.619V18h1.902V3.548l1.57 1.619a.477.477 0 00.675 0l.665-.697A.492.492 0 008 4.122a.504.504 0 00-.14-.348L4.34.145A.475.475 0 004.003 0a.463.463 0 00-.338.145L.137 3.774a.508.508 0 000 .696zM22.536 9H10.464c-.256 0-.464.224-.464.5v1c0 .276.208.5.464.5h12.072c.256 0 .464-.224.464-.5v-1c0-.276-.208-.5-.464-.5zM19.488 3h-8.976a.506.506 0 00-.512.5v1c0 .276.23.5.512.5h8.976A.506.506 0 0020 4.5v-1c0-.276-.23-.5-.512-.5zM19.488 15h-8.976a.506.506 0 00-.512.5v1c0 .276.23.5.512.5h8.976a.506.506 0 00.512-.5v-1c0-.276-.23-.5-.512-.5z'
      fill='currentColor'
    />
  </svg>
)

export default SortDesc
