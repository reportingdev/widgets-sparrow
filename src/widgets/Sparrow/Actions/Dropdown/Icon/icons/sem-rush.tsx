import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const SemRush: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#FF642D' />
    <path
      d='M26.4243 16.8994C26.4243 17.3931 26.1792 17.4731 25.5701 17.4731C24.9224 17.4731 24.8043 17.3627 24.7352 16.859C24.6075 15.579 23.7629 14.491 22.3487 14.3699C21.8971 14.3303 21.7887 14.1589 21.7887 13.5844C21.7887 13.051 21.8674 12.7989 22.27 12.7989C24.7256 12.8088 26.425 14.8331 26.425 16.8994H26.4243ZM30 16.8994C30 13.0602 27.4664 9 21.6119 9H9.98229C9.74609 9 9.59902 9.12114 9.59902 9.34286C9.59902 9.46324 9.68741 9.57448 9.76614 9.63467C10.188 9.97752 10.8172 10.36 11.6416 10.7836C12.4475 11.1966 13.0759 11.4686 13.7043 11.7307C13.9695 11.8411 14.0683 11.9623 14.0683 12.1131C14.0683 12.325 13.9205 12.456 13.636 12.456H4.40333C4.12776 12.456 4 12.6373 4 12.8187C4 12.9695 4.04902 13.1006 4.17678 13.2316C4.92327 14.0377 6.12136 15.0053 7.86093 16.1238C9.44912 17.1352 11.0882 18.0599 12.7714 18.8941C13.0269 19.0152 13.1056 19.1562 13.1056 19.307C13.096 19.4785 12.9682 19.6194 12.6734 19.6194H8.43955C8.20409 19.6194 8.06668 19.7505 8.06668 19.9524C8.06668 20.0629 8.15507 20.2038 8.27317 20.315C9.23506 21.2118 10.7778 22.1893 12.8308 23.0853C15.5716 24.2846 18.3504 25 21.4745 25C27.3973 25 30 20.456 30 16.8994ZM22.27 22.5718C19.2447 22.5718 16.7103 20.0423 16.7103 16.8895C16.7103 13.7855 19.235 11.2872 22.27 11.2872C25.374 11.2872 27.8096 13.7756 27.8096 16.8895C27.7999 20.043 25.3733 22.5718 22.27 22.5718Z'
      fill='white'
    />
  </svg>
)

export default SemRush