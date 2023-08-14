import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Checkmark: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='16'
    viewBox='0 0 14 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.04.202l-.055.055-2.792 2.92a.734.734 0 000 .993c.257.275.68.275.937 0l1.708-1.782v8.95c0 .368.294.662.661.662a.659.659 0 00.662-.661V2.388L5.869 4.17c.257.275.68.275.937 0a.734.734 0 000-.992L3.977.202A.667.667 0 003.499 0a.597.597 0 00-.459.202zm7.92 15.596l.054-.055 2.793-2.92a.734.734 0 000-.993.634.634 0 00-.937 0l-1.709 1.782v-8.95a.659.659 0 00-.66-.662.659.659 0 00-.662.661v8.951L8.13 11.83a.634.634 0 00-.936 0 .734.734 0 000 .992l2.829 2.976A.667.667 0 0010.5 16a.597.597 0 00.46-.202z'
      fill='currentColor'
    />
  </svg>
)
export default Checkmark
