import { widgetDataGenerator } from "@reportingdev/widget-utils";
import { ICON_KEYS } from "@reportingdev/widget-utils";

export const title = "Sparrow/KPI/KPI";

export const argTypes = {
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
}

const dummyData = widgetDataGenerator(1, false, true);
export const defaultValues = {
  data: dummyData,
  loading: false,
  labelColor: '#7E8B9D',
  metricColor: '#2C3039',
  metricFormat: 'decimal',
  alignment: 'left',
  icon: 'Users',
  iconFormat: 'solid'
};

export const widgetConfig = {
  data: true,
  changeRate: true,
  fieldLimit: 1,
  action: false,
  actionFields: {},
  defaultSize: "1:2",
};