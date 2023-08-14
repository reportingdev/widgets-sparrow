// allow "any" type as also done in the react-select types tests repo
/* eslint-disable @typescript-eslint/no-explicit-any */

// import react libraries
import React, { FC } from 'react'
import { components, OptionProps } from 'react-select'
import { SingleOptionType } from '../index'
import Image from '../Image'

type SelectOptionProps = OptionProps<SingleOptionType, boolean>

// react-select specific component -- allows us to customize the select fields
const Option: FC<SelectOptionProps> = (props: SelectOptionProps) => {
  const { data, label } = props
  return (
    <components.Option {...(props as any)}>
      <div>
        {data?.image != null
          ? (
            <Image
              className='Dropdown__optionImage'
              alt={label}
              src={data.image}
              placeholder={data.imgPlaceholder}
            />
            )
          : (
              ''
            )}
        <span className='Dropdown__optionLabel'>{label}</span>
      </div>
    </components.Option>
  )
}

export default Option
