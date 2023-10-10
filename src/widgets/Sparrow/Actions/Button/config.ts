
export const title = "Sparrow/Actions/Button";

export const argTypes = {
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
};

export const defaultValues = {
  loading: false,
  label: "Learn more",
  variant: 'primary',
  color: '#866cff',
  isDisabled: false,
  actionValue: 'Learn more',
};

export const widgetConfig = {
  data: false,
  changeRate: false,
  action: true,
  variables: {
    button: {
      description: 'The actionKey value shared when the button is clicked',
      type: 'string'
    },
  },
}