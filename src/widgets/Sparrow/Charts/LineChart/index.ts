// Re-export the widget component
import { LineChart } from './LineChart';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: LineChart,
  argTypes: argTypes,
  widgetConfig
};