import React from "react";
import { widgetDataGenerator } from "../../../utils/generators";
//import WidgetWrapper from "../../../../Gridstack/Gridstack";
import { CurveChart } from "./CurveChart";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Sparrow/Charts/CurveChart",
  component: CurveChart,
  widgetConfig: {
    data: true,
    changeRate: false,
    action: false,
    actionFields: {},
    defaultSize: '4:4',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    data: {
      control: { type: 'object' },
      description: 'Data for the chart.',
      table: {
        category: 'Internal',
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state for the chart. If true, the chart may display a loading animation or message.',
      table: {
        category: 'Internal',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function when the chart is clicked.',
      table: {
        category: 'Internal',
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Title of the chart.',
      table: {
        category: 'Title Settings',
      },
    },
    titleAlignment: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
      description: 'Alignment of the chart title.',
      table: {
        category: 'Title Settings',
      },
    },
    animationDuration: {
      control: { type: 'number' },
      description: 'Duration of the chart animation in milliseconds.',
      table: {
        category: 'Chart Settings',
      },
    },
    showXAxis: {
      control: { type: 'boolean' },
      description: 'Show or hide the X-axis of the chart.',
      table: {
        category: 'Chart Settings',
      },
    },
    showTooltip: {
      control: { type: 'boolean' },
      description: 'Show or hide the chart tooltip on hover.',
      table: {
        category: 'Chart Settings',
      },
    },
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => (<div style={{ width: '70%', height: '400px', border: '2px solid grey' }}><CurveChart {...args} /></div>);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const dummyData = widgetDataGenerator(2, true, false);
dummyData.dimension = dummyData.datasets[1];
dummyData.dimension.label = 'Organizations'
dummyData.datasets[0].label = 'Your Campaign'
dummyData.datasets[0].data = [50]
Primary.args = {
  data: dummyData,
  loading: false,
  onClick: ()=>{},
  title: 'My Chart',
  titleAlignment: 'center',
  animationDuration: 3000,
  showXAxis: true,
  showTooltip: true,
};
