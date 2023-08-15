import React from "react";
import { widgetDataGenerator } from "../../../utils/generators";
import { GoalChart } from "./GoalChart";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Sparrow/Charts/GoalChart",
  component: GoalChart,
  widgetConfig: {
    data: true,
    changeRate: false,
    action: false,
    actionFields: {},
    defaultSize: '2:2',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    data: {
      description: 'Data to be used in the chart',
    },
    loading: {
      description: 'Whether the chart is currently loading data',
      control: 'boolean',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => (<GoalChart {...args} />);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const dummyData = widgetDataGenerator(2, true, false);
dummyData.dimension = dummyData.datasets[1];
dummyData.dimension.label = 'Organizations';
dummyData.datasets[0].label = 'Your Campaign';

Primary.args = {
  data: dummyData,
  loading: false,
  borderWidth: '5px',
  size: '100px',
  showBackground: true,
  showValue: true,
  showLabel: false,
  showPath: true,
};
