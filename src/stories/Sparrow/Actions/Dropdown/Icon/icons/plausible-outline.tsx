import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const PlausibleOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='22'
    viewBox='0 0 18 22'
    fill='none'
    {...props}
  >
    <circle cx='17' cy='17' r='17' fill='#F3F5FB' />
    <path
      d='M25.5914 11.7969H7.86796C7.44685 11.7969 7.10547 12.1375 7.10547 12.5576V25.3951C7.10547 25.8152 7.44685 26.1558 7.86796 26.1558H25.5914C26.0125 26.1558 26.3539 25.8152 26.3539 25.3951V12.5576C26.3539 12.1375 26.0125 11.7969 25.5914 11.7969Z'
      fill='#4989F5'
    />
    <path
      d='M25.3699 11.6892H8.0701C7.5342 11.6892 7.11719 15.8269 7.11719 16.3615L16.5911 26.156H25.3699C25.9074 26.1545 26.3428 25.7202 26.3443 25.1839V12.6611C26.3427 12.1249 25.9073 11.6907 25.3699 11.6892Z'
      fill='url(#paint0_linear_18979_1524)'
    />
    <path
      d='M11.5039 14.2016H17.0034V7.00049H12.3274L11.5039 14.2016Z'
      fill='#3C4BA6'
    />
    <path
      d='M22.4995 14.2016H17V7.00049H21.6761L22.4995 14.2016ZM26.3538 8.36555L26.3606 8.3901C26.3589 8.38143 26.3556 8.37339 26.3538 8.36555Z'
      fill='#7BABF7'
    />
    <path
      d='M26.3642 8.38985L26.3574 8.36531C26.183 7.56877 25.4764 7.00076 24.6591 7.00024H21.6797L22.5025 14.2016H28.0021L26.3642 8.38985Z'
      fill='#3F51B5'
    />
    <path
      d='M7.64745 8.36548L7.64062 8.39002C7.64228 8.38136 7.64559 8.37332 7.64745 8.36548Z'
      fill='#7BABF7'
    />
    <path
      d='M7.6389 8.38961L7.64573 8.36506C7.82008 7.56853 8.52675 7.00052 9.34397 7H12.3236L11.4995 14.2013H6L7.6389 8.38961Z'
      fill='#7BABF7'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.5121 14.1997C11.5121 15.7139 10.2816 16.9415 8.76385 16.9415C7.24606 16.9415 6.01562 15.7139 6.01562 14.1997H11.5121Z'
      fill='#709BE0'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.0082 14.1997C17.0082 15.7139 15.7777 16.9415 14.2599 16.9415C12.7421 16.9415 11.5117 15.7139 11.5117 14.1997H17.0082Z'
      fill='#3C4BA6'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.5004 14.1997C22.5004 15.7139 21.2699 16.9415 19.7521 16.9415C18.2343 16.9415 17.0039 15.7139 17.0039 14.1997H22.5004Z'
      fill='#709BE0'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M27.9965 14.1997C27.9965 15.7139 26.766 16.9415 25.2482 16.9415C23.7304 16.9415 22.5 15.7139 22.5 14.1997H27.9965Z'
      fill='#3C4BA6'
    />
    <path
      d='M25.2503 21.6282C25.2406 21.4976 25.2244 21.3784 25.2015 21.2262H22.2036C22.2036 21.6445 22.2036 22.1009 22.202 22.5194H23.9387C23.9018 22.7145 23.8266 22.9003 23.7175 23.0663C23.6084 23.2323 23.4675 23.3751 23.3029 23.4866C23.3029 23.4866 23.3029 23.4794 23.3017 23.4792C23.0891 23.6184 22.8496 23.7117 22.5987 23.7529C22.3472 23.7988 22.0892 23.7977 21.8381 23.7496C21.5831 23.697 21.3416 23.5926 21.1287 23.4429C20.8145 23.2206 20.5721 22.9116 20.4314 22.5539C20.4206 22.526 20.4107 22.498 20.4005 22.4695V22.4664L20.4032 22.4644C20.2666 22.0643 20.2662 21.6304 20.4022 21.2301C20.498 20.9493 20.6556 20.6934 20.8635 20.4813C21.3511 19.9781 22.0797 19.7888 22.7515 19.9908C23.0091 20.0697 23.2444 20.2079 23.4385 20.3943L24.0245 19.8097C24.1278 19.7056 24.2351 19.6047 24.3346 19.497C24.0375 19.2206 23.6888 19.0051 23.3083 18.863C22.6158 18.6125 21.8583 18.6059 21.1616 18.8442C21.1373 18.8525 21.1132 18.8611 21.0892 18.87C20.3376 19.1519 19.7192 19.7048 19.3563 20.4195C19.2281 20.6724 19.1348 20.9415 19.0788 21.2194C18.7469 22.8648 19.7533 24.4844 21.3781 24.9197C21.9092 25.0617 22.4738 25.0582 23.0091 24.9369C23.4954 24.8273 23.9451 24.5942 24.3145 24.2601C24.6999 23.9064 24.9761 23.4351 25.1209 22.9344C25.2419 22.5102 25.2857 22.0678 25.2503 21.6282Z'
      fill='white'
    />
    <defs>
      <linearGradient
        id='paint0_linear_18979_1524'
        x1='7.11719'
        y1='18.9225'
        x2='26.3441'
        y2='18.9225'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0.03' stop-color='#4079D8' />
        <stop offset='1' stop-color='#4989F5' />
      </linearGradient>
    </defs>
  </svg>
)

export default PlausibleOutline