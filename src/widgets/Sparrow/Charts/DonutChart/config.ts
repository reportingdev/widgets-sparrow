import { widgetDataGenerator } from "@reportingdev/widget-utils";

export const title = "Sparrow/Charts/DonutChart";

export const argTypes = {
  data: {
    description: 'Data to be used in the chart',
  },
  loading: {
    description: 'Whether the chart is currently loading data',
    control: 'boolean',
  },
  title: {
    description: 'The title of the chart',
    control: 'text',
    table: {
      category: 'Chart Title'
    }
  },
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
  onClick: {
    description: 'Callback function when the chart is clicked',
    action: 'onClick',
  },
  arcWidth: {
    description: 'Width of the arcs in the chart',
    control: 'number',
    table: {
      category: 'Data Settings'
    }
  },
  barOpacity: {
    description: 'Opacity of the bars in the chart',
    control: 'number',
    table: {
      category: 'Data Settings'
    }
  },
  padAngle: {
    description: 'Padding angle between segments in the chart',
    control: 'number',
    table: {
      category: 'Data Settings'
    }
  },
  animationDuration: {
    description: 'Duration of chart animation in milliseconds',
    control: 'number',
    table: {
      category: 'Animation Settings'
    }
  },
  showTooltip: {
    description: 'Whether to show tooltips on data points',
    control: 'boolean',
    table: {
      category: 'Tooltip Settings'
    }
  },
  showCenterLabel: {
    description: 'Whether to show label in the center of the chart',
    control: 'boolean',
    table: {
      category: 'Center Label Settings'
    }
  },
  showLegend: {
    description: 'Whether to show legend of the chart',
    control: 'boolean',
    table: {
      category: 'Legend Settings'
    }
  },
  labelPosition: {
    description: 'Position of the label, can be "top", "bottom", "left", or "right"',
    control: 'select',
    options: {Top: 'top', Bottom: 'bottom'},
    table: {
      category: 'Legend Settings'
    }
  },
  labelAlignment: {
    description: 'Alignment of the label, can be "left", "right", or "center"',
    control: 'select',
    options: {Left: 'left', Center: 'center', Right: 'right'},
    table: {
      category: 'Legend Settings'
    }
  },
};

const dummyData = widgetDataGenerator(5, true, false);
export const defaultValues = {
  data: dummyData,
  loading: false,
  title: 'My Chart',
  titleAlignment: 'center',
  onClick: () => { },
  arcWidth: 30,
  barOpacity: 0.7,
  padAngle: 0.05,
  animationDuration: 2000,
  showTooltip: true,
  showCenterLabel: true,
  showLegend: true,
  labelPosition: 'bottom',
  labelAlignment: 'center'
};

export const widgetConfig = {
  data: true,
  dimension: false,
  changeRate: false,
  action: false,
  actionFields: {},
  defaultSize: '4:4',
  previewImage: 'https://storage.googleapis.com/sm-development-sparrow-api-public-00e31609/logos/donut-chart.svg'
};