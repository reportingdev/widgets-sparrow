
export const title = "Sparrow/Display/Video";

export const argTypes = {
  videoUrl: {
    table: {
      category: 'Video Config'
    }
  },
  altText: {
    table: {
      category: 'Video Config'
    }
  },
};

export const defaultValues = {
  loading: false,
  videoUrl: 'https://www.youtube.com/watch?v=R7m5Int1hAA',
  altText: "Where's the rum?"
};

export const widgetConfig = {}