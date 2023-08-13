import React from "react";
import { widgetDataGenerator } from "../../../utils/generators";
import { ICON_KEYS } from "../../../utils/icons";
import { KPIChart } from "./KPIChart";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Sparrow/KPI/KPIChart",
  component: KPIChart,
  widgetConfig: {
    data: true,
    changeRate: true,
    action: false,
    actionFields: {},
    defaultSize: "1:2",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    data: { control: "object" },
    loading: {
      control: 'boolean',
      description: "Loading state of the widget",
      table: {
        category: "internal",
      },
    },
    labelColor: {
      control: { type: "color" },
      description: "The Color of the KPI Label",
      table: {
        category: "KPI Config",
      },
    },
    metricColor: {
      control: { type: "color" },
      description: "The Color of the KPI metric text",
      table: {
        category: "KPI Config",
      },
    },
    metricFormat: {
      options: ["none", "decimal", "abbreviate"],
      control: { type: "select" },
      description: "Optional formatter for the number.",
      table: {
        category: "KPI Config",
      },
    },
    alignment: {
      options: ["left", "center"],
      control: { type: "select" },
      description: "The alignment for the KPI widget",
      table: {
        category: "KPI Config",
      },
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
      },
    },
    showChart: {
      description: "Whether or not to show the chart.",
      table: {
        category: "Chart Config"
      }
    },
    chartType: {
      options: ['area', 'bar', 'line'],
      control: {type: 'select'},
      description: "The type of chart to render.",
      table: {
        category: "Chart Config"
      }
    },
    chartPosition: {
      options: ['left', 'right', 'bottom'],
      control: {type: 'select'},
      description: "Where to position the chart relative to the KPI. ",
      table: {
        category: "Chart Config"
      }
    },
    chartOpacity: {
      description: "Opacity value of the chart",
      table: {
        category: "Chart Config"
      }
    },
    animationDuration: {
      description: "how long (in ms) the chart animation should run",
      table: {
        category: "Chart Config"
      }
    },
  },

};

const containerStyle = {
  height: '200px',
  width: '400px'
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => (<div style={containerStyle}><KPIChart {...args} /></div>);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const dummyData = widgetDataGenerator(1, true, true);
Primary.args = {
  data: dummyData,
  loading: false,
  labelColor: '#7E8B9D',
  metricColor: '#2C3039',
  metricFormat: 'decimal',
  alignment: 'left',
  icon: 'Users',
  iconFormat: 'solid',
  showChart: false,
  chartType: 'area',
  chartPosition: 'right',
  chartOpacity: 1,
  animationDuration: 2000
};