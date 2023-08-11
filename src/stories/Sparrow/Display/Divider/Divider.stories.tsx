import React from 'react';
import { Divider } from './Divider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Sparrow/Display/Divider',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['solid', 'rounded', 'dashed', 'dotted']
      },
      table: {
        category: 'Divider Configuration'
      }
    },
    height: {
      table: {
        category: 'Divider Configuration'
      }
    },
    color: {
      table: {
        category: 'Divider Configuration'
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args:any) => <Divider {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  loading: false,
  type: 'solid',
  height: '3px',
  color: '#7E8B9D'
}
