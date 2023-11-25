// Re-export the widget component
import { DateRangePicker } from './DateRangePicker';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: DateRangePicker,
  argTypes: argTypes,
  widgetConfig
};