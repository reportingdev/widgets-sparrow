import React from "react";
import { KPI } from "./KPI";
import { argTypes, defaultValues, title } from "./config";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title,
  component: KPI,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes,

};

const containerStyle = {
  height: '200px',
  width: '400px'
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => (<div style={containerStyle}><KPI {...args} /></div>);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = defaultValues;
