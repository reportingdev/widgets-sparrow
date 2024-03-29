import { ICON_KEYS } from "../../../utils/icons";
import { widgetDataGenerator } from "@reportingdev/widget-utils";

export const title = "Sparrow/Charts/GoalChart";

export const argTypes = {
  data: {
    description: 'Data to be used in the chart',
    table: {
      category: 'internal'
    }
  },
  loading: {
    description: 'Whether the chart is currently loading data',
    control: 'boolean',
    table: {
      category: 'internal'
    }
  },
  borderWidth: {
    description: 'Width of the border in pixels around the chart',
    control: 'text',
    table: {
      category: 'Chart Config'
    }
  },
  size: {
    description: 'Size (in pixels) of the chart element',
    control: 'text',
    table: {
      category: 'Chart Config'
    }
  },
  showBackground: {
    description: 'Whether to show a background behind the chart',
    control: 'boolean',
    table: {
      category: 'Chart Config'
    }
  },
  variant: {
    description: 'The goal chart variant',
    control: 'select',
    options: {Progress: 'progress', 'Chroma Progress': 'chroma-progress', Icon: 'icon', Image: 'image'},
    table: {
      category: 'Chart Config'
    }
  },
  imageSrc: {
    description: 'Source URL for the image to be shown in the chart (effective only when "image" variant is selected)',
    control: 'text',
    table: {
      category: 'Image Config'
    }
  },
  imagePadding: {
    description: 'Padding (in pixels) around the image in the chart',
    control: 'text',
    table: {
      category: 'Image Config'
    }
  },
  icon: {
    options: ICON_KEYS,
    control: { type: "select" },
    description: "The Icon used in the KPI",
    table: {
      category: "Icon Config",
    },
  },
  iconFormat: {
    options: ['solid', 'outline' ],
    control: { type: "select" },
    description: "The format/style of the KPI icon",
    table: {
      category: "Icon Config",
    }
  },
  showLabel: {
    description: 'Whether to display a label alongside the chart',
    control: 'boolean',
    table: {
      category: 'Chart Config'
    }
  },
  labelColor: {
    description: 'The color of the label text',
    control: 'color',
    table: {
      category: 'Chart Config'
    }
  },
  showPath: {
    description: 'Whether to display a path in the chart',
    control: 'boolean',
    table: {
      category: 'Chart Config'
    }
  },
};

const dummyData = widgetDataGenerator(2, true, false);
dummyData.dimension = dummyData.datasets[1];
dummyData.dimension.label = 'Organizations';
dummyData.datasets[0].label = 'Your Campaign';

export const defaultValues = {
  data: dummyData,
  loading: false,
  borderWidth: '5px',
  size: '100px',
  showBackground: true,
  variant: 'progress',
  imageSrc: 'https://uploads-ssl.webflow.com/63c6e835dc1c7763baa585f4/64e546f3e0d382a4060af113_reporting-dev-icon.jpeg',
  imagePadding: '0px',
  icon: 'LightBulb',
  iconFormat: 'outline',
  showLabel: false,
  labelColor: '#2C304F',
  showPath: true,
};

export const widgetConfig = {
  data: true,
  fieldLimit: 1,
  dimension: true,
  changeRate: false,
  action: false,
  actionFields: {},
  defaultSize: '2:2',
  previewImage: 'https://storage.googleapis.com/sm-development-sparrow-api-public-00e31609/logos/goal-chart.svg'
};