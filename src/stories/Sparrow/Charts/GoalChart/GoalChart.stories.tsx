import React from "react";
import { GoalChart } from "./GoalChart";
import { argTypes, defaultValues, title } from "./config";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title,
  component: GoalChart,
  argTypes,
};

const Template = (args: any) => (<GoalChart {...args} />);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args


Primary.args = defaultValues;
