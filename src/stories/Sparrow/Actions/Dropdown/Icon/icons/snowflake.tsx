import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const Snowflake: FC<IconProps> = ({ className = '', ...props }: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clip-path='url(#clip0_266_18898)'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M23.2694 10.3563L20.4265 11.9919L23.2694 13.6137C23.4394 13.7118 23.5883 13.8424 23.7078 13.998C23.8273 14.1536 23.9149 14.3312 23.9656 14.5206C24.0163 14.71 24.0292 14.9075 24.0035 15.1019C23.9777 15.2963 23.9139 15.4837 23.8157 15.6534C23.7174 15.8232 23.5866 15.9719 23.4308 16.0912C23.2749 16.2105 23.0971 16.298 22.9074 16.3486C22.7177 16.3993 22.5199 16.4121 22.3252 16.3864C22.1305 16.3607 21.9428 16.297 21.7728 16.1989L16.6791 13.269C16.4457 13.1341 16.253 12.9388 16.1215 12.7037C15.9899 12.4687 15.9244 12.2025 15.9317 11.9333C15.9357 11.8167 15.9537 11.7009 15.9852 11.5886C16.0895 11.2118 16.3373 10.8907 16.6757 10.6941L21.7694 7.77451C21.9401 7.67598 22.1287 7.61205 22.3242 7.58636C22.5197 7.56067 22.7184 7.57373 22.9089 7.6248C23.0993 7.67587 23.2778 7.76393 23.4342 7.88396C23.5905 8.00399 23.7216 8.15362 23.82 8.3243C23.9188 8.49349 23.9829 8.68059 24.0087 8.87473C24.0344 9.06887 24.0213 9.26618 23.9701 9.45522C23.9189 9.64427 23.8305 9.82126 23.7102 9.97594C23.59 10.1306 23.4401 10.2599 23.2694 10.3563ZM20.5784 18.2843L15.4864 15.3596C15.2586 15.229 15.0005 15.1603 14.7378 15.1602C14.4752 15.16 14.2171 15.2286 13.9891 15.3589C13.7612 15.4893 13.5714 15.6769 13.4386 15.9032C13.3058 16.1294 13.2346 16.3865 13.2321 16.6487V22.4913C13.2453 22.8795 13.409 23.2474 13.6887 23.5174C13.9684 23.7873 14.3422 23.9383 14.7312 23.9383C15.1202 23.9383 15.494 23.7873 15.7737 23.5174C16.0534 23.2474 16.2171 22.8795 16.2303 22.4913V19.2167L19.0801 20.8523C19.2501 20.9505 19.4378 21.0144 19.6325 21.0402C19.8273 21.0659 20.0252 21.0532 20.2149 21.0026C20.4047 20.952 20.5826 20.8646 20.7386 20.7454C20.8945 20.6262 21.0254 20.4774 21.1238 20.3077C21.2222 20.1379 21.2861 19.9505 21.3119 19.7561C21.3378 19.5617 21.325 19.3641 21.2744 19.1746C21.2237 18.9851 21.1362 18.8074 21.0168 18.6517C20.8973 18.496 20.7484 18.3653 20.5784 18.2671V18.2843ZM14.7096 12.5692L12.5865 14.6633C12.5139 14.7307 12.4198 14.7704 12.3207 14.7753H11.6976C11.5988 14.7694 11.505 14.7298 11.4318 14.6633L9.32076 12.5623C9.25472 12.4904 9.21569 12.3978 9.21029 12.3004V11.6799C9.21599 11.582 9.25496 11.489 9.32076 11.4162L11.4318 9.3153C11.5051 9.24924 11.599 9.2103 11.6976 9.205H12.3207C12.4195 9.2096 12.5136 9.24863 12.5865 9.3153L14.7027 11.4162C14.768 11.4892 14.8064 11.5822 14.8115 11.6799V12.3004C14.8067 12.3976 14.7683 12.4902 14.7027 12.5623L14.7096 12.5692ZM13.0181 11.9867C13.0099 11.8862 12.9679 11.7915 12.899 11.7178L12.2862 11.1129C12.2128 11.047 12.119 11.008 12.0204 11.0026H11.9979C11.8998 11.0077 11.8064 11.0467 11.7338 11.1129L11.1211 11.7178C11.0553 11.7918 11.0169 11.8861 11.0123 11.985V12.0074C11.0167 12.1047 11.0552 12.1975 11.1211 12.2694L11.7373 12.8726C11.81 12.9385 11.9033 12.9775 12.0014 12.9829H12.0238C12.1224 12.9774 12.2162 12.9385 12.2896 12.8726L12.9024 12.2642C12.9686 12.1922 13.0082 12.0997 13.0146 12.0022L13.0181 11.9867ZM3.43995 5.69943L8.53366 8.61557C8.76173 8.74606 9.02002 8.81471 9.28288 8.81471C9.54574 8.8147 9.80403 8.74604 10.0321 8.61554C10.2602 8.48504 10.4501 8.29725 10.583 8.0708C10.7159 7.84435 10.7871 7.58713 10.7897 7.32468V1.48724C10.7765 1.09904 10.6128 0.731142 10.3331 0.461185C10.0534 0.191228 9.67956 0.0403267 9.29055 0.0403267C8.90154 0.0403267 8.52775 0.191228 8.24805 0.461185C7.96835 0.731142 7.80463 1.09904 7.79144 1.48724V4.76186L4.9382 3.12455C4.76819 3.02632 4.58047 2.96249 4.38576 2.9367C4.19105 2.91091 3.99316 2.92366 3.80338 2.97423C3.61361 3.02481 3.43567 3.11221 3.27972 3.23144C3.12377 3.35068 2.99288 3.49942 2.8945 3.66917C2.79612 3.83892 2.73219 4.02635 2.70636 4.22077C2.68053 4.41518 2.69331 4.61278 2.74396 4.80226C2.79461 4.99175 2.88214 5.16942 3.00156 5.32513C3.12098 5.48084 3.26994 5.61155 3.43995 5.70977V5.69943ZM14.6182 8.81549C14.9189 8.83924 15.2199 8.77133 15.4812 8.62074L20.5732 5.69081C20.7432 5.59259 20.8922 5.46189 21.0116 5.30618C21.131 5.15047 21.2185 4.97279 21.2692 4.78331C21.3198 4.59382 21.3326 4.39622 21.3068 4.20181C21.2809 4.00739 21.217 3.81996 21.1186 3.65021C21.0203 3.48046 20.8894 3.33172 20.7334 3.21248C20.5775 3.09325 20.3995 3.00585 20.2097 2.95527C19.8265 2.85314 19.4183 2.90721 19.0749 3.10559L16.2251 4.75669V1.48207C16.212 1.09387 16.0482 0.725972 15.7685 0.456014C15.4888 0.186057 15.115 0.0351563 14.726 0.0351562C14.337 0.0351563 13.9632 0.186057 13.6835 0.456014C13.4038 0.725972 13.2401 1.09387 13.2269 1.48207V7.32468C13.2264 7.70294 13.3698 8.06728 13.6281 8.34403C13.8864 8.62077 14.2402 8.78928 14.6182 8.81549ZM9.40361 15.1648C9.10277 15.1404 8.80165 15.2083 8.54056 15.3596L3.43995 18.2774C3.0966 18.4758 2.84625 18.8022 2.74396 19.1849C2.64167 19.5676 2.69582 19.9752 2.8945 20.318C3.09318 20.6609 3.42012 20.9108 3.80338 21.013C4.18665 21.1151 4.59486 21.061 4.9382 20.8626L7.79144 19.2271V22.5017C7.80463 22.8899 7.96835 23.2578 8.24805 23.5277C8.52775 23.7977 8.90154 23.9486 9.29055 23.9486C9.67956 23.9486 10.0534 23.7977 10.3331 23.5277C10.6128 23.2578 10.7765 22.8899 10.7897 22.5017V16.6487C10.7889 16.2724 10.6456 15.9102 10.3885 15.635C10.1314 15.3597 9.77958 15.1918 9.40361 15.1648ZM8.02273 12.4296C8.12106 12.1068 8.10624 11.7601 7.98073 11.4468C7.85521 11.1335 7.62649 10.8722 7.33229 10.7062L2.24376 7.77795C1.9001 7.58141 1.49254 7.52855 1.11 7.6309C0.727456 7.73326 0.400976 7.98251 0.201788 8.3243C0.103175 8.49345 0.0391305 8.68044 0.0133592 8.87446C-0.012412 9.06848 0.000601287 9.26567 0.0516465 9.45464C0.102692 9.64361 0.190755 9.82059 0.310744 9.97536C0.430732 10.1301 0.580263 10.2596 0.750686 10.3563L3.59357 11.9919L0.750686 13.6137C0.580681 13.7116 0.431649 13.8419 0.312102 13.9973C0.192554 14.1527 0.104831 14.3301 0.0539408 14.5194C0.00305096 14.7086 -0.0100089 14.906 0.0155067 15.1003C0.0410224 15.2946 0.104614 15.4819 0.202651 15.6517C0.300687 15.8214 0.431249 15.9702 0.586881 16.0896C0.742514 16.209 0.920169 16.2966 1.1097 16.3474C1.29924 16.3982 1.49694 16.4112 1.69152 16.3858C1.8861 16.3603 2.07375 16.2968 2.24376 16.1989L7.33229 13.269C7.65998 13.0863 7.90609 12.7864 8.02101 12.4296H8.02273Z'
        fill='#29B5E8'
      />
    </g>
    <defs>
      <clipPath id='clip0_266_18898'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default Snowflake