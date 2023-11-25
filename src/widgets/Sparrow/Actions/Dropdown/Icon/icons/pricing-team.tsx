import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const PricingTeam: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='63'
    height='60'
    viewBox='0 0 63 60'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g opacity='0.7'>
      <circle cx='42.375' cy='20' r='20' fill='#EAEEF5' />
      <line
        x1='51.625'
        y1='59'
        x2='1.625'
        y2='59'
        stroke='#A2ABB7'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M23.125 58V23C23.125 22.4477 22.6773 22 22.125 22L17.625 22.0002L13.125 22C12.5727 22 12.125 22.4477 12.125 23V58'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <path
        d='M46.125 58V50.5C46.125 47.4624 43.6626 45 40.625 45V45C37.5874 45 35.125 47.4624 35.125 50.5V58'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <path
        d='M40.125 44.5V37.4564C40.125 37.1021 39.9375 36.7743 39.6322 36.5946L31.6322 31.8869C30.9655 31.4946 30.125 31.9753 30.125 32.7488V58'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <path
        d='M7.125 58V47.4468C7.125 47.0885 7.3167 46.7575 7.62751 46.5793L12.125 44'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <path
        d='M35.125 34V12C35.125 11.4477 34.6773 11 34.125 11L26.625 11.0003L19.125 11C18.5727 11 18.125 11.4477 18.125 12V22'
        stroke='#A2ABB7'
        stroke-width='2'
      />
      <path
        d='M16.125 52C16.125 51.4477 16.5727 51 17.125 51H18.125C18.6773 51 19.125 51.4477 19.125 52V58H16.125V52Z'
        fill='#A2ABB7'
      />
      <path
        d='M39.125 55C39.125 54.4477 39.5727 54 40.125 54H41.125C41.6773 54 42.125 54.4477 42.125 55V58H39.125V55Z'
        fill='#A2ABB7'
      />
      <path
        d='M25.125 6C25.125 5.44772 25.5727 5 26.125 5C26.6773 5 27.125 5.44772 27.125 6V11H25.125V6Z'
        fill='#A2ABB7'
      />
      <rect x='16.125' y='44' width='3' height='3' rx='1' fill='#A2ABB7' />
      <rect x='39.125' y='49' width='3' height='3' rx='1' fill='#A2ABB7' />
      <rect x='16.125' y='38' width='3' height='3' rx='1' fill='#A2ABB7' />
      <rect x='16.125' y='32' width='3' height='3' rx='1' fill='#A2ABB7' />
      <rect x='16.125' y='26' width='3' height='3' rx='1' fill='#A2ABB7' />
    </g>
  </svg>
)

export default PricingTeam
