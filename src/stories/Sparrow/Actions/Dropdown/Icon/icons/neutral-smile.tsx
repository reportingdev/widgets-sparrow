import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const NeutralSmile: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='26'
    height='26'
    viewBox='0 0 26 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.001 0C5.823 0 .003 5.82.003 12.998c0 7.18 5.82 12.999 12.998 12.999 7.18 0 12.999-5.82 12.999-12.998A12.998 12.998 0 0013 0zm0 23.399c-5.742 0-10.398-4.656-10.398-10.4 0-5.742 4.656-10.398 10.399-10.398C18.745 2.601 23.4 7.257 23.4 13A10.398 10.398 0 0113 23.399zm1.297-13a2.6 2.6 0 015.2 0v.65a.65.65 0 01-.65.65h-3.9a.65.65 0 01-.65-.65v-.65zm-2.596.65v-.65a2.6 2.6 0 00-5.2 0v.65c0 .36.292.65.65.65h3.9a.65.65 0 00.65-.65zm-1.95 4.55h6.5a.65.65 0 01.65.65v1.3a.65.65 0 01-.65.65h-6.5a.65.65 0 01-.649-.65v-1.3a.65.65 0 01.65-.65z'
      fill='currentColor'
    />
  </svg>
)

export default NeutralSmile
