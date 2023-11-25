// Re-export the widget component
import { BarChart } from './BarChart';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: BarChart,
  argTypes: argTypes,
  widgetConfig
};