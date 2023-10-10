// Re-export the widget component
import { CurveChart } from './CurveChart';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: CurveChart,
  argTypes: argTypes,
  widgetConfig
};