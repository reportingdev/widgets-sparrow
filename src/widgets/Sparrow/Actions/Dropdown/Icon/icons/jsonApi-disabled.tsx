import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const JsonAPiDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='20'
    height='16'
    viewBox='0 0 20 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3.54497 13.6337C3.54497 13.8792 3.5818 14.0803 3.65548 14.237C3.72916 14.3937 3.83117 14.5165 3.96152 14.6053C4.09754 14.6941 4.26189 14.7542 4.45459 14.7855C4.64728 14.8221 4.86547 14.843 5.10917 14.8482V16C4.67845 15.9948 4.28173 15.9478 3.91902 15.859C3.5563 15.7754 3.24176 15.6422 2.97539 15.4594C2.71469 15.2818 2.50783 15.0519 2.35481 14.7698C2.20746 14.4878 2.13378 14.1456 2.13378 13.7434V10.0451C2.13378 9.51747 1.94959 9.14398 1.58121 8.92458C1.21849 8.70519 0.691424 8.5955 0 8.5955V7.40451C0.691424 7.40451 1.21849 7.29481 1.58121 7.07542C1.94959 6.85602 2.13378 6.48253 2.13378 5.95495V2.24878C2.13378 1.85178 2.20746 1.51224 2.35481 1.23017C2.50783 0.94809 2.71469 0.71825 2.97539 0.540646C3.24176 0.357819 3.5563 0.224616 3.91902 0.141038C4.28173 0.0522364 4.67845 0.00522364 5.10917 0V1.14398C4.86547 1.1492 4.64728 1.17009 4.45459 1.20666C4.26189 1.238 4.09754 1.29807 3.96152 1.38688C3.83117 1.47568 3.72916 1.59843 3.65548 1.75514C3.5818 1.91185 3.54497 2.11296 3.54497 2.35847V6.04897C3.54497 6.58701 3.38911 7.01534 3.07741 7.33399C2.7657 7.6474 2.30947 7.85635 1.70872 7.96082V8.04701C2.30947 8.15149 2.7657 8.36043 3.07741 8.67385C3.38911 8.98204 3.54497 9.40777 3.54497 9.95103V13.6337Z'
      fill='white'
    />
    <path
      d='M16.455 13.6337C16.455 13.8792 16.4182 14.0803 16.3445 14.237C16.2708 14.3937 16.1688 14.5165 16.0385 14.6053C15.9025 14.6941 15.7381 14.7542 15.5454 14.7855C15.3527 14.8221 15.1345 14.843 14.8908 14.8482V16C15.3216 15.9948 15.7183 15.9478 16.081 15.859C16.4437 15.7754 16.7582 15.6422 17.0246 15.4594C17.2853 15.2818 17.4922 15.0519 17.6452 14.7698C17.7925 14.4878 17.8662 14.1456 17.8662 13.7434V10.0451C17.8662 9.51747 18.0504 9.14398 18.4188 8.92458C18.7815 8.70519 19.3086 8.5955 20 8.5955V7.40451C19.3086 7.40451 18.7815 7.29481 18.4188 7.07542C18.0504 6.85602 17.8662 6.48253 17.8662 5.95495V2.24878C17.8662 1.85178 17.7925 1.51224 17.6452 1.23017C17.4922 0.94809 17.2853 0.71825 17.0246 0.540646C16.7582 0.357819 16.4437 0.224616 16.081 0.141038C15.7183 0.0522364 15.3216 0.00522364 14.8908 0V1.14398C15.1345 1.1492 15.3527 1.17009 15.5454 1.20666C15.7381 1.238 15.9025 1.29807 16.0385 1.38688C16.1688 1.47568 16.2708 1.59843 16.3445 1.75514C16.4182 1.91185 16.455 2.11296 16.455 2.35847V6.04897C16.455 6.58701 16.6109 7.01534 16.9226 7.33399C17.2343 7.6474 17.6905 7.85635 18.2913 7.96082V8.04701C17.6905 8.15149 17.2343 8.36043 16.9226 8.67385C16.6109 8.98204 16.455 9.40777 16.455 9.95103V13.6337Z'
      fill='white'
    />
    <path
      d='M11.0891 4.07108C10.9649 4.07108 10.8382 4.06153 10.7089 4.04242C10.5795 4.01854 10.4373 3.97794 10.2821 3.92061C10.1321 3.86329 10.0079 3.77253 9.90965 3.64833C9.81654 3.52413 9.76998 3.37605 9.76998 3.20408C9.76998 2.61653 10.1993 2.32275 11.058 2.32275C11.3011 2.32275 11.5055 2.35142 11.671 2.40874C11.8417 2.46606 11.9659 2.54249 12.0434 2.63803C12.1262 2.73356 12.1831 2.82671 12.2141 2.91747C12.2452 3.00823 12.2607 3.10616 12.2607 3.21125C12.2607 3.42621 12.1883 3.60295 12.0434 3.74148C11.8986 3.88001 11.7434 3.97077 11.5779 4.01376C11.4175 4.05198 11.2546 4.07108 11.0891 4.07108ZM12.3693 5.96989V11.8884C12.3693 12.2085 12.3564 12.5022 12.3305 12.7697C12.3098 13.0325 12.2685 13.3024 12.2064 13.5794C12.1443 13.8613 12.0538 14.1073 11.9348 14.3174C11.821 14.5276 11.6788 14.7163 11.5081 14.8835C11.3374 15.0555 11.1227 15.1868 10.864 15.2776C10.6054 15.3684 10.3105 15.4137 9.97948 15.4137C9.71567 15.4137 9.45185 15.3875 9.18804 15.3349C8.9294 15.2872 8.67075 15.2083 8.41211 15.0985C8.15864 14.9934 7.95173 14.8381 7.79137 14.6327C7.63619 14.4321 7.55859 14.198 7.55859 13.9305C7.55859 13.7347 7.64653 13.577 7.82241 13.4576C7.99828 13.343 8.20261 13.2856 8.43539 13.2856C8.62161 13.2856 8.76904 13.3143 8.87767 13.3716C8.9863 13.429 9.06389 13.4982 9.11044 13.5794C9.157 13.6606 9.20097 13.7418 9.24235 13.823C9.28373 13.9042 9.35098 13.9735 9.44409 14.0308C9.54238 14.0882 9.67687 14.1168 9.84757 14.1168C10.0131 14.1168 10.1476 14.0762 10.2511 13.995C10.3597 13.9186 10.4373 13.7968 10.4838 13.6296C10.5356 13.4672 10.5692 13.2976 10.5847 13.1208C10.6002 12.9489 10.608 12.7268 10.608 12.4545V7.35995C10.608 7.10678 10.5226 6.92765 10.3519 6.82256C10.1864 6.71746 9.86309 6.65537 9.38202 6.63626C9.31477 6.62193 9.2708 6.59088 9.25011 6.54311C9.23459 6.49534 9.22683 6.39264 9.22683 6.235C9.22683 5.99616 9.25528 5.78359 9.31219 5.59729C9.37426 5.40622 9.43116 5.29635 9.48289 5.26769C9.96396 5.32023 10.4269 5.34651 10.8718 5.34651C11.0891 5.34651 11.3167 5.33456 11.5546 5.31068C11.7926 5.28202 11.9193 5.26769 11.9348 5.26769C12.1159 5.26769 12.2323 5.31068 12.284 5.39666C12.3409 5.47787 12.3693 5.66894 12.3693 5.96989Z'
      fill='white'
    />
  </svg>
)

export default JsonAPiDisabled