
export const title = "Sparrow/Display/Divider";

export const argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['solid', 'rounded', 'dashed', 'dotted']
    },
    table: {
      category: 'Divider Config'
    }
  },
  height: {
    table: {
      category: 'Divider Config'
    }
  },
  color: {
    table: {
      category: 'Divider Config'
    }
  },
};

export const defaultValues = {
  loading: false,
  type: 'solid',
  height: '3px',
  color: '#7E8B9D'
}

export const widgetConfig = {};