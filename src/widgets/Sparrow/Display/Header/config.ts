
export const title = "Sparrow/Display/Header";

export const argTypes = {
  text: {
    table: {
      category: 'Header Style'
    },
  },
  fontSize: {
    table: {
      category: 'Header Style'
    }
  },
  fontColor: {
    control: { type: 'color' },
    table: {
      category: 'Header Style'
    }
  },
  isBold: {
    table: {
      category: 'Header Style'
    }
  }
};

export const defaultValues = {
  loading: false,
  text: 'Title',
  fontSize: '24px',
  fontColor: '#2C3039',
  isBold: true,
};

export const widgetConfig = {}