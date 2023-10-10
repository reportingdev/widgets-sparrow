import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const VerifyEmail: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='128'
    height='128'
    viewBox='0 0 128 128'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='64' cy='64' r='64' fill='#F1F6FC' />
    <mask
      id='mask0_41979_143019'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='128'
      height='128'
    >
      <circle cx='64' cy='64' r='64' fill='#F1F6FC' />
    </mask>
    <g mask='url(#mask0_41979_143019)'>
      <path
        d='M21 74.1812L62.409 100.48C62.882 100.828 63.441 101 64 101C64.559 101 65.118 100.828 65.591 100.48L107 74.1812L65.6125 42.535C64.6558 41.8217 63.3442 41.8217 62.3875 42.535L21 74.1812Z'
        fill='#6437E7'
      />
      <g filter='url(#filter0_d_41979_143019)'>
        <path
          d='M91.5833 42H37.4167C34.4321 42 32 44.4066 32 47.36V106.32C32 107.799 33.2133 109 34.7083 109H94.2917C95.7867 109 97 107.799 97 106.32V47.36C97 44.4066 94.5733 42 91.5833 42Z'
          fill='white'
        />
        <path
          d='M37.4167 42.5H91.5833C94.3018 42.5 96.5 44.6874 96.5 47.36V106.32C96.5 107.518 95.5155 108.5 94.2917 108.5H34.7083C33.4845 108.5 32.5 107.518 32.5 106.32V47.36C32.5 44.6877 34.7033 42.5 37.4167 42.5Z'
          stroke='#EBEDFA'
        />
      </g>
      <path
        d='M83.3125 59H45.6875C44.204 59 43 60.12 43 61.5C43 62.88 44.204 64 45.6875 64H83.3125C84.796 64 86 62.88 86 61.5C86 60.12 84.796 59 83.3125 59Z'
        fill='#E3E9EF'
      />
      <path
        d='M67.3 70H45.7C44.2096 70 43 71.12 43 72.5C43 73.88 44.2096 75 45.7 75H67.3C68.7904 75 70 73.88 70 72.5C70 71.12 68.7904 70 67.3 70Z'
        fill='#E3E9EF'
      />
      <path
        d='M65.591 100.476C65.118 100.827 64.559 101 64 101C63.441 101 62.882 100.827 62.409 100.476L21 74V122.6C21 125.581 23.408 128 26.375 128H101.625C104.592 128 107 125.581 107 122.6V74L65.591 100.476Z'
        fill='#7785FF'
      />
      <path
        d='M101.625 128H26.375C23.3596 128 21 125.636 21 122.615C21 121.759 21.4085 120.952 22.0965 120.445L62.409 93.5223C62.882 93.1723 63.441 93 64 93C64.559 93 65.118 93.1723 65.591 93.5223L105.903 120.445C106.591 120.952 107 121.759 107 122.615C107 125.636 104.64 128 101.625 128Z'
        fill='#6370E4'
      />
    </g>
    <path
      d='M94.5 57C103.06 57 110 50.0604 110 41.5C110 32.9396 103.06 26 94.5 26C85.9396 26 79 32.9396 79 41.5C79 50.0604 85.9396 57 94.5 57Z'
      fill='#24D39F'
    />
    <path
      d='M95.8 47C95.1373 47 94.6001 46.5116 94.6001 45.9091V38.1289L92.8662 39.1806C92.3149 39.515 91.5697 39.3797 91.2019 38.8784C90.834 38.3771 90.9829 37.6997 91.5343 37.3653L95.1341 35.1836C95.6853 34.8491 96.4304 34.9844 96.7982 35.4856C96.9298 35.6648 97 35.8756 97 36.0912V45.9091C97 46.5116 96.4627 47 95.8 47Z'
      fill='#F1F2F2'
    />
    <defs>
      <filter
        id='filter0_d_41979_143019'
        x='29'
        y='39'
        width='73'
        height='75'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx='1' dy='1' />
        <feGaussianBlur stdDeviation='2' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.128963 0 0 0 0 0.105486 0 0 0 0 0.408333 0 0 0 0.08 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_41979_143019'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_41979_143019'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
)
export default VerifyEmail
