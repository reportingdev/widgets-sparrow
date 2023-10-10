// theme.config.ts

export interface GlobalVariables {
  // Add more global variables here
  [key: string]: any;
}

export interface ThemeConfig {
  widgetOrder: Record<string, string[]>; // Maps widget names to their groups and orders
  globals: GlobalVariables;
}

const themeConfig: ThemeConfig = {
  widgetOrder: {
    "KPI": ['KPI'],
    "Charts": ["BarChart", "AreaChart", "LineChart", "LineBarChart", "DonutChart", "GoalChart", 'CurveChart'],
    "Display": ['Header', 'Divider', 'Image', 'Video', 'Frame'],
    "Actions": ['DateRangePicker','Button','Dropdown'],
    // Add more widget orders here
  },
  globals: {
    // Define global variables here
  }
};

export default themeConfig;
