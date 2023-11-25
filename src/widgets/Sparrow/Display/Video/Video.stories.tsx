import React from 'react';
import { Video } from './Video';
import { argTypes, defaultValues, title } from './config';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title,
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes,
};

const containerStyle = {
  width: '640px',
  height: '480px'
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args:any) => <div style={containerStyle} ><Video {...args} /></div>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = defaultValues;
