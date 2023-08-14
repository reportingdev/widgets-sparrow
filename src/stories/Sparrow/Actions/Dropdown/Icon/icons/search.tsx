import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Search: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    width='19'
    height='18'
    className={`Icon ${className}`}
    viewBox='0 0 19 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.875 12.4554L17.875 16.4602C18.0536 16.6589 18.0448 16.9631 17.855 17.1511L17.155 17.8519C17.0611 17.9467 16.9333 18 16.8 18C16.6667 18 16.5389 17.9467 16.445 17.8519L12.445 13.8471C12.3344 13.7362 12.234 13.6156 12.145 13.4867L11.395 12.4855C10.1541 13.4776 8.61304 14.0178 7.025 14.0173C3.75261 14.0287 0.909021 11.7686 0.177728 8.5751C-0.553566 5.38161 1.0226 2.10699 3.9731 0.689914C6.92359 -0.727158 10.461 0.0915127 12.491 2.66125C14.521 5.23099 14.5019 8.86596 12.445 11.4142L13.445 12.105C13.6012 12.2051 13.7454 12.3226 13.875 12.4554ZM2.02499 7.00887C2.02499 9.77362 4.26357 12.0149 7.02499 12.0149C8.35108 12.0149 9.62285 11.4875 10.5605 10.5487C11.4982 9.60985 12.025 8.33655 12.025 7.00887C12.025 4.24411 9.78642 2.00284 7.02499 2.00284C4.26357 2.00284 2.02499 4.24411 2.02499 7.00887Z'
      fill='currentColor'
    />
  </svg>
)

export default Search