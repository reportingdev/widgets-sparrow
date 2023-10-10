import React from 'react';
import { Divider } from './Divider';
import { argTypes, defaultValues, title } from './config';

export default {
  title,
  component: Image,
  argTypes,
};

const Template = (args:any) => <Divider {...args} />;

export const Primary = Template.bind({});

Primary.args = defaultValues;
