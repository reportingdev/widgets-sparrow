// Re-export the widget component
import { Video } from './Video';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: Video,
  argTypes: argTypes,
  widgetConfig
};