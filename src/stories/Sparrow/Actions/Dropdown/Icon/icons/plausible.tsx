import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Plausible: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#394ED1' />
    <path
      opacity='0.8'
      d='M18 6.00054C22.4183 6.00054 26 9.6909 26 14.2432C26 18.7955 22.4183 22.4858 18 22.4858C13.5817 22.4858 10 18.7955 10 14.2432C10 9.6909 13.5817 6.00054 18 6.00054Z'
      fill='white'
    />
    <path
      d='M16.6286 6.09262C14.9754 6.38837 13.5827 7.11131 12.4292 8.27241C11.2439 9.46636 10.5103 10.8575 10.1542 12.5936L10.0319 13.1851L10.0159 20.5898L10 28H10.1488C10.2339 28 10.505 27.9726 10.7495 27.9452C12.8385 27.6823 14.614 26.3789 15.5814 24.4017C15.8259 23.8978 16.0013 23.3173 16.1236 22.5944C16.2246 21.9809 16.2299 21.7783 16.214 18.5798L16.198 15.2116L16.3256 14.883C16.501 14.4339 16.9847 13.9355 17.4206 13.7547L17.7395 13.6233L20.7163 13.6178C22.3535 13.6178 23.7887 13.5959 23.9003 13.574C24.4213 13.4699 24.9794 13.0208 25.2027 12.5224C25.2664 12.3855 25.3515 12.1172 25.3887 11.9364C25.4472 11.6352 25.4419 11.553 25.3568 11.2135C25.091 10.2057 24.1555 8.80914 23.1987 7.99309C22.1143 7.0675 20.9183 6.44862 19.6266 6.13644C18.9462 5.97761 17.4047 5.95022 16.6286 6.09262Z'
      fill='#9CA7E8'
    />
  </svg>
)

export default Plausible