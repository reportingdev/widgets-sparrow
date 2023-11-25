import { widgetDataGenerator } from "@reportingdev/widget-utils";
import { DATE_FORMAT_OPTIONS } from "../sparrow/Chart/constants";



export const title = "Sparrow/Charts/LineChart";

export const argTypes = {
  data: { control: 'object', description: 'Data for the chart' },
  loading: { control: 'boolean', description: 'Loading state of the chart' },
  onClick: { action: 'clicked', description: 'Handler for bar click events' },
  title: { control: 'text', description: 'Title of the chart', table: {category: "Chart Title"}  },
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
  lineOpacity: { control: 'number', description: 'Opacity of the lines', table: {category: "Data Settings"} },
  showXAxis: { control: 'boolean', description: 'Whether to show the X Axis or not', table: {category: "Axis Settings"}  },
  XAxisFontSize: { control: 'text', description: 'Font size for the X Axis', table: {category: "Axis Settings"}  },
  XAxisLabelSpace: { control: 'number', description: 'Space between labels in the X Axis', table: {category: "Axis Settings"}  },
  showYAxis: { control: 'boolean', description: 'Whether to show the Y Axis or not', table: {category: "Axis Settings"}  },
  YAxisFontSize: { control: 'text', description: 'Font size for the Y Axis', table: {category: "Axis Settings"}  },
  YAxisLabelSpace: { control: 'number', description: 'Space between labels in the Y Axis', table: {category: "Axis Settings"}  },
  yAxisPaddingPercentage: { control: 'number', description: 'Percentage to extend the Y-axis above the maximum data point. E.g., 0.2 adds a fifth of the max value as padding to the top.', table: {category: "Axis Settings"}  },
  axisColor: { control: 'color', description: 'Color for the labels', table: {category: "Axis Settings"} },
  animationDuration: { control: 'number', description: 'Duration of the animation', table: {category: "Animation Settings"}  },
  animationStepDelay: { control: 'number', description: 'Delay between animation steps', table: {category: "Animation Settings"}  },
  showTooltip: { control: 'boolean', description: 'Whether to show the tooltip or not', table: {category: "Tooltip Settings"}  },
  formatTooltipTitle: { control: 'select', options:DATE_FORMAT_OPTIONS, description: 'how the title in the tooltip should be formatted', table: {category: "Tooltip Settings"}  },
  formatXAxisLabel: { control: 'select', options:DATE_FORMAT_OPTIONS, description: 'how the title in the tooltip should be formatted', table: {category: "Axis Settings"}  },
  keepTooltipInsideContainer: { control: 'boolean', description: 'Whether to keep tooltip inside container or not', table: {category: "Tooltip Settings"}  },
  showLegend: { control: 'boolean', description: 'Whether to show labels or not', table: {category: "Legend Settings"}  },
  labelPosition: { control: 'select', options:['top','bottom'], description: 'Position of the labels', table: {category: "Legend Settings"}  },
  labelAlignment: { control: 'select', options:['left','center','right'], description: 'Alignment of the labels', table: {category: "Legend Settings"}  },
};

const dummyData = widgetDataGenerator(2, true, false);

export const defaultValues = {
  data: dummyData,
  loading: false,
  onClick: ()=>{},
  title: "My new chart",
  titleAlignment: 'left',
  lineOpacity: 0.7,
  showXAxis: true,
  XAxisFontSize: '11px',
  axisColor: '#7E8B9D',
  XAxisLabelSpace: 60,
  showYAxis: true,
  YAxisFontSize: '11px',
  YAxisLabelSpace: 40,
  yAxisPaddingPercentage: 0.2,
  animationDuration: 2000,
  animationStepDelay: 50,
  showTooltip: true,
  formatTooltipTitle: 'none',
  formatXAxisLabel: 'none',
  keepTooltipInsideContainer: false,
  showLegend: true,
  labelPosition: 'bottom',
  labelAlignment: 'right'
};

export const widgetConfig = {
  data: true,
  dimension: true,
  changeRate: false,
  action: false,
  defaultSize: '4:2',
  previewImage: 'https://storage.googleapis.com/sm-development-sparrow-api-public-00e31609/logos/line-chart.svg'
};