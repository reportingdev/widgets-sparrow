import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Lock: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='20'
    viewBox='0 0 14 20'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12.353 8.376v-2.96C12.353 2.43 9.952 0 7 0S1.647 2.43 1.647 5.417v2.959A2.08 2.08 0 000 10.416v7.5C0 19.066.923 20 2.059 20h9.882C13.077 20 14 19.065 14 17.917v-7.5a2.08 2.08 0 00-1.647-2.041zm-4.44 6.399l.318 2.25a.417.417 0 01-.407.475H6.177a.411.411 0 01-.408-.475l.318-2.25a2.095 2.095 0 01-1.146-1.858c0-1.149.923-2.084 2.059-2.084 1.136 0 2.059.935 2.059 2.084 0 .791-.457 1.51-1.146 1.858zm1.97-6.442H4.117V5.417C4.118 3.808 5.41 2.5 7 2.5c1.59 0 2.882 1.308 2.882 2.917v2.916z'
      fill='currentColor'
    />
  </svg>
)

export default Lock
