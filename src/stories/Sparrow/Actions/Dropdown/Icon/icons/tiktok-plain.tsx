import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const TiktokPlain: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='17'
    height='21'
    viewBox='0 0 17 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M16.9972 8.49622C16.8348 8.5129 16.6719 8.52164 16.5088 8.52241C15.6282 8.52254 14.7614 8.29086 13.9867 7.84828C13.212 7.40571 12.5537 6.76617 12.0714 5.98739V14.6198C12.0714 15.8817 11.7174 17.1152 11.0542 18.1644C10.391 19.2137 9.44832 20.0314 8.34544 20.5143C7.24256 20.9972 6.02899 21.1236 4.85818 20.8774C3.68737 20.6312 2.61192 20.0236 1.76781 19.1313C0.923708 18.239 0.348865 17.1021 0.115977 15.8645C-0.116911 14.6269 0.00261512 13.344 0.459442 12.1782C0.916268 11.0124 1.68988 10.0159 2.68244 9.31484C3.675 8.61377 4.84194 8.23958 6.03569 8.23958C6.16168 8.23958 6.28484 8.25155 6.40871 8.25978V11.4039C6.28484 11.3882 6.16309 11.3642 6.03569 11.3642C5.21869 11.3642 4.43516 11.7073 3.85745 12.318C3.27975 12.9286 2.9552 13.7569 2.9552 14.6205C2.9552 15.4842 3.27975 16.3124 3.85745 16.9231C4.43516 17.5338 5.21869 17.8769 6.03569 17.8769C7.73731 17.8769 9.24004 16.4597 9.24004 14.6609L9.26977 0H12.1153C12.2453 1.30694 12.8057 2.52398 13.6986 3.43833C14.5916 4.35268 15.7601 4.90615 17 5.00196V8.49622'
      fill='black'
    />
  </svg>
)

export default TiktokPlain
