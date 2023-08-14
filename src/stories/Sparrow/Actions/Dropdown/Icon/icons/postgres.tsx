import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Postgres: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clip-path='url(#clip0_266_18871)'>
      <path
        d='M17.9528 17.4716C18.1102 16.1999 18.063 16.0134 19.0395 16.2194L19.2874 16.2405C20.0382 16.2736 21.0204 16.1233 21.5974 15.8633C22.8395 15.3042 23.576 14.3706 22.3512 14.6159C19.5574 15.1751 19.3653 14.2573 19.3653 14.2573C22.3155 10.0109 23.5487 4.62053 22.4842 3.30107C19.5808 -0.297936 14.5551 1.40395 14.471 1.44814L14.4442 1.45294C13.8922 1.34182 13.2744 1.27543 12.5804 1.26455C11.3161 1.2444 10.3568 1.58609 9.62906 2.12156C9.62906 2.12156 0.663423 -1.46177 1.08052 6.62795C1.16923 8.34886 3.62327 19.6498 6.55018 16.2364C7.61995 14.9882 8.65378 13.9329 8.65378 13.9329C9.16714 14.2637 9.78176 14.4325 10.4264 14.3719L10.4762 14.3307C10.4606 14.4856 10.4675 14.6372 10.4961 14.8167C9.74226 15.634 9.96378 15.7775 8.45631 16.0785C6.93117 16.3834 7.82719 16.9263 8.41204 17.0682C9.12125 17.2402 10.7619 17.484 11.8708 15.9784L11.8266 16.1502C12.1224 16.3797 12.1024 17.8001 12.1444 18.815C12.1864 19.8299 12.2564 20.7769 12.4696 21.3353C12.6829 21.8935 12.9345 23.3318 14.9157 22.9199C16.5715 22.5756 17.8374 22.0802 17.9528 17.4716'
        fill='black'
      />
      <path
        d='M17.9528 17.4716C18.1102 16.1999 18.063 16.0134 19.0395 16.2194L19.2874 16.2405C20.0382 16.2736 21.0204 16.1233 21.5974 15.8633C22.8395 15.3042 23.576 14.3706 22.3512 14.6159C19.5574 15.1751 19.3653 14.2573 19.3653 14.2573C22.3155 10.0109 23.5487 4.62053 22.4842 3.30107C19.5808 -0.297936 14.5551 1.40395 14.471 1.44814L14.4442 1.45294C13.8922 1.34182 13.2744 1.27543 12.5804 1.26455C11.3161 1.2444 10.3568 1.58609 9.62906 2.12156C9.62906 2.12156 0.663423 -1.46177 1.08052 6.62795C1.16923 8.34886 3.62327 19.6498 6.55018 16.2364C7.61995 14.9882 8.65378 13.9329 8.65378 13.9329C9.16714 14.2637 9.78176 14.4325 10.4264 14.3719L10.4762 14.3307C10.4606 14.4856 10.4675 14.6372 10.4961 14.8167C9.74226 15.634 9.96378 15.7775 8.45631 16.0785C6.93117 16.3834 7.82719 16.9263 8.41204 17.0682C9.12125 17.2402 10.7619 17.484 11.8708 15.9784L11.8266 16.1502C12.1224 16.3797 12.1024 17.8001 12.1444 18.815C12.1864 19.8299 12.2564 20.7769 12.4696 21.3353C12.6829 21.8935 12.9345 23.3318 14.9157 22.9199C16.5715 22.5756 17.8374 22.0802 17.9528 17.4716'
        stroke='black'
        stroke-width='2.01509'
      />
      <path
        d='M22.3518 14.6159C19.5577 15.175 19.3656 14.2573 19.3656 14.2573C22.3157 10.0106 23.549 4.62012 22.4847 3.30082C19.5813 -0.297966 14.5554 1.40403 14.4715 1.44822L14.4445 1.4529C13.8925 1.34174 13.2747 1.27551 12.5803 1.26452C11.3161 1.24442 10.357 1.58606 9.62933 2.12142C9.62933 2.12142 0.663526 -1.46175 1.08051 6.62792C1.16922 8.34894 3.62321 19.6499 6.55023 16.2365C7.62005 14.9883 8.65371 13.933 8.65371 13.933C9.16713 14.2638 9.78175 14.4326 10.4261 14.372L10.4761 14.3307C10.4606 14.4857 10.4677 14.6373 10.4962 14.8167C9.74215 15.634 9.96372 15.7775 8.45636 16.0785C6.93111 16.3835 7.82713 16.9264 8.41214 17.0683C9.12136 17.2403 10.7621 17.4841 11.8708 15.9785L11.8266 16.1503C12.122 16.3798 12.3295 17.6435 12.2947 18.789C12.26 19.9346 12.2367 20.7211 12.4695 21.3354C12.7023 21.9497 12.9343 23.3318 14.9159 22.9199C16.5717 22.5757 17.4297 21.6837 17.5491 20.1957C17.6338 19.1379 17.8255 19.2943 17.8376 18.3485L17.9913 17.9008C18.1687 16.4668 18.0195 16.0042 19.0396 16.2193L19.2875 16.2405C20.0383 16.2736 21.021 16.1233 21.5978 15.8633C22.8397 15.3041 23.5762 14.3706 22.3517 14.6159H22.3518Z'
        fill='#336791'
      />
      <path
        d='M11.9905 15.4375C11.9135 18.1057 12.0098 20.7925 12.2789 21.4455C12.5482 22.0985 13.1245 23.3686 15.1062 22.9568C16.7619 22.6124 17.3643 21.9461 17.6257 20.4753C17.8182 19.3931 18.1893 16.3878 18.237 15.772'
        stroke='white'
        stroke-width='0.671697'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M9.61531 2.06019C9.61531 2.06019 0.643394 -1.49716 1.06049 6.5925C1.1492 8.31352 3.60335 19.6149 6.53032 16.2013C7.59992 14.9529 8.56726 13.9739 8.56726 13.9739'
        stroke='white'
        stroke-width='0.671697'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M14.4613 1.41079C14.1507 1.50525 19.452 -0.469249 22.4648 3.26539C23.529 4.58474 22.2958 9.97525 19.3457 14.222'
        stroke='white'
        stroke-width='0.671697'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M19.3457 14.2204C19.3457 14.2204 19.538 15.1385 22.3321 14.579C23.5564 14.3337 22.8196 15.2673 21.578 15.8267C20.559 16.2855 18.2744 16.4031 18.2371 15.7691C18.141 14.1334 19.4395 14.6303 19.3458 14.2204C19.2611 13.8513 18.6804 13.489 18.2963 12.5856C17.961 11.7971 13.6973 5.75024 19.4787 6.6483C19.6905 6.60579 17.9708 1.31346 12.5602 1.2274C7.15084 1.14135 7.32831 7.68092 7.32831 7.68092'
        stroke='white'
        stroke-width='0.671697'
        stroke-linecap='round'
        stroke-linejoin='bevel'
      />
      <path
        d='M10.4764 14.7806C9.72223 15.5979 9.94403 15.7414 8.43655 16.0425C6.91131 16.3475 7.80744 16.8903 8.39228 17.0321C9.1015 17.2043 10.7423 17.448 11.8509 15.9421C12.1885 15.4835 11.8489 14.7519 11.3852 14.5654C11.1611 14.4754 10.8615 14.3625 10.4764 14.7806V14.7806Z'
        stroke='white'
        stroke-width='0.671697'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10.4268 14.7663C10.3508 14.2858 10.5895 13.7141 10.8454 13.0451C11.2299 12.0414 12.117 11.0376 11.4073 7.85377C10.8784 5.48121 7.33044 7.36001 7.32822 7.68171C7.32605 8.0033 7.48869 9.3123 7.26895 10.8366C6.98222 12.8257 8.57362 14.508 10.4062 14.3359'
        stroke='white'
        stroke-width='0.671697'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M9.58284 7.63608C9.56684 7.74595 9.79019 8.03915 10.0814 8.07832C10.3722 8.11766 10.621 7.88854 10.6368 7.77877C10.6526 7.6689 10.4295 7.54787 10.1381 7.50853C9.84724 7.46914 9.59828 7.52647 9.5829 7.63608H9.58284Z'
        fill='white'
        stroke='white'
        stroke-width='0.223897'
      />
      <path
        d='M18.4384 7.40949C18.4542 7.51937 18.2311 7.81256 17.9398 7.85174C17.6488 7.89107 17.4 7.66195 17.3841 7.55218C17.3687 7.44231 17.5918 7.32128 17.8828 7.28194C18.1738 7.24261 18.4226 7.29989 18.4384 7.40955V7.40949Z'
        fill='white'
        stroke='white'
        stroke-width='0.111949'
      />
      <path
        d='M19.4789 6.64844C19.5268 7.51029 19.2875 8.09733 19.2573 9.0148C19.2127 10.3484 19.9127 11.8748 18.8579 13.403'
        stroke='white'
        stroke-width='0.671697'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_266_18871'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default Postgres
