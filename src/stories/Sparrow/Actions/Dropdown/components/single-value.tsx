// allow "any" type as also done in the react-select types tests repo
/* eslint-disable @typescript-eslint/no-explicit-any */

// import react libraries
import React, { FC } from 'react'
import { components, OptionProps } from 'react-select'
import { SingleOptionType } from '../index'
import Image from '../Image'

type SingleValueProps = OptionProps<SingleOptionType, boolean>

// custom react-select component for showing image+text in selected field view
const SingleValue: FC<SingleValueProps> = (props: SingleValueProps) => {
  const { data } = props
  return (
    <components.SingleValue {...(props as any)}>
      <div className='Dropdown__optionContainer'>
        {data?.image != null
          ? (
            <Image
              className='Dropdown__selectedOptionImage'
              alt={data.label}
              src={data.image}
              placeholder={data.imgPlaceholder}
            />
            )
          : (
              ''
            )}
        <span className='Dropdown__optionLabel'>{data.label}</span>
      </div>
    </components.SingleValue>
  )
}

export default SingleValue
