// Re-export the widget component
import { GoalChart } from './GoalChart';

// Re-export configs from the config file
import { title, argTypes, widgetConfig } from './config';

export default {
  title: title,
  component: GoalChart,
  argTypes: argTypes,
  widgetConfig
};