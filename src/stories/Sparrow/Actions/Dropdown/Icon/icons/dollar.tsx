import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Checkmark: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='14'
    height='27'
    viewBox='0 0 14 27'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M13.803 16.438a5.46 5.46 0 00-.472-1.152 3.896 3.896 0 00-.795-.957 9.502 9.502 0 00-.93-.754 9.06 9.06 0 00-1.133-.64c-.48-.236-.86-.412-1.14-.528-.28-.115-.686-.273-1.216-.474-.47-.18-.82-.319-1.05-.414a23.03 23.03 0 01-.908-.407 5.284 5.284 0 01-.84-.467 6.597 6.597 0 01-.593-.497 1.696 1.696 0 01-.443-.626 2.001 2.001 0 01-.127-.723c0-.683.3-1.24.9-1.672.6-.432 1.375-.648 2.326-.648.42 0 .848.058 1.283.173a6.69 6.69 0 011.117.392c.31.146.603.306.878.482s.47.309.585.4c.116.09.189.15.218.18.13.1.265.136.405.106.15-.01.265-.09.345-.241l1.216-2.2c.12-.2.095-.392-.075-.573-.06-.06-.135-.13-.225-.21a7.798 7.798 0 00-.586-.438c-.3-.21-.617-.399-.952-.565a9.61 9.61 0 00-1.306-.504 8.292 8.292 0 00-1.658-.347V.482a.471.471 0 00-.135-.346A.467.467 0 008.147 0H6.121a.46.46 0 00-.337.143.464.464 0 00-.143.34v2.711c-1.57.301-2.846.974-3.826 2.02-.98 1.044-1.47 2.26-1.47 3.645 0 .412.042.804.127 1.175.085.372.19.706.315 1.002.125.297.303.588.533.875.23.286.448.532.653.738a5.3 5.3 0 00.802.64c.33.221.613.4.848.535.236.135.548.291.938.467.39.176.698.309.923.4.225.09.533.215.923.375.54.211.94.375 1.2.49.26.116.59.277.99.482.4.206.693.395.878.565.185.171.353.382.503.633.15.251.226.517.226.799 0 .793-.308 1.406-.924 1.838-.615.432-1.328.648-2.138.648-.37 0-.74-.04-1.11-.12-1.3-.262-2.516-.89-3.646-1.884l-.03-.03a.371.371 0 00-.36-.136c-.16.02-.275.08-.345.181L.105 20.566c-.15.201-.14.407.03.618.05.06.138.15.263.271.125.121.358.309.698.566.34.256.71.497 1.11.723.4.226.908.45 1.523.67.616.221 1.253.377 1.913.467v2.637c0 .13.048.243.143.339a.46.46 0 00.337.143h2.026c.14 0 .256-.045.345-.135a.47.47 0 00.135-.347V23.88c1.59-.261 2.884-.947 3.879-2.057.995-1.11 1.493-2.433 1.493-3.97 0-.502-.065-.974-.197-1.416z'
      fill='currentColor'
    />
  </svg>
)
export default Checkmark
