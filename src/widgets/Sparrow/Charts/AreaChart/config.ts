import { widgetDataGenerator } from "@reportingdev/widget-utils";
import { DATE_FORMAT_OPTIONS } from "../sparrow/Chart/constants";



export const title = "Sparrow/Charts/AreaChart";

export const argTypes = {
  data: { control: 'object', description: 'Data for the chart' },
  loading: { control: 'boolean', description: 'Loading state of the chart' },
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
  lineOpacity: { control: 'number', description: 'Opacity of the lines', table: {category: "Chart Style"}  },
  showXAxis: { control: 'boolean', description: 'Whether to show the X Axis or not', table: {category: "Chart Axes"} },
  XAxisFontSize: { control: 'text', description: 'Font size for the X Axis', table: {category: "Chart Axes"}  },
  XAxisLabelSpace: { control: 'number', description: 'Space between labels in the X Axis', table: {category: "Chart Axes"} },
  showYAxis: { control: 'boolean', description: 'Whether to show the Y Axis or not', table: {category: "Chart Axes"} },
  YAxisFontSize: { control: 'text', description: 'Font size for the Y Axis', table: {category: "Chart Axes"} },
  YAxisLabelSpace: { control: 'number', description: 'Space between labels in the Y Axis', table: {category: "Chart Axes"} },
  animationDuration: { control: 'number', description: 'Duration of the animation', table: {category: "Chart Animation"} },
  animationStepDelay: { control: 'number', description: 'Delay between animation steps', table: {category: "Chart Animation"} },
  showTooltip: { control: 'boolean', description: 'Whether to show the tooltip or not', table: {category: "Chart Tooltip"} },
  formatTooltipTitle: { control: 'select', options:DATE_FORMAT_OPTIONS, description: 'how the title in the tooltip should be formatted', table: {category: "Chart Tooltip"} },
  formatXAxisLabel: { control: 'select', options:DATE_FORMAT_OPTIONS, description: 'how the labels shown on the x axis should be formatted (assuming date values)', table: {category: "Chart Axes"} },
  keepTooltipInsideContainer: { control: 'boolean', description: 'Whether to keep tooltip inside container or not', table: {category: "Chart Tooltip"} },
  axisColor: { control: 'color', description: 'Color for the labels', table: {category: "Chart Axes"} },
  showLegend: { control: 'boolean', description: 'Whether to show labels or not', table: {category: "Chart Legend"} },
  labelPosition: { control: 'select', options:['top','bottom'], description: 'Position of the labels', table: {category: "Chart Legend"} },
  labelAlignment: { control: 'select', options:['left','center','right'], description: 'Alignment of the labels', table: {category: "Chart Legend"} },
}
const dummyData = widgetDataGenerator(1, true, false);

export const defaultValues = {
  data: dummyData,
  loading: false,
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
  labelPosition: 'bottom',
  labelAlignment: 'right',
};

export const widgetConfig = {
  data: true,
  dimension: true,
  changeRate: false,
  action: false,
  variables: {},
  settingsOrder: {
    "Chart Title": ['title', 'titleAlignment'],
    "Chart Style": ['lineOpacity'],
    "Chart Axes": ['showXAxis', 'XAxisFontSize', 'XAxisLabelSpace', 'showYAxis', 'YAxisFontSize', 'YAxisLabelSpace', ],
    "Chart Tooltip": ['showTooltip', 'formatTooltipTitle'],
    "Chart Legend": ['showLegend', 'labelPosition', 'labelAlignment'],
    "Chart Animation": ['animationDuration', 'animationStepDelay'],
  },
  previewImage: 'https://storage.googleapis.com/sm-development-sparrow-api-public-00e31609/logos/area-chart.svg' 
};