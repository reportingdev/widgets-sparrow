import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ConstantContactOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#F3F5FB' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.2907 15.0583C20.4948 15.6342 21.0416 16.0133 21.654 16.0133C21.7998 16.0133 21.9747 15.9841 22.1205 15.9258C22.8715 15.6634 23.2506 14.825 22.9881 14.0741C22.5215 12.7691 21.5373 11.7557 20.1521 11.1215C19.4596 10.8007 18.5847 11.1215 18.2421 11.814C17.9213 12.5066 18.2421 13.3815 18.9347 13.7241C19.6491 14.0741 20.0865 14.5115 20.2907 15.0583Z'
      fill='#FF9E1A'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.7959 6.0254C19.0159 5.8796 18.2577 6.37534 18.1192 7.15541C17.9733 7.93548 18.4691 8.69368 19.2492 8.8322C22.5225 9.46646 24.7242 11.6682 25.271 14.8541C25.3877 15.5466 26.0219 16.0424 26.6926 16.0424C26.7801 16.0424 26.8384 16.0424 26.9259 16.0132C27.706 15.8674 28.2309 15.1165 28.1143 14.3656C27.3561 10.0205 24.2577 6.8638 19.7959 6.0254Z'
      fill='#FF9E1A'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.1498 20.3873C14.8449 20.3873 13.744 19.3156 13.744 17.9815C13.744 16.6765 14.8157 15.5756 16.1498 15.5756C16.9299 15.5756 17.6006 14.9414 17.6006 14.1249C17.6006 13.3156 16.9664 12.6741 16.1498 12.6741C13.2556 12.6741 10.8789 15.0216 10.8789 17.945C10.8789 20.8393 13.2264 23.216 16.1498 23.216C19.0733 23.216 21.4208 20.8685 21.4208 17.945C21.4208 17.1649 20.7865 16.4942 19.97 16.4942C19.1899 16.4942 18.5192 17.1285 18.5192 17.945C18.5484 19.3448 17.4475 20.3873 16.1498 20.3873Z'
      fill='#0E50F1'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24.833 16.5965C24.0529 16.5965 23.3822 17.2308 23.3822 18.0473C23.3822 22.0424 20.1088 25.3158 16.1137 25.3158C12.1186 25.3158 8.8452 22.0424 8.8452 18.0473C8.8452 14.0521 12.1186 10.7788 16.1137 10.7788C16.8938 10.7788 17.5645 10.1445 17.5645 9.32798C17.5645 8.54791 16.9302 7.8772 16.1137 7.8772C10.5803 7.8772 6.00195 12.4264 6.00195 18.0181C6.00195 23.6098 10.5584 28.1517 16.1502 28.1517C21.7419 28.1517 26.2911 23.6025 26.2911 18.0108C26.2838 17.2016 25.6787 16.5965 24.833 16.5965Z'
      fill='#0E50F1'
    />
  </svg>
)

export default ConstantContactOutline
