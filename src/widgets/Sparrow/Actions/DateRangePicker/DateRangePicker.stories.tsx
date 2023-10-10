import React from 'react';
import {DateRangePicker} from './DateRangePicker'
import { argTypes, defaultValues, title } from './config';


export default {
  title,
  component: DateRangePicker,
  argTypes,
}


const Template = (args: any) => (<div style={{width:'100%', display: 'flex',justifyContent:'center'}}><div style={{width:200}}><DateRangePicker {...args} /></div></div>);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = defaultValues;