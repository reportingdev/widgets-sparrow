// import react library
import * as React from 'react'

// import and export our Dropdown component
import { Dropdown } from './Dropdown'
import { actionDataGenerator } from '../../../utils/generators';

export default {
  title: 'Sparrow/Actions/Dropdown',
  component: Dropdown,
  widgetConfig: {
    data: true,
    changeRate: false,
    action: true,
    defaultSize: 'auto',
    actionFields: {
      selected: {
        description: 'The selected value.',
        type: 'string'
      }
    },
  },
  argTypes: {
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
    showLabel: {
      description: 'whether or not the dropdown should have label',
      table: {
        category: 'Label Settings'
      }
    },
    label: {
      description: 'The label to show above the selector',
      table: {
        category: 'Label Settings'
      }
    },
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
}
const Template = (args:any) => <Dropdown {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const defaultOptionData:WidgetData = actionDataGenerator()

Primary.args = {
  data: defaultOptionData,
  loading: false,
  placeholderText: 'Select...',
  showLabel:false,
  label:'Select a platform',
  // color:'#866cff',
  // isDisabled:false,
  //isOptionsWithImages: false,
  isSearchable: false,
  isScrollable: false,
  // enableMultiSelect: false,
  // allSelectedLabel: 'All Platforms',
  // isPlaceholderInvalidImage: false,
  // withCustomElement: false,
};



