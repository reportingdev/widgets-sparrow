import React from "react";
//import WidgetWrapper from "../../../../Gridstack/Gridstack";
import { CurveChart } from "./CurveChart";
import { argTypes, defaultValues, title } from "./config";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title,
  component: CurveChart,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => (<div style={{ width: '70%', height: '400px', border: '2px solid grey' }}><CurveChart {...args} /></div>);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = defaultValues;
