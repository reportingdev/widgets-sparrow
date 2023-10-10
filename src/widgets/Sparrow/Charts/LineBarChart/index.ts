// Re-export the widget component
import { LineBarChart } from './LineBarChart';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: LineBarChart,
  argTypes: argTypes,
  widgetConfig
};