// Re-export the widget component
import { Frame } from './Frame';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: Frame,
  argTypes: argTypes,
  widgetConfig
};