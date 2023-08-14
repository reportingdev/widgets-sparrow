import React from 'react'
import { components } from 'react-select'

import DropdownArrow from './dropdown-arrow'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownIndicator: React.FC = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownArrow />
    </components.DropdownIndicator>
  )
}

export default DropdownIndicator
