import React from 'react';
import { Header } from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Sparrow/Display/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      table: {
        category: 'Header Style'
      },
    },
    fontSize: {
      table: {
        category: 'Header Style'
      }
    },
    fontColor: {
      control: { type: 'color' },
      table: {
        category: 'Header Style'
      }
    },
    isBold: {
      table: {
        category: 'Header Style'
      }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args:any) => <Header {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  loading: false,
  text: 'Title',
  fontSize: '24px',
  fontColor: '#2C3039',
  isBold: true,
}
