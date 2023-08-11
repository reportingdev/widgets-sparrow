import React from 'react';
import { Frame } from './Frame';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Sparrow/Display/iFrame',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    url: {
      table: {
        category: 'iFrame Configuration'
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args:any) => <Frame {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  loading: false,
  url: 'https://www.youtube.com/watch?v=G1IbRujko-A',
  altText: ''
}
