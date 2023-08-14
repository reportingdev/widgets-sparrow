import type { Theme } from 'react-select'

// allow "any" type as also done in the react-select types tests repo
/* eslint-disable @typescript-eslint/no-explicit-any */

const SelectTheme = (theme: Theme): Theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#f9fafd', // selector background color
    primary: '#f9fafd', // selected background color
    primary50: '#f3f5fb' // select click color
  }
})

export default SelectTheme
