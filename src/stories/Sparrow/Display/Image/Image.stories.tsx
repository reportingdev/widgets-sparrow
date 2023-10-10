import React from 'react';
import { Image } from './Image';
import { argTypes, defaultValues, title } from './config';

export default {
  title,
  component: Image,
  argTypes,
};

const Template = (args:any) => <Image {...args} />;

export const Primary = Template.bind({});

Primary.args = defaultValues;
