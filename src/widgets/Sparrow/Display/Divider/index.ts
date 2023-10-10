// Re-export the widget component
import { Divider } from './Divider';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: Divider,
  argTypes: argTypes,
  widgetConfig
};