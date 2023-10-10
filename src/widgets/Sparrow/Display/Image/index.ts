// Re-export the widget component
import { Image } from './Image';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: Image,
  argTypes: argTypes,
  widgetConfig
};