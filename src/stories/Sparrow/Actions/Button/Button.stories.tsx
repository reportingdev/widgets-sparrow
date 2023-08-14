import * as React from 'react'
import { Button } from './Button';


export default {
  title: 'Sparrow/Actions/Button',
  component: Button,
  widgetConfig: {
    data: false,
    changeRate: false,
    action: true,
    actionFields: {
      button: {
        description: 'The actionKey value shared when the button is clicked',
        type: 'string'
      },
    },
  },argTypes: {
    onChange: { action: 'clicked', description: 'Change event handler' },
    label: {
      description: "Text inside the button",
      table: {
        category: "Button Config",
      },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: "select" },
      description: "the button variant",
      table: {
        category: "Button Config",
      },
    },
    color: {
      description: "the button color",
      table: {
        category: "Button Config",
      },
    },
    isDisabled: {
      description: 'whether or not the button should be disabled',
      table: {
        category: 'Button Config'
      }
    },
    actionValue: {
      description: "the value shared in code when the button is clicked",
      table: {
        category: "Button Config",
      },
    },
  },
}
const Template = (args:any) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  loading: false,
  label: "Learn more",
  variant: 'primary',
  color: '#866cff',
  isDisabled: false,
  actionValue: 'Learn more',
};
