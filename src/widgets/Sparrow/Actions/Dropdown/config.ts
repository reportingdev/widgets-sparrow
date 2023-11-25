import { actionDataGenerator } from "@reportingdev/widget-utils";

export const title = "Sparrow/Actions/Dropdown";

export const argTypes = {
  data: {control: 'object'},
  onChange: { action: 'changed', description: 'Change event handler' },
  loading: {
    description: 'loading state',
    table: {
      category: 'internal'
    }
  },
  placeholderText:{
    description: 'Text shown in the dropdown before a value is selected.',
    table: {
      category: 'Dropdown Settings'
    },
  },
  // isDisabled: {
  //   description: 'whether or not the dropdown should be disabled',
  //   table: {
  //     category: 'Dropdown Settings'
  //   }
  // },
  // showLabel: {
  //   description: 'whether or not the dropdown should have label',
  //   table: {
  //     category: 'Label Settings'
  //   }
  // },
  // label: {
  //   description: 'The label to show above the selector',
  //   table: {
  //     category: 'Label Settings'
  //   }
  // },
  // color: {
  //   control: 'color',
  //   description: "the icon color",
  //   table: {
  //     category: "Dropdown Settings",
  //   },
  // },
  isSearchable: {
    description: 'Whether or not the user can search within the select input field.',
    table: {
      category: 'Dropdown Settings'
    }
  },
  isScrollable: {
    description: 'Whether or not the dropdown is a scrollable container. Useful for large option lists.',
    table: {
      category: 'Dropdown Settings'
    }
  },
  // enableMultiSelect: {
  //   description: 'is dropdown options can be selcted multible',
  //   table: {
  //     category: 'MultiSelect Settings'
  //   }
  // },
  // allSelectedLabel:{
  //   description: 'Text shown in the input field when all options are selected.',
  //   table: {
  //     category: 'Multiselect Settings'
  //   }
  // },
  // isOptionsWithImages: {
  //   description: 'is dropdown options includes images or not',
  //   table: {
  //     category: 'Dropdown Settings'
  //   }
  // },
  // withCustomElement: {
  //   description: 'Using custom options',
  //   table: {
  //     category: 'Dropdown Settings'
  //   }
  // },
}
const defaultOptionData:WidgetData = actionDataGenerator()

export const defaultValues = {
  data: defaultOptionData,
  loading: false,
  placeholderText: 'Select...',
  //showLabel:false,
  //label:'Select a platform',
  isSearchable: false,
  isScrollable: false,
  // color:'#866cff',
  // isDisabled:false,
  //isOptionsWithImages: false,
  // enableMultiSelect: false,
  // allSelectedLabel: 'All Platforms',
  // isPlaceholderInvalidImage: false,
  // withCustomElement: false,
};

export const widgetConfig = {
  data: true,
  dimension: true,
  fieldLimit: 1,
  changeRate: false,
  action: true,
  defaultSize: 'auto',
  variables: {
    selected: {
      description: 'The selected value.',
      type: 'string'
    }
  },
  hideCard: true,
  previewImage: 'https://storage.googleapis.com/sm-development-sparrow-api-public-00e31609/logos/dropdown.svg'
};