import React from 'react';
import { Frame } from './Frame';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Sparrow/Display/iFrame',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    url: {
      description: 'the URL of the content you want to show up in the iFrame',
      table: {
        category: 'iFrame Configuration'
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args:any) => (<div style={{width: 640, height: 480}}><Frame {...args} /></div>);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  loading: false,
  url: 'https://sparrowch.art/charts/3fc5a62c-bfd2-42a0-999f-caf97e1f95f2/0a92aa70-569b-4fe5-a478-9f297d4c3e6e',
}
