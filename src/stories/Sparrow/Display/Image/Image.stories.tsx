import React from 'react';
import { Image } from './Image';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Sparrow/Display/Image',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    imageUrl: {
      table: {
        category: 'Image Configuration'
      }
    },
    altText: {
      table: {
        category: 'Image Configuration'
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args:any) => <Image {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  loading: false,
  imageUrl: 'https://storage.googleapis.com/sm-production-sparrow-api-public-69d20f0a/assets/common/about-card.png',
  altText: ''
}
