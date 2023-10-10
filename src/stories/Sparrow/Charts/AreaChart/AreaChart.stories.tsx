import { AreaChart } from "./AreaChart";
import { WidgetWrapper } from "@reportingdev/widget-utils";
import { title, argTypes, defaultValues } from './config';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: title,
  component: AreaChart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => WidgetWrapper(AreaChart, args)

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = defaultValues;
