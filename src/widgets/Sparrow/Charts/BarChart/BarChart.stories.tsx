import React from "react";
import { BarChart } from "./BarChart";
import { argTypes, title } from "./config";
import { defaultValues } from "../AreaChart/config";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title,
  component: BarChart,
  argTypes,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => (<div style={{width: '70%', height: '400px', border: '2px solid grey'}}><BarChart {...args} /></div>);

export const Primary = Template.bind({});

Primary.args = defaultValues;
