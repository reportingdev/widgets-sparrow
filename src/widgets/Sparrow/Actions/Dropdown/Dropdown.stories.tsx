// import react library
import * as React from 'react'

// import and export our Dropdown component
import { Dropdown } from './Dropdown'
import { argTypes, defaultValues, title } from './config';

export default {
  title,
  component: Dropdown,
  argTypes,
}
const Template = (args:any) => <Dropdown {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args


Primary.args = defaultValues;


