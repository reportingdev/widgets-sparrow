import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const CircularRefresh: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='18'
    height='23'
    viewBox='0 0 18 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M0.059037 12.3053C-0.0823383 11.088 0.0354744 9.91278 0.355925 8.82654C1.42095 5.21667 4.76212 2.56193 8.72534 2.51511V0.15535C8.72534 0.0242523 8.89028 -0.0459787 8.99867 0.0336165L13.8855 3.60135C13.9657 3.66222 13.9657 3.78395 13.8855 3.84014L9.00338 7.40787C8.89028 7.48747 8.73006 7.41724 8.73006 7.28614V4.93106C6.12404 4.9732 3.89973 6.56978 2.94309 8.82654C2.58023 9.67868 2.39644 10.6198 2.44828 11.6077C2.51897 12.9655 3.03263 14.2156 3.84318 15.2269C4.27673 15.7654 4.17306 16.552 3.61227 16.9593C3.07976 17.3479 2.33518 17.2402 1.92519 16.7252C0.921426 15.4798 0.25225 13.9628 0.059037 12.3053ZM14.1683 7.77307C14.9836 8.77972 15.4972 10.0345 15.5632 11.3923C15.615 12.3849 15.4265 13.326 15.0684 14.1735C14.1117 16.4302 11.8874 18.0315 9.28142 18.0689V15.7139C9.28142 15.5828 9.11648 15.5125 9.00809 15.5921L4.12122 19.1599C4.04111 19.2207 4.04111 19.3425 4.12122 19.3986L9.00338 22.9664C9.11648 23.046 9.27671 22.9757 9.27671 22.8447V20.4849C13.2399 20.4427 16.5858 17.788 17.6461 14.1735C17.9666 13.0872 18.0797 11.912 17.943 10.6947C17.7545 9.03723 17.0853 7.52024 16.0816 6.27481C15.6669 5.75979 14.927 5.6521 14.3945 6.04071C13.8384 6.44805 13.7347 7.23464 14.1683 7.77307Z'
      fill='#7E8B9D'
    />
  </svg>
)

export default CircularRefresh
