
export const title = "Sparrow/Display/Image";

export const argTypes = {
  imageUrl: {
    table: {
      category: 'Image Config'
    }
  },
  altText: {
    table: {
      category: 'Image Config'
    }
  },
};

export const defaultValues = {
  loading: false,
  imageUrl: 'https://storage.googleapis.com/sm-production-sparrow-api-public-69d20f0a/assets/common/about-card.png',
  altText: ''
};

export const widgetConfig = {
  hideCard: true,
  previewImage: "https://storage.googleapis.com/sm-development-sparrow-api-public-00e31609/logos/image.svg"
}