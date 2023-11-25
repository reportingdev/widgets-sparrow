import { widgetDataGenerator } from "@reportingdev/widget-utils";



export const title = "Sparrow/Charts/CurveChart";

export const argTypes = {
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
};

const dummyData = widgetDataGenerator(2, true, false);
dummyData.dimension = dummyData.datasets[1];
dummyData.dimension.label = 'Organizations'
dummyData.datasets[0].label = 'Your Campaign'
dummyData.datasets[0].data = [50]
export const defaultValues = {
  data: dummyData,
  loading: false,
  onClick: ()=>{},
  title: 'My Chart',
  titleAlignment: 'center',
  animationDuration: 3000,
  showXAxis: true,
  showTooltip: true,
};

export const widgetConfig ={
  data: true,
  dimension: true,
  fieldLimit: 1,
  changeRate: false,
  action: false,
  defaultSize: '4:4',
  previewImage: 'https://storage.googleapis.com/sm-development-sparrow-api-public-00e31609/logos/bell-curve-chart.svg'
};