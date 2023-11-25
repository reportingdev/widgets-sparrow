// Re-export the widget component
import { AreaChart } from './AreaChart';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: AreaChart,
  argTypes: argTypes,
  widgetConfig
};