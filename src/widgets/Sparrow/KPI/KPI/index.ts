// Re-export the widget component
import { KPI } from './KPI';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: KPI,
  argTypes: argTypes,
  widgetConfig
};