import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const WooCommerceDisabled: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='30'
    height='18'
    viewBox='0 0 30 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.78422 0H27.2037C28.749 0 30 1.22592 30 2.74043V11.875C30 13.3894 28.749 14.6154 27.2036 14.6154H18.4465L19.6485 17.5L14.3622 14.6154H2.79676C1.2513 14.6154 8.83093e-05 13.3895 8.83093e-05 11.875V2.74043C-0.0120992 1.23797 1.23876 0 2.78434 0H2.78422Z'
      fill='white'
    />
    <path
      d='M1.45397 2.10047C1.61995 1.88003 1.86886 1.76396 2.20081 1.74076C2.80537 1.69438 3.14918 1.9728 3.23222 2.57624C3.59972 5.00138 4.00276 7.05512 4.4295 8.73767L7.02568 3.89909C7.26285 3.4581 7.55915 3.22607 7.9148 3.20287C8.43655 3.16809 8.75665 3.49289 8.88697 4.1775C9.18327 5.72079 9.56262 7.03193 10.0132 8.14582C10.3214 5.19852 10.8431 3.07521 11.578 1.76396C11.7559 1.43915 12.0166 1.2767 12.3604 1.25339C12.6332 1.2302 12.8822 1.31137 13.1073 1.48554C13.3326 1.65948 13.4511 1.88003 13.4748 2.14685C13.4866 2.3558 13.4511 2.52974 13.3563 2.7038C12.8939 3.53927 12.5146 4.94329 12.2064 6.89255C11.91 8.78405 11.8033 10.2576 11.8745 11.3136C11.8982 11.6036 11.8508 11.8588 11.7322 12.0793C11.5899 12.3347 11.3765 12.4738 11.1039 12.497C10.7957 12.5202 10.4756 12.3811 10.1674 12.0678C9.06491 10.9655 8.18752 9.31781 7.54753 7.1247C6.77688 8.60989 6.20786 9.72378 5.84048 10.4664C5.14103 11.7776 4.54831 12.4506 4.05038 12.4854C3.73027 12.5086 3.45755 12.2417 3.22049 11.6849C2.61593 10.1647 1.96387 7.22906 1.26441 2.87785C1.21702 2.57624 1.28811 2.30931 1.45408 2.10047H1.45397ZM26.9305 3.92217C26.5036 3.19117 25.8754 2.75018 25.0338 2.57613C24.8085 2.52974 24.5952 2.50655 24.3935 2.50655C23.2555 2.50655 22.3308 3.08669 21.6077 4.24708C20.9913 5.23331 20.683 6.32412 20.683 7.51919C20.683 8.41264 20.8727 9.17832 21.252 9.81666C21.6789 10.5477 22.3071 10.9885 23.1488 11.1627C23.374 11.2091 23.5873 11.2323 23.789 11.2323C24.9389 11.2323 25.8634 10.6521 26.5748 9.49175C27.1912 8.49381 27.4995 7.40311 27.4995 6.20805C27.5114 5.30299 27.3098 4.5488 26.9305 3.92217ZM25.4368 7.13629C25.2708 7.90208 24.9744 8.47062 24.5357 8.85363C24.192 9.15535 23.8719 9.28291 23.5756 9.22493C23.291 9.16695 23.0539 8.92321 22.8762 8.47073C22.7339 8.11103 22.6628 7.75133 22.6628 7.41482C22.6628 7.1247 22.6865 6.83468 22.7457 6.56775C22.8525 6.09209 23.054 5.62791 23.374 5.18692C23.7653 4.61838 24.1802 4.38634 24.6069 4.46752C24.8915 4.5255 25.1287 4.76924 25.3064 5.22182C25.4486 5.58152 25.5197 5.94123 25.5197 6.27773C25.5197 6.57934 25.496 6.86947 25.4368 7.13629ZM19.5093 3.92217C19.0825 3.19117 18.4424 2.75018 17.6126 2.57613C17.3874 2.52974 17.174 2.50655 16.9724 2.50655C15.8343 2.50655 14.9097 3.08669 14.1865 4.24708C13.5701 5.23331 13.2619 6.32412 13.2619 7.51919C13.2619 8.41264 13.4515 9.17832 13.8309 9.81666C14.2577 10.5477 14.886 10.9885 15.7276 11.1627C15.9528 11.2091 16.1662 11.2323 16.3678 11.2323C17.5177 11.2323 18.4423 10.6521 19.1537 9.49175C19.7701 8.49381 20.0783 7.40311 20.0783 6.20805C20.0783 5.30299 19.8887 4.5488 19.5093 3.92217ZM18.0038 7.13629C17.8378 7.90208 17.5414 8.47062 17.1027 8.85363C16.759 9.15535 16.4389 9.28291 16.1426 9.22493C15.858 9.16695 15.6209 8.92321 15.4432 8.47073C15.3009 8.11103 15.2298 7.75133 15.2298 7.41482C15.2298 7.1247 15.2535 6.83468 15.3127 6.56775C15.4195 6.09209 15.621 5.62791 15.941 5.18692C16.3323 4.61838 16.7472 4.38634 17.1739 4.46752C17.4585 4.5255 17.6956 4.76924 17.8734 5.22182C18.0156 5.58152 18.0867 5.94123 18.0867 6.27773C18.0986 6.57934 18.063 6.86947 18.0038 7.13629Z'
      fill='#E0E6EE'
    />
  </svg>
)

export default WooCommerceDisabled
