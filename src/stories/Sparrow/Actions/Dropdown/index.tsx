
// import react libraries
import React, { useRef, useState } from 'react'
import Select, {
  ActionMeta,
  components as dropdownDefaultComponents
} from 'react-select'
import classnames from 'classnames'

// import custom components
import Option from './components/option'
import DropdownIndicator from './components/dropdown-indicator'
import SingleValue from './components/single-value'

// import styles
import SelectTheme from './style/select-theme'
import SelectStyles from './style/select-styles'
import './style/dropdown.css'

// create type interfaces
export interface SingleOptionType {
  label: string
  value: string | number
  image?: string
  status?: string
  imgPlaceholder?: string
}

export type ActionMetaType = {
  option: SingleOptionType
  removedValue: SingleOptionType
} & ActionMeta<SingleOptionType>

export type OptionTypeArray = SingleOptionType[]

export interface SparrowDropdownProps {
  value: null | SingleOptionType | OptionTypeArray
  name: string
  label?: string
  options: OptionTypeArray
  isSearchable?: boolean
  isMulti?: boolean
  placeholder: string
  className?: string
  menuPlacement?: 'top' | 'auto' | 'bottom'
  handleSelectChange: (
    option: OptionTypeArray | SingleOptionType,
    action: ActionMetaType
  ) => void
  isDisabled?: boolean
  loading?: boolean
  menuPortalTarget?: HTMLElement
  customComponents?: any
}

const SparrowDropdown: React.FC<SparrowDropdownProps> = (props) => {
  const selectValueRef = useRef(props.value)
  const selectContainerRef = useRef<any>()
  const [isMenuOpen, setMenuOpen] = useState(false)

  selectValueRef.current = props.value

  const selectAllOption: SingleOptionType = {
    value: '<SELECT_ALL>',
    label: `${props.name}`
  }

  const isAllOptionsSelected = (): boolean =>
    (selectValueRef.current as OptionTypeArray)?.length === props.options.length

  const isOptionSelected = (option: SingleOptionType): boolean =>
    (selectValueRef.current as OptionTypeArray)?.some(
      ({ value }: SingleOptionType) => value === option.value
    ) ?? isAllOptionsSelected()

  // adds the custom "select all" option to our multiSelect list
  const getOptionsArray = (): OptionTypeArray => {
    const { options, isMulti } = props
    const optionsList = [...options]
    if (isMulti === true) {
      optionsList.unshift(selectAllOption)
    }

    return optionsList
  }

  // returns the correct value depending on if all values are selected or not
  const getValue = (): OptionTypeArray | SingleOptionType =>
    (isAllOptionsSelected() ? [selectAllOption] : props.value) as
      | OptionTypeArray
      | SingleOptionType

  const getPlaceholder = (): any => {
    const { options, loading:isLoading, placeholder } = props
    const isImageOptions =
      options?.[0]?.image != null && options?.[0]?.image !== ''

    return isLoading === true
      ? (
        <div className='Dropdown__loading-label'>
          {isImageOptions && (
            <span className='Dropdown__loading-placeholder Dropdown__loading-placeholder--round' />
          )}
          <span className='Dropdown__loading-placeholder Dropdown__loading-placeholder--rect' />
        </div>
        )
      : (
        <span>{placeholder}</span>
        )
  }

  // handles the UI when a new element is selected
  const onSelectChange = (
    optionsList: OptionTypeArray | SingleOptionType,
    actionMeta: ActionMetaType
  ): void => {
    const { action, option, removedValue } = actionMeta
    const { handleSelectChange } = props
    if (props.isMulti !== true) {
      // invoke the handler directly when  its not muti select
      handleSelectChange(optionsList, actionMeta)
    } else if (
      action === 'select-option' &&
      option.value === selectAllOption.value
    ) {
      handleSelectChange(props.options, actionMeta)
    } else if (
      (action === 'deselect-option' &&
        option.value === selectAllOption.value) ||
      (action === 'remove-value' &&
        removedValue.value === selectAllOption.value)
    ) {
      handleSelectChange([], actionMeta)
    } else if (
      actionMeta.action === 'deselect-option' &&
      isAllOptionsSelected()
    ) {
      handleSelectChange(
        props.options.filter(({ value }) => value !== option.value),
        actionMeta
      )
    } else {
      handleSelectChange(optionsList ?? [], actionMeta)
    }
  }

  const handleMenuOpen = (): void => {
    setMenuOpen(true)
  }

  const handleMenuClose = (): void => {
    setMenuOpen(false)
  }

  const commonSelectProps = {
    className: props.className ?? '',
    hideSelectedOptions: props.isMulti === true,
    theme: SelectTheme,
    styles: SelectStyles,
    placeholder: getPlaceholder(),
    isSearchable:
      props.isMulti === true || props.isSearchable === true || false,
    isMulti: props.isMulti,
    options: getOptionsArray(),
    value: props.loading === true ? null : getValue(),
    onChange: onSelectChange,
    closeMenuOnSelect: props.isMulti !== true,
    menuPlacement: props.menuPlacement ?? 'auto',
    classNamePrefix: 'ReactSelect',
    onMenuOpen: handleMenuOpen,
    onMenuClose: handleMenuClose,
    isDisabled: props.isDisabled,
    menuPortalTarget: props.menuPortalTarget ?? null
  }

  const dropdownWrapperClasses = classnames({
    'ReactSelect--isOpen': isMenuOpen,
    'ReactSelect--isLoading': props.loading
  })

  return props.isMulti === true
    ? (
      <div ref={selectContainerRef} className={dropdownWrapperClasses}>
        {props.label != null && (
          <span className='Dropdown__label'>{props.label}</span>
        )}
        <Select
          {...commonSelectProps}
          isOptionSelected={isOptionSelected}
          components={{
            DropdownIndicator,
            Option,
            ...props.customComponents
          }}
        />
      </div>
      )
    : (
      <div ref={selectContainerRef} className={dropdownWrapperClasses}>
        {props.label != null && (
          <span className='Dropdown__label'>{props.label}</span>
        )}
        <Select
          {...commonSelectProps}
          options={getOptionsArray()}
          components={{
            DropdownIndicator,
            Option,
            SingleValue,
            ...props.customComponents
          }}
        />
      </div>
      )
}

export { dropdownDefaultComponents }

export default SparrowDropdown
