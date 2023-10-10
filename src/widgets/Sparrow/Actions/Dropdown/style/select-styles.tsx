// allow "any" type as also done in the react-select types tests repo
/* eslint-disable @typescript-eslint/no-explicit-any */

// https://react-select.com/styles#style-object
const SelectStyles = {
    menuPortal: (provided: any) => {
      return {
        ...provided,
        zIndex: 9999
      }
    },
    control: (provided: any, state: any): any => {
      return {
        ...provided,
        minHeight: '48px',
        borderRadius: '5px',
        padding: '5px 8px', // after considering 32px as inner container size already with a 2px 8px padding,
        backgroundColor:
          state.isDisabled === true ? '#f3f5fb' : '#ffffff',
        borderColor:
          state.isDisabled === true ? '#e0e6ee' : '#bec4cd'
      }
    },
  
    placeholder: (provided: any, state: any): any => {
      return {
        ...provided,
        width: '100%',
        color: state.isDisabled === true ? '#a2abb7' : provided.color
      }
    },
  
    option: (provided: any, state: any): any => {
      return {
        ...provided,
        fontWeight: state.isSelected === true ? 'bold' : 'normal'
      }
    },
  
    dropdownIndicator: (): any => ({
      marginLeft: '10px'
    }),
  
    indicatorSeparator: (): any => ({
      display: 'none'
    })
  }
  
  export default SelectStyles
  