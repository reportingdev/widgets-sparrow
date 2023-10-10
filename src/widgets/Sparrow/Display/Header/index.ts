// Re-export the widget component
import { Header } from './Header';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: Header,
  argTypes: argTypes,
  widgetConfig
};