import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SearchConsolePlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='18'
    viewBox='0 0 20 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M5.58984 1.48198L7.07199 0V2.82938H5.58984V1.48198ZM14.3476 1.48198L12.8658 0V2.82938H14.3476V1.48198Z'
      fill='#7B7B7B'
    />
    <path d='M7.07422 0H12.868V1.41469H7.07422V0Z' fill='#5A5A5A' />
    <path
      d='M18.3243 17.7851H1.61688C0.72393 17.7851 0 17.0612 0 16.1682V5.6073L2.7782 2.8291H17.163L19.9412 5.6073V16.1682C19.9412 17.0612 19.2176 17.7851 18.3243 17.7851Z'
      fill='#E6E7E8'
    />
    <path
      d='M0 8.55548V5.6073L2.7782 2.8291H17.163L19.9412 5.6073V8.55548H0Z'
      fill='#D0D1D2'
    />
    <path
      d='M2.28906 17.7851V6.33215C2.28906 5.96014 2.59059 5.65845 2.96276 5.65845H16.9754C17.3477 5.65845 17.6494 5.96014 17.6494 6.33215V17.7851H2.28906Z'
      fill='#458CF5'
    />
    <path d='M2.28516 8.55566H17.6455V17.7853H2.28516V8.55566Z' fill='white' />
    <path
      d='M13.0709 17.7852V15.0229L11.7232 13.6757L10.8477 11.2504L11.4542 9.70093L14.8897 13.1369L15.4961 10.5767L17.6521 12.7327V17.7853H13.0709V17.7852Z'
      fill='#D2D3D4'
    />
    <path
      d='M3.29688 9.63379H8.41684V15.3602H3.29688V9.63379ZM3.29688 16.6401H9.89914V17.7855H3.29688V16.6401Z'
      fill='#D2D3D4'
    />
    <path
      d='M14.3465 15.6364V17.7855H11.5169V15.667C9.84056 14.904 9.09989 12.9263 9.86289 11.2497C10.1859 10.54 10.7475 9.9658 11.4499 9.62727V12.8001L12.8646 13.676L14.3465 12.8001V9.62695C16.0059 10.4276 16.7019 12.4217 15.9016 14.0812C15.574 14.7605 15.0257 15.3087 14.3465 15.6364Z'
      fill='#505050'
    />
    <path
      d='M3.86948 6.3999C4.18568 6.3999 4.44209 6.65615 4.44209 6.97251C4.44209 7.28887 4.18568 7.54527 3.86948 7.54527C3.55328 7.54527 3.29688 7.28887 3.29688 6.97251C3.29688 6.65615 3.55328 6.3999 3.86948 6.3999ZM5.55381 6.3999C5.87001 6.3999 6.12642 6.65615 6.12642 6.97251C6.12642 7.28887 5.87001 7.54527 5.55381 7.54527C5.23761 7.54527 4.98121 7.28887 4.98121 6.97251C4.98121 6.65615 5.23745 6.3999 5.55381 6.3999Z'
      fill='#E6E7E8'
    />
  </svg>
)

export default SearchConsolePlain
