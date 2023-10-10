import * as React from 'react'
import { Button } from './Button';
import { argTypes, defaultValues, title } from './config';


export default {
  title,
  component: Button,
  argTypes,
}
const Template = (args:any) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = defaultValues;
