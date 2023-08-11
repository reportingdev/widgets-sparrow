import React from 'react';
import { Video } from './Video';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Sparrow/Display/Video',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    videoUrl: {
      table: {
        category: 'Video Configuration'
      }
    },
    altText: {
      table: {
        category: 'Video Configuration'
      }
    },
  },
};

const containerStyle = {
  width: '640px',
  height: '480px'
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args:any) => <div style={containerStyle} ><Video {...args} /></div>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  loading: false,
  videoUrl: 'https://www.youtube.com/watch?v=R7m5Int1hAA',
  altText: "Where's the rum?"
}
