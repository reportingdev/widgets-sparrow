// Re-export the widget component
import { Dropdown } from './Dropdown';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: Dropdown,
  argTypes: argTypes,
  widgetConfig
};