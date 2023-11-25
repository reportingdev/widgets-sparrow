import React from "react";
import { LineChart } from "./LineChart";
import { argTypes, title } from "./config";
import { defaultValues } from "../AreaChart/config";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title,
  component: LineChart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => (<div style={{width: '70%', height: '400px', border: '2px solid grey'}}><LineChart {...args} /></div>);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = defaultValues;
