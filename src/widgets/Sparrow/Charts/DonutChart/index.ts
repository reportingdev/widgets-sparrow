// Re-export the widget component
import { DonutChart } from './DonutChart';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: DonutChart,
  argTypes: argTypes,
  widgetConfig
};