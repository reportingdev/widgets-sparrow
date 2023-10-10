import React from 'react';
import { Frame } from './Frame';
import { argTypes, defaultValues, title } from './config';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title,
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args:any) => (<div style={{width: 640, height: 480}}><Frame {...args} /></div>);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = defaultValues;
