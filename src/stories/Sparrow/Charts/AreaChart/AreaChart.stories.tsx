import React from "react";
import { widgetDataGenerator } from "../../../utils/generators";
import { AreaChart } from "./AreaChart";
import { DATE_FORMAT_OPTIONS } from "../sparrow/Chart/constants";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Sparrow/Charts/AreaChart",
  component: AreaChart,
  widgetConfig: {
    data: true,
    changeRate: false,
    action: false,
    actionFields: {},
    defaultSize: '4:2',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    data: { control: 'object', description: 'Data for the chart' },
    loading: { control: 'boolean', description: 'Loading state of the chart' },
    onClick: { action: 'clicked', description: 'Handler for chart click events' },
    title: { control: 'text', description: 'Title of the chart', table: {category: "Chart Title"} },
    titleAlignment: {
      description: 'Alignment of the title. Can be "left", "right", or "center"', 
      control: 'select',
      options: {
        Left: 'left',
        Center: 'center',
        Right: 'right'
      },
      table: {
        category: 'Chart Title'
      }
    },
    lineOpacity: { control: 'number', description: 'Opacity of the lines', table: {category: "Data Settings"}  },
    showXAxis: { control: 'boolean', description: 'Whether to show the X Axis or not', table: {category: "Axis Settings"} },
    XAxisFontSize: { control: 'text', description: 'Font size for the X Axis', table: {category: "Axis Settings"}  },
    XAxisLabelSpace: { control: 'number', description: 'Space between labels in the X Axis', table: {category: "Axis Settings"} },
    showYAxis: { control: 'boolean', description: 'Whether to show the Y Axis or not', table: {category: "Axis Settings"} },
    YAxisFontSize: { control: 'text', description: 'Font size for the Y Axis', table: {category: "Axis Settings"} },
    YAxisLabelSpace: { control: 'number', description: 'Space between labels in the Y Axis', table: {category: "Axis Settings"} },
    animationDuration: { control: 'number', description: 'Duration of the animation', table: {category: "Animation Settings"} },
    animationStepDelay: { control: 'number', description: 'Delay between animation steps', table: {category: "Animation Settings"} },
    showTooltip: { control: 'boolean', description: 'Whether to show the tooltip or not', table: {category: "Tooltip Settings"} },
    formatTooltipTitle: { control: 'select', options:DATE_FORMAT_OPTIONS, description: 'how the title in the tooltip should be formatted', table: {category: "Tooltip Settings"} },
    formatXAxisLabel: { control: 'select', options:DATE_FORMAT_OPTIONS, description: 'how the labels shown on the x axis should be formatted (assuming date values)', table: {category: "Axis Settings"} },
    keepTooltipInsideContainer: { control: 'boolean', description: 'Whether to keep tooltip inside container or not', table: {category: "Tooltip Settings"} },
    axisColor: { control: 'color', description: 'Color for the labels', table: {category: "Axis Settings"} },
    showLegend: { control: 'boolean', description: 'Whether to show labels or not', table: {category: "Legend Settings"} },
    labelPosition: { control: 'select', options:['top','bottom'], description: 'Position of the labels', table: {category: "Legend Settings"} },
    labelAlignment: { control: 'select', options:['left','center','right'], description: 'Alignment of the labels', table: {category: "Legend Settings"} },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => (<div style={{width: '70%', height: '400px', border: '2px solid grey', padding: '24px'}}><AreaChart {...args} /></div>);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const dummyData = widgetDataGenerator(1, true, false);
Primary.args = {
  data: dummyData,
  loading: false,
  onClick: ()=>{},
  title: "My Chart",
  titleAlignment: 'left',
  lineOpacity: 0.7,
  showXAxis: true,
  XAxisFontSize: '11px',
  XAxisLabelSpace: 60,
  showYAxis: true,
  YAxisFontSize: '11px',
  YAxisLabelSpace: 40,
  animationDuration: 2000,
  animationStepDelay: 50,
  showTooltip: true,
  formatTooltipTitle: 'none', //'Full Month, Day & Year',
  formatXAxisLabel: 'none', //'Full Month, Day & Year',
  keepTooltipInsideContainer: false,
  showLegend: true,
  axisColor: "#7E8B9D",
  labelPosition: 'top',
  labelAlignment: 'right'
};
