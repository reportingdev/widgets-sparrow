import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Properties: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4.00098 11.9987C4.00098 11.3888 4.08098 10.7887 4.21098 10.2188L8.99098 14.9988V15.9988C8.99098 17.0988 9.89098 17.9988 10.991 17.9988V19.9287C7.06098 19.4287 4.00098 16.0688 4.00098 11.9987ZM15.9893 15.9998C16.8893 15.9998 17.6293 16.5898 17.8893 17.3998C19.1893 15.9798 19.9993 14.0798 19.9993 11.9998C19.9993 8.64984 17.9193 5.76984 14.9893 4.58984V4.99984C14.9893 6.09984 14.0893 6.99984 12.9893 6.99984H10.9893V8.99984C10.9893 9.54984 10.5393 9.99984 9.98926 9.99984H7.98926V11.9998H13.9893C14.5393 11.9998 14.9893 12.4498 14.9893 12.9998V15.9998H15.9893Z'
      fill='currentColor'
    />
  </svg>
)

export default Properties
