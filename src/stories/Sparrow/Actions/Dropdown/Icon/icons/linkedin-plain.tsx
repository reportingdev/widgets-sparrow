import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const LinkedinPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 1.92115C0 0.860586 0.860586 0 1.92115 0C2.98105 0 3.84164 0.860586 3.84231 1.92115C3.84231 2.98172 2.98172 3.8603 1.92115 3.8603C0.860586 3.8603 0 2.98172 0 1.92115ZM15.9959 15.9999V15.9993H15.9999V10.1318C15.9999 7.26142 15.3819 5.05029 12.0262 5.05029C10.413 5.05029 9.33048 5.93554 8.88852 6.7748H8.84186V5.31827H5.66016V15.9993H8.97318V10.7104C8.97318 9.31789 9.23715 7.97135 10.9617 7.97135C12.6608 7.97135 12.6862 9.56054 12.6862 10.7998V15.9999H15.9959ZM0.263672 5.31812H3.58069V15.9991H0.263672V5.31812Z'
      fill='#0077B5'
    />
  </svg>
)

export default LinkedinPlain
