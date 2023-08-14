import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const GoldStar: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='21'
    height='21'
    viewBox='0 0 21 21'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10.136.838L7.4 6.383a.587.587 0 01-.442.32l-6.12.89a.587.587 0 00-.324 1L4.94 12.91a.586.586 0 01.17.52l-1.046 6.094c-.082.48.42.845.851.619l5.473-2.878c.171-.09.375-.09.546 0l5.473 2.878c.43.226.934-.14.851-.619l-1.045-6.094a.587.587 0 01.169-.52l4.428-4.316a.587.587 0 00-.326-1l-6.119-.89a.587.587 0 01-.441-.32L11.188.838a.586.586 0 00-1.052 0z'
      fill='url(#paintGoldStar0_linear)'
    />
    <path
      d='M7.267 6.559c.055-.05.1-.109.134-.176L10.138.838a.58.58 0 01.526-.327v10.796L7.267 6.56z'
      fill='url(#paintGoldStar1_linear)'
    />
    <path
      d='M.837 7.594l6.119-.889a.586.586 0 00.307-.144l3.397 4.748L.4 7.906a.577.577 0 01.437-.312z'
      fill='url(#paintGoldStar2_linear)'
    />
    <path
      d='M.512 8.594L4.94 12.91a.598.598 0 01.167.312l5.553-1.915L.4 7.904a.584.584 0 00.112.69z'
      fill='url(#paintGoldStar3_linear)'
    />
    <path
      d='M4.247 20.057l6.413-8.75-5.553 1.915a.568.568 0 01.002.207l-1.046 6.095a.575.575 0 00.184.533z'
      fill='url(#paintGoldStar4_linear)'
    />
    <path
      d='M4.25 20.057c.172.155.43.209.668.084l5.473-2.877a.6.6 0 01.273-.066v-5.89l-6.414 8.75z'
      fill='url(#paintGoldStar5_linear)'
    />
    <path
      d='M14.059 6.559a.583.583 0 01-.135-.176L11.188.838A.58.58 0 0010.66.51v10.796L14.06 6.56z'
      fill='url(#paintGoldStar6_linear)'
    />
    <path
      d='M20.485 7.594l-6.119-.889a.586.586 0 01-.307-.144l-3.397 4.748 10.26-3.403a.577.577 0 00-.437-.312z'
      fill='url(#paintGoldStar7_linear)'
    />
    <path
      d='M20.81 8.594l-4.427 4.316a.598.598 0 00-.168.312l-5.553-1.915 10.26-3.403a.584.584 0 01-.111.69z'
      fill='url(#paintGoldStar8_linear)'
    />
    <path
      d='M17.077 20.057l-6.414-8.75 5.553 1.915a.57.57 0 00-.001.207l1.045 6.095a.575.575 0 01-.183.533z'
      fill='url(#paintGoldStar9_linear)'
    />
    <path
      d='M17.074 20.057a.582.582 0 01-.668.084l-5.472-2.877a.6.6 0 00-.273-.066v-5.89l6.413 8.75z'
      fill='url(#paintGoldStar10_linear)'
    />
    <defs>
      <linearGradient
        id='paintGoldStar0_linear'
        x1='10.662'
        y1='3.821'
        x2='10.662'
        y2='23.98'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFCF95' />
        <stop offset='.427' stopColor='#FFC954' />
        <stop offset='1' stopColor='#FFC200' />
      </linearGradient>
      <linearGradient
        id='paintGoldStar1_linear'
        x1='8.563'
        y1='7.885'
        x2='14.72'
        y2='1.729'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC200' stopOpacity='0' />
        <stop offset='.203' stopColor='#FB0' stopOpacity='.203' />
        <stop offset='.499' stopColor='#FFA700' stopOpacity='.499' />
        <stop offset='.852' stopColor='#F80' stopOpacity='.852' />
        <stop offset='1' stopColor='#FF7800' />
      </linearGradient>
      <linearGradient
        id='paintGoldStar2_linear'
        x1='4.644'
        y1='10.471'
        x2='10.576'
        y2='4.538'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC200' stopOpacity='0' />
        <stop offset='.203' stopColor='#FB0' stopOpacity='.203' />
        <stop offset='.499' stopColor='#FFA700' stopOpacity='.499' />
        <stop offset='.852' stopColor='#F80' stopOpacity='.852' />
        <stop offset='1' stopColor='#FF7800' />
      </linearGradient>
      <linearGradient
        id='paintGoldStar3_linear'
        x1='2.432'
        y1='12.702'
        x2='8.067'
        y2='7.066'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC200' stopOpacity='0' />
        <stop offset='.203' stopColor='#FB0' stopOpacity='.203' />
        <stop offset='.499' stopColor='#FFA700' stopOpacity='.499' />
        <stop offset='.852' stopColor='#F80' stopOpacity='.852' />
        <stop offset='1' stopColor='#FF7800' />
      </linearGradient>
      <linearGradient
        id='paintGoldStar4_linear'
        x1='4.578'
        y1='16.737'
        x2='13.447'
        y2='7.867'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC200' stopOpacity='0' />
        <stop offset='.203' stopColor='#FB0' stopOpacity='.203' />
        <stop offset='.499' stopColor='#FFA700' stopOpacity='.499' />
        <stop offset='.852' stopColor='#F80' stopOpacity='.852' />
        <stop offset='1' stopColor='#FF7800' />
      </linearGradient>
      <linearGradient
        id='paintGoldStar5_linear'
        x1='7.001'
        y1='19'
        x2='5.501'
        y2='12'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC200' stopOpacity='0' />
        <stop offset='.203' stopColor='#FB0' stopOpacity='.203' />
        <stop offset='.499' stopColor='#FFA700' stopOpacity='.499' />
        <stop offset='.852' stopColor='#F80' stopOpacity='.852' />
        <stop offset='1' stopColor='#FF7800' />
      </linearGradient>
      <linearGradient
        id='paintGoldStar6_linear'
        x1='12.76'
        y1='7.885'
        x2='6.604'
        y2='1.729'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC200' stopOpacity='0' />
        <stop offset='.203' stopColor='#FB0' stopOpacity='.203' />
        <stop offset='.499' stopColor='#FFA700' stopOpacity='.499' />
        <stop offset='.852' stopColor='#F80' stopOpacity='.852' />
        <stop offset='1' stopColor='#FF7800' />
      </linearGradient>
      <linearGradient
        id='paintGoldStar7_linear'
        x1='16.676'
        y1='10.471'
        x2='10.745'
        y2='4.538'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC200' stopOpacity='0' />
        <stop offset='.203' stopColor='#FB0' stopOpacity='.203' />
        <stop offset='.499' stopColor='#FFA700' stopOpacity='.499' />
        <stop offset='.852' stopColor='#F80' stopOpacity='.852' />
        <stop offset='1' stopColor='#FF7800' />
      </linearGradient>
      <linearGradient
        id='paintGoldStar8_linear'
        x1='18.89'
        y1='12.702'
        x2='13.254'
        y2='7.067'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC200' stopOpacity='0' />
        <stop offset='.203' stopColor='#FB0' stopOpacity='.203' />
        <stop offset='.499' stopColor='#FFA700' stopOpacity='.499' />
        <stop offset='.852' stopColor='#F80' stopOpacity='.852' />
        <stop offset='1' stopColor='#FF7800' />
      </linearGradient>
      <linearGradient
        id='paintGoldStar9_linear'
        x1='16.744'
        y1='16.737'
        x2='7.874'
        y2='7.867'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC200' stopOpacity='0' />
        <stop offset='.203' stopColor='#FB0' stopOpacity='.203' />
        <stop offset='.499' stopColor='#FFA700' stopOpacity='.499' />
        <stop offset='.852' stopColor='#F80' stopOpacity='.852' />
        <stop offset='1' stopColor='#FF7800' />
      </linearGradient>
      <linearGradient
        id='paintGoldStar10_linear'
        x1='9.911'
        y1='19.637'
        x2='16.538'
        y2='13.01'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC200' stopOpacity='0' />
        <stop offset='.203' stopColor='#FB0' stopOpacity='.203' />
        <stop offset='.499' stopColor='#FFA700' stopOpacity='.499' />
        <stop offset='.852' stopColor='#F80' stopOpacity='.852' />
        <stop offset='1' stopColor='#FF7800' />
      </linearGradient>
    </defs>
  </svg>
)

export default GoldStar
