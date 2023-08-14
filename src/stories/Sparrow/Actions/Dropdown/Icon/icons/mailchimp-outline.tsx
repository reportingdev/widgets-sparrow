import React, { FC, SVGAttributes } from 'react'

type IconProps = SVGAttributes<SVGElement>

const MailchimpOutline: FC<IconProps> = ({
  className = '',
  ...props
}: IconProps) => (
  <svg
    className={`Icon ${className}`}
    width='24'
    height='27'
    viewBox='0 0 24 27'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M17.849 12.72h.514c.11-.234.11-.577 0-.967-.109-.577-.28-.967-.623-.92-.343.062-.343.514-.234 1.091.047.343.171.624.343.796zM14.825 13.234c.234.11.405.172.452.11.062-.063 0-.11-.063-.234-.109-.234-.405-.406-.623-.515-.577-.234-1.2-.171-1.715.234-.172.11-.343.28-.28.405 0 .063.062.063.108.063.11 0 .624-.234 1.2-.28.344-.016.687.108.92.217zM14.31 13.515c-.342.062-.514.171-.623.28-.109.11-.171.172-.171.234v.063h.062c.062 0 .234-.063.234-.063.452-.171.748-.171 1.029-.109.171 0 .234.063.28 0v-.109c-.015-.171-.358-.343-.81-.296zM16.819 14.544c.233.109.452.062.576-.11.063-.171-.062-.405-.28-.514-.234-.11-.452-.062-.577.11-.125.17.047.405.28.514zM18.238 13.296c-.172 0-.343.172-.343.453 0 .233.109.452.343.452.171 0 .343-.172.343-.453-.047-.233-.172-.452-.343-.452zM6.155 17.74c-.062-.063-.109-.063-.171 0h-.172c-.109 0-.234-.063-.28-.172-.047-.109-.063-.28 0-.514l.062-.11c.171-.342.405-.857.109-1.371-.234-.406-.515-.624-.92-.686a1.103 1.103 0 00-1.029.405c-.405.452-.452 1.029-.405 1.247 0 .063.062.11.109.11.062 0 .171-.063.234-.234v-.063c0-.109.062-.234.171-.405.11-.172.28-.28.452-.28.172-.063.406 0 .577.108.28.172.406.515.28.858-.17.171-.233.452-.233.748.062.515.405.749.686.795.28 0 .515-.171.515-.28.062-.094.015-.094.015-.156z'
      fill='#000'
    />
    <path
      d='M22.744 16.773c0-.062-.062-.28-.171-.623l-.234-.515c.405-.577.405-1.138.343-1.419-.063-.343-.234-.686-.515-1.029-.28-.343-.966-.686-1.824-.92l-.452-.109s0-1.091-.062-1.543a4.58 4.58 0 00-.234-1.372c-.172-.686-.515-1.31-.967-1.715 1.138-1.2 1.887-2.573 1.887-3.711 0-2.167-2.682-2.853-6.05-1.481l-.686.28S12.532 1.37 12.47 1.37C8.774-1.936-3.027 11.24.73 14.435l.795.685c-.233.577-.28 1.201-.233 1.887.109.858.576 1.715 1.247 2.401.686.624 1.59 1.03 2.51 1.03 1.481 3.43 4.849 5.472 8.778 5.596 4.225.11 7.811-1.886 9.292-5.425.11-.234.515-1.372.515-2.401.093-1.045-.483-1.435-.889-1.435zM5.407 19.455c-.11 0-.281.062-.406 0-1.247-.063-2.681-1.2-2.79-2.573-.11-1.48.623-2.619 1.995-2.915.172-.063.343-.063.577-.063.748.063 1.887.624 2.167 2.277.218 1.559-.109 3.04-1.543 3.274zm-1.42-6.392c-.857.171-1.59.623-2.057 1.31-.28-.235-.795-.687-.858-.858-.748-1.372.795-4.1 1.887-5.598 2.62-3.757 6.782-6.61 8.669-6.111.343.109 1.372 1.31 1.372 1.31s-1.934 1.09-3.711 2.572c-2.401 1.777-4.225 4.459-5.301 7.375zm13.456 5.815l.063-.062c0-.063-.063-.063-.063-.063s-1.996.28-3.882-.405c.234-.686.748-.452 1.59-.343 1.481.11 2.853-.11 3.82-.405.858-.234 1.996-.749 2.853-1.42.28.624.406 1.373.406 1.373s.233-.063.405.062c.171.11.28.343.234.92-.172 1.138-.686 1.996-1.419 2.853-.452.515-1.091.967-1.762 1.31a6.654 6.654 0 01-1.138.452c-3.087.967-6.159-.062-7.125-2.401-.063-.171-.172-.343-.172-.577-.405-1.543-.062-3.368 1.092-4.506a.416.416 0 00.109-.28c0-.11-.063-.172-.11-.234-.405-.577-1.761-1.544-1.48-3.43.171-1.372 1.372-2.277 2.447-2.23h.281c.452 0 .92.11 1.247.11.624 0 1.248-.063 1.934-.624.233-.172.405-.343.748-.406.062 0 .11-.062.28 0a.65.65 0 01.453.172c.577.405.623 1.247.686 1.933 0 .405.062 1.31.062 1.544.063.576.172.686.515.795.171.062.343.109.577.171.748.234 1.2.406 1.48.686.172.172.235.343.281.515.11.623-.514 1.419-2.058 2.167-1.715.795-3.71.967-5.13.795l-.514-.062c-1.138-.172-1.761 1.31-1.091 2.276.452.624 1.653 1.091 2.79 1.091 2.745 0 4.85-1.138 5.598-2.167l.062-.109c.063-.062 0-.109-.062-.062-.624.452-3.477 2.167-6.502 1.652 0 0-.343-.062-.686-.171-.28-.11-.795-.343-.92-.92 2.558.748 4.101 0 4.101 0zM8.883 7.933c.92-1.091 2.105-2.058 3.134-2.573.063 0 .063 0 .063.063-.063.171-.234.452-.28.686 0 .062.061.062.061.062.624-.452 1.762-.92 2.744-.966.063 0 .063.062.063.062-.172.109-.28.28-.452.452 0 0 0 .062.062.062.686 0 1.653.234 2.276.624.063 0 0 .11-.062.11-.967-.235-2.51-.406-4.163 0-1.481.342-2.572.92-3.368 1.48-.078-.015-.124-.015-.078-.062z'
      fill='#000'
    />
  </svg>
)

export default MailchimpOutline
