import React from "react";
import PropTypes from 'prop-types';
import { actionDataGenerator } from '../../../utils/generators';

// import and export our Dropdown component
import SparrowDropdown, {
  SingleOptionType,
  OptionTypeArray,
  dropdownDefaultComponents
} from '.'
import { OptionProps } from 'react-select'

// import images for dropdown
import FacebookLogo from './images/facebook.svg'
import InstagramLogo from './images/instagram.svg'
import TwitterLogo from './images/twitter.svg'
import placeholder from './Image/images/placeholder.svg'
import Icon from './Icon'


// set options with images
const optionsWithImages: OptionTypeArray = [
  { value: 'facebook', label: 'Facebook', image: FacebookLogo },
  { value: 'instagram', label: 'Instagram', image: InstagramLogo },
  { value: 'twitter', label: 'Twitter', image: TwitterLogo }
]

export const Dropdown =({data,placeholderText, isDisabled, loading, showLabel, label, isOptionsWithImages, isSearchable, enableMultiSelect, isScrollable,isPlaceholderInvalidImage, onChange, withCustomElement, color, allSelectedLabel}:Widget)=>{

  const generateDropdownValues = (data:WidgetData) => {
    const { datasets } = data;
  
    if (!datasets || datasets.length === 0) {
      return [];
    }
  
    const labelsDataset = datasets[0].data;
    const valuesDataset = datasets.length > 1 ? datasets[1].data : datasets[0].data;
  
    return labelsDataset.map((label, index) => {
      return {
        label: label,
        value: valuesDataset[index]
      };
    });
  }
  const dropdownValues:any[] = generateDropdownValues(data);

  const [selected, setSelected] = React.useState(
    enableMultiSelect? ([] as OptionTypeArray):(null as unknown as SingleOptionType)
  )
  const handleSingleSelect = (option: SingleOptionType): void => {
    setSelected(option)
    onChange({selected: option.value});
  }
  const handleMultiSelect = (options: OptionTypeArray): void => {
    setSelected(options)
    options.forEach(ele => onChange({selected: ele.value}));
  }
  type SelectOptionProps = OptionProps<SingleOptionType, boolean>
  const CustomOption = (props: SelectOptionProps): React.ReactElement => {
    const { data, label } = props
    return (
      <dropdownDefaultComponents.Option {...(props as any)}>
        <div>
          {data?.image != null
            ? (
              <img
                className='Dropdown__optionImage'
                alt={label}
                src={data.image}
              />
              )
            : (
                ''
              )}
          <span className='Dropdown__optionLabel'>{label}</span>
          {data?.status === 'invalid' && <Icon variant='info' style={{color:color}}/>}
        </div>
      </dropdownDefaultComponents.Option>
    )
  }
  return (
    <div style={isOptionsWithImages?{width:'50%'}:{}}>
      <div style={isScrollable? {height: 100, overflow: 'auto'}:{}}>
    <SparrowDropdown
      isMulti={enableMultiSelect}
      isSearchable={isSearchable}
      name={allSelectedLabel}
      label={showLabel? label:''}
      options={isOptionsWithImages? (isPlaceholderInvalidImage?[
        ...optionsWithImages,
        {
          value: 'invalid',
          label: placeholderText,
          image: placeholder,
        }
      ]:optionsWithImages): dropdownValues}
      value={selected}
      handleSelectChange={enableMultiSelect? handleMultiSelect : handleSingleSelect}
      placeholder={placeholderText}
      isDisabled={isDisabled}
      loading={loading}
      menuPortalTarget={document.body}
      customComponents={withCustomElement? {Option: CustomOption}:{}}
        />
        </div>
      </div>
      )
  }

  Dropdown.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  placeholderText: PropTypes.string,
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  isOptionsWithImages:PropTypes.bool,
  isSearchable: PropTypes.bool,
  enableMultiSelect: PropTypes.bool,
  isScrollable: PropTypes.bool,
  isPlaceholderInvalidImage: PropTypes.bool,
  color:PropTypes.string,
  allSelectedLabel:PropTypes.string,
  withCustomElement: PropTypes.bool,
}

const sampleActionData = actionDataGenerator();

Dropdown.defaultProps = {
  data: sampleActionData,
  onChange: ()=>{},
  loading:false,
  placeholderText:'Select...',
  label:'Select a platform',
  showLabel:false,
  isOptionsWithImages: false,
  isSearchable: false,
  enableMultiSelect: false,
  isScrollable: false,
  isPlaceholderInvalidImage:false,
  color:'purple',
  allSelectedLabel:'All Selected',
  withCustomElement:false,
}

