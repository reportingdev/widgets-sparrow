import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Instagram: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#C12382' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.9998 7.99634H12.9999C10.2385 7.99634 8 10.2349 8 12.9963V20.9962C8 23.7576 10.2385 25.9961 12.9999 25.9961H20.9998C23.7612 25.9961 25.9998 23.7576 25.9998 20.9962V12.9963C25.9998 10.2349 23.7612 7.99634 20.9998 7.99634ZM24.2488 20.9996C24.2433 22.7922 22.7915 24.244 20.9988 24.2495H12.9989C11.2063 24.244 9.75447 22.7922 9.74898 20.9996V12.9997C9.75447 11.207 11.2063 9.7552 12.9989 9.74971H20.9988C22.7915 9.7552 24.2433 11.207 24.2488 12.9997V20.9996ZM21.7517 13.242C22.3035 13.242 22.7508 12.7947 22.7508 12.2429C22.7508 11.6911 22.3035 11.2438 21.7517 11.2438C21.1999 11.2438 20.7526 11.6911 20.7526 12.2429C20.7526 12.7947 21.1999 13.242 21.7517 13.242ZM16.9998 12.4962C14.5146 12.4962 12.4999 14.5109 12.4999 16.9962C12.4999 19.4814 14.5146 21.4961 16.9998 21.4961C19.4851 21.4961 21.4998 19.4814 21.4998 16.9962C21.5024 15.8019 21.0292 14.6558 20.1847 13.8113C19.3402 12.9668 18.1941 12.4936 16.9998 12.4962ZM14.2489 16.9996C14.2489 18.5183 15.4801 19.7495 16.9988 19.7495C18.5176 19.7495 19.7488 18.5183 19.7488 16.9996C19.7488 15.4808 18.5176 14.2496 16.9988 14.2496C15.4801 14.2496 14.2489 15.4808 14.2489 16.9996Z'
      fill='white'
    />
  </svg>
)

export default Instagram
