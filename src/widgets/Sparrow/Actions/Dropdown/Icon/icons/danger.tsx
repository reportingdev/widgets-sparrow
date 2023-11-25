import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Checkmark: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='22'
    viewBox='0 0 24 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M23.894 20.414L12.884.428a.82.82 0 00-.71-.428h-.327a.82.82 0 00-.709.428L.106 20.414a.964.964 0 000 .88l.153.266a.79.79 0 00.71.44h22.063a.79.79 0 00.709-.44l.153-.266a.964.964 0 000-.88zM13 17.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.501-.5v-1a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1zM12.53 14c.127.001.235-.117.25-.275l.4-4.025a.733.733 0 00-.123-.491A.462.462 0 0012.68 9h-1.36a.462.462 0 00-.377.209.733.733 0 00-.123.491l.4 4.025c.015.158.122.276.25.275h1.06z'
      fill='currentColor'
    />
  </svg>
)
export default Checkmark
