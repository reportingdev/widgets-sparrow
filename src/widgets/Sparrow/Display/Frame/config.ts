
export const title = "Sparrow/Display/iFrame";

export const argTypes = {
  url: {
    description: 'the URL of the content you want to show up in the iFrame',
    table: {
      category: 'iFrame Configuration'
    },
  },
};

export const defaultValues = {
  loading: false,
  url: 'https://sparrowch.art/charts/3fc5a62c-bfd2-42a0-999f-caf97e1f95f2/0a92aa70-569b-4fe5-a478-9f297d4c3e6e',
};

export const widgetConfig = {
  hideCard: true,
  previewImage: 'https://storage.googleapis.com/sm-development-sparrow-api-public-00e31609/logos/video.svg'
};