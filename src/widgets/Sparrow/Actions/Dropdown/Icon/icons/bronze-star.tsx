import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const BronzeStar: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
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
      fill='url(#paintBronzeStar0_linear)'
    />
    <path
      d='M7.263 6.559c.055-.05.1-.109.134-.176L10.134.838A.58.58 0 0110.66.51v10.796L7.263 6.56z'
      fill='url(#paintBronzeStar1_linear)'
    />
    <path
      d='M.837 7.594l6.119-.889a.586.586 0 00.307-.144l3.397 4.748L.4 7.906a.577.577 0 01.437-.312z'
      fill='url(#paintBronzeStar2_linear)'
    />
    <path
      d='M.512 8.594L4.94 12.91a.598.598 0 01.167.312l5.553-1.915L.4 7.904a.584.584 0 00.112.69z'
      fill='url(#paintBronzeStar3_linear)'
    />
    <path
      d='M4.247 20.057l6.413-8.75-5.553 1.915a.568.568 0 01.002.207l-1.046 6.095a.575.575 0 00.184.533z'
      fill='url(#paintBronzeStar4_linear)'
    />
    <path
      d='M4.247 20.057c.17.155.43.209.668.084l5.472-2.877a.6.6 0 01.273-.066v-5.89l-6.413 8.75z'
      fill='url(#paintBronzeStar5_linear)'
    />
    <path
      d='M14.059 6.562a.583.583 0 01-.135-.177L11.188.841a.58.58 0 00-.527-.327V11.31l3.398-4.748z'
      fill='url(#paintBronzeStar6_linear)'
    />
    <path
      d='M20.485 7.594l-6.119-.889a.586.586 0 01-.307-.144l-3.397 4.748 10.26-3.403a.577.577 0 00-.437-.312z'
      fill='url(#paintBronzeStar7_linear)'
    />
    <path
      d='M20.81 8.594l-4.427 4.316a.598.598 0 00-.168.312l-5.553-1.915 10.26-3.403a.584.584 0 01-.111.69z'
      fill='url(#paintBronzeStar8_linear)'
    />
    <path
      d='M17.077 20.057l-6.414-8.75 5.553 1.915a.57.57 0 00-.001.207l1.045 6.095a.575.575 0 01-.183.533z'
      fill='url(#paintBronzeStar9_linear)'
    />
    <path
      d='M17.074 20.057a.582.582 0 01-.668.084l-5.472-2.877a.6.6 0 00-.273-.066v-5.89l6.413 8.75z'
      fill='url(#paintBronzeStar10_linear)'
    />
    <defs>
      <linearGradient
        id='paintBronzeStar0_linear'
        x1='10.662'
        y1='3.821'
        x2='10.662'
        y2='23.98'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#EAEEFF' />
        <stop offset='.427' stopColor='#C8D2FF' />
        <stop offset='1' stopColor='#8DA3FF' />
      </linearGradient>
      <linearGradient
        id='paintBronzeStar1_linear'
        x1='10.997'
        y1='4'
        x2='7.855'
        y2='9.698'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9838' />
        <stop offset='.193' stopColor='#FF9546' />
        <stop offset='.385' stopColor='#FF9B50' />
        <stop offset='.716' stopColor='#ED893D' />
        <stop offset='1' stopColor='#CE7430' />
      </linearGradient>
      <linearGradient
        id='paintBronzeStar2_linear'
        x1='8.998'
        y1='5'
        x2='8.998'
        y2='13.5'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9838' />
        <stop offset='.193' stopColor='#FF9546' />
        <stop offset='.385' stopColor='#FF9B50' />
        <stop offset='.745' stopColor='#ED893D' />
        <stop offset='1' stopColor='#E98133' />
      </linearGradient>
      <linearGradient
        id='paintBronzeStar3_linear'
        x1='4.498'
        y1='14'
        x2='6.998'
        y2='8.5'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9838' />
        <stop offset='.193' stopColor='#FF9546' />
        <stop offset='.385' stopColor='#FF9B50' />
        <stop offset='.729' stopColor='#ED893D' />
        <stop offset='1' stopColor='#E98133' />
      </linearGradient>
      <linearGradient
        id='paintBronzeStar4_linear'
        x1='5.498'
        y1='10'
        x2='9.498'
        y2='17'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9838' />
        <stop offset='.193' stopColor='#FF9546' />
        <stop offset='.385' stopColor='#FF9B50' />
        <stop offset='.802' stopColor='#ED893D' />
        <stop offset='1' stopColor='#E98133' />
      </linearGradient>
      <linearGradient
        id='paintBronzeStar5_linear'
        x1='10.997'
        y1='21'
        x2='5.406'
        y2='17.827'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9838' />
        <stop offset='.193' stopColor='#FF9546' />
        <stop offset='.385' stopColor='#FF9B50' />
        <stop offset='.693' stopColor='#ED893D' />
        <stop offset='1' stopColor='#E98133' />
      </linearGradient>
      <linearGradient
        id='paintBronzeStar6_linear'
        x1='15.498'
        y1='-6.5'
        x2='19.813'
        y2='-4.813'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9838' />
        <stop offset='.193' stopColor='#FF9546' />
        <stop offset='.422' stopColor='#FF9B50' />
        <stop offset='.682' stopColor='#ED893D' />
        <stop offset='1' stopColor='#E98133' />
      </linearGradient>
      <linearGradient
        id='paintBronzeStar7_linear'
        x1='20.999'
        y1='3'
        x2='16.499'
        y2='.5'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFA44F' />
        <stop offset='.339' stopColor='#FF9546' />
        <stop offset='.536' stopColor='#FF9B50' />
        <stop offset='.745' stopColor='#ED893D' />
        <stop offset='1' stopColor='#E98133' />
      </linearGradient>
      <linearGradient
        id='paintBronzeStar8_linear'
        x1='21.499'
        y1='11'
        x2='19.999'
        y2='7'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9838' />
        <stop offset='.193' stopColor='#FF9546' />
        <stop offset='.396' stopColor='#FF9B50' />
        <stop offset='.719' stopColor='#ED893D' />
        <stop offset='1' stopColor='#E98133' />
      </linearGradient>
      <linearGradient
        id='paintBronzeStar9_linear'
        x1='5.5'
        y1='14.5'
        x2='7.247'
        y2='8.637'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9838' />
        <stop offset='.193' stopColor='#FF9546' />
        <stop offset='.385' stopColor='#FF9B50' />
        <stop offset='.672' stopColor='#ED893D' />
        <stop offset='1' stopColor='#E98133' />
      </linearGradient>
      <linearGradient
        id='paintBronzeStar10_linear'
        x1='6.498'
        y1='12'
        x2='14.079'
        y2='9.42'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9838' />
        <stop offset='.193' stopColor='#FF9546' />
        <stop offset='.385' stopColor='#FF9B50' />
        <stop offset='.677' stopColor='#ED893D' />
        <stop offset='1' stopColor='#E98133' />
      </linearGradient>
    </defs>
  </svg>
)

export default BronzeStar
