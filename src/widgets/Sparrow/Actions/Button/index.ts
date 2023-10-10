// Re-export the widget component
import { Button } from './Button';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: Button,
  argTypes: argTypes,
  widgetConfig
};