import {DateRangePicker} from './date-range-picker'


export default {
  title: 'Sparrow/Actions/DatePicker',
  component: DateRangePicker,
  widgetConfig: {
    data: false,
    action: true,
    changeRate: false, 
  },
  argTypes: {
    onChange: { action: 'changed', description: 'Change event handler' },
    color: {
      description: "the button, date picker and day range picker color",
      table: {
        category: "Date Picker Settings",
      },
    },
    canSelectToday: {
      descrpition: "Whether or not the end-user can select today's date in the date picker.",
      table: {
        category: "Date Picker Settings",
      },
    },
    enableLocalDates: {
      description: "When toggled true, the datepicker will use the end-user's local timezone rather than the UTC timezone.",
      table: {
        category: "Date Picker Settings",
      }
    },
  }
}


const Template = (args) => <DateRangePicker {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  color: '#866cff',
  canSelectToday: false,
  enableLocalDates: false,
};