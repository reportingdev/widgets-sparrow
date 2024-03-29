import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const ProfileSettings: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='23'
    height='21'
    viewBox='0 0 23 21'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8 8a4 4 0 100-8 4 4 0 000 8zM9.775 17.824a2.14 2.14 0 01.19-2.489 2.14 2.14 0 01-.19-2.489l.756-1.244c.675-1.114 1.675-.808 2.469-1.602l-1.622.002h-6.94C1.99 10.002 0 11.896 0 14.224v3.111c0 .368.314.667.7.667h9.183l-.108-.178zM21.741 16.016c.023-.17.054-.34.054-.516 0-.177-.032-.345-.054-.516l1.032-.75a.536.536 0 00.15-.714l-.926-1.54a.585.585 0 00-.719-.232l-1.188.48c-.29-.212-.598-.399-.938-.535l-.158-1.211a.566.566 0 00-.568-.482h-1.852a.565.565 0 00-.568.482l-.158 1.21c-.34.137-.65.325-.939.537l-1.187-.481a.584.584 0 00-.718.232l-.927 1.54a.537.537 0 00.15.714l1.032.75c-.023.17-.054.34-.054.516 0 .177.032.345.054.516l-1.032.75a.536.536 0 00-.15.714l.927 1.541c.144.24.452.34.718.232l1.188-.482c.29.213.598.4.938.536l.158 1.211a.564.564 0 00.567.482h1.852a.565.565 0 00.568-.482l.158-1.21c.34-.137.65-.325.938-.537l1.188.481a.584.584 0 00.718-.232l.927-1.541a.537.537 0 00-.15-.714l-1.03-.75zM17.5 17.7c-1.265 0-2.29-.985-2.29-2.2 0-1.216 1.025-2.2 2.29-2.2 1.266 0 2.291.984 2.291 2.2 0 1.215-1.025 2.2-2.29 2.2z'
      fill='currentColor'
    />
  </svg>
)

export default ProfileSettings
