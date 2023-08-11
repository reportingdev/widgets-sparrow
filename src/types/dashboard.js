export const dashboard = {
  title: "Dashboard",
  component: null,
  argTypes: {
    backgroundColor: {
      description: 'THe default background color of the dashboard',
      table: {
        category: "Dashboard",
      },
    },
    canvasBackgroundColor: {
      description: 'The background color of the editor. This will not impact your live dashboard.',
      table: {
        category: "Dashboard",
      },
    },
    cardSpacing: {
      description: 'The amount of space between each widget card.',
      table: {
        category: "Dashboard",
      },
    },
    defaultBackgroundColor: {
      description: 'The default background color to use for inserted widgets.',
      table: {
        category: "Cards",
      },
    },
    defaultBorderWidth: {
      description: 'The default border color used for each widget.',
      table: {
        category: "Cards",
      },
    },
    defaultBorderColor: {
      description: 'The border width for each widget. Use zero for no border.',
      table: {
        category: "Cards",
      },
    },
    defaultCornerRadius: {
      description: 'The default corner radius for each card. Use zero for no radius.',
      table: {
        category: "Cards",
      },
    },
  },
};

dashboard.defaultProps = {
  backgroundColor: '#FFFFFF',       // dashboard
  canvasBackgroundColor: '#E2E6EB', // dashboard
  cardSpacing: '16px',              // dashboard
  defaultBackgroundColor: '#FFFFFF',// card
  defaultBorderWidth: '1px',        // card
  defaultCornerRadius: '4px',       // card
  defaultBorderColor: '#E2E6EB',    // card
  
}
