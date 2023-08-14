import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const TwitterDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='21'
    height='20'
    viewBox='0 0 21 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M20.9693 2.89857C20.4274 3.70839 19.7725 4.4148 19.0297 4.99053C19.0297 5.20208 19.0297 5.41363 19.0297 5.63693C19.0357 9.47859 17.6661 13.1622 15.2281 15.8621C12.79 18.562 9.48745 20.0521 6.06072 19.9986C4.07965 20.006 2.12395 19.4992 0.346816 18.5178C0.250994 18.4709 0.189189 18.3647 0.189553 18.2475V18.1182C0.189553 17.9494 0.311596 17.8126 0.462143 17.8126C2.40949 17.7407 4.28736 16.9842 5.83007 15.6501C4.06745 15.6104 2.48155 14.4404 1.7517 12.6415C1.71484 12.5432 1.72632 12.4305 1.78199 12.3441C1.83767 12.2577 1.92949 12.21 2.02429 12.2184C2.55999 12.2787 3.10104 12.2229 3.61789 12.0538C1.67211 11.6013 0.210078 9.79136 0.000837006 7.5761C-0.00659969 7.46983 0.035904 7.3669 0.112993 7.30449C0.190082 7.24208 0.290614 7.22921 0.378269 7.27054C0.900432 7.52869 1.4641 7.66466 2.03478 7.67013C0.329812 6.41629 -0.40662 4.03143 0.241974 1.86434C0.308924 1.65376 0.469772 1.4982 0.665409 1.45482C0.861045 1.41144 1.06261 1.48664 1.19604 1.65279C3.49678 4.39641 6.65804 6.03132 10.0133 6.2128C9.92733 5.82856 9.88506 5.43367 9.88746 5.03754C9.91884 2.96042 11.0659 1.11008 12.7916 0.352777C14.5173 -0.404525 16.4801 0.0810908 17.7611 1.58228C18.6343 1.39589 19.4785 1.06725 20.2668 0.606811C20.3246 0.566416 20.3978 0.566416 20.4556 0.606811C20.4916 0.671541 20.4916 0.753627 20.4556 0.818358C20.0737 1.79806 19.4287 2.61976 18.6103 3.16888C19.3269 3.07577 20.0309 2.88637 20.7072 2.60475C20.7641 2.56133 20.839 2.56133 20.8959 2.60475C20.9436 2.62921 20.9793 2.67596 20.9934 2.73258C21.0075 2.78919 20.9987 2.84991 20.9693 2.89857Z'
      fill='white'
    />
  </svg>
)

export default TwitterDisabled
