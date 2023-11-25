
export const title = "Sparrow/Actions/DateRangePicker";

export const argTypes = {
  onChange: { action: 'changed', description: 'Change event handler' },
  color: {
    description: "the button, date picker and day range picker color",
    table: {
      category: "Date Picker Settings",
    },
  },
  // canSelectToday: {
  //   descrpition: "Whether or not the end-user can select today's date in the date picker.",
  //   table: {
  //     category: "Date Picker Settings",
  //   },
  // },
  // enableLocalDates: {
  //   description: "When toggled true, the datepicker will use the end-user's local timezone rather than the UTC timezone.",
  //   table: {
  //     category: "Date Picker Settings",
  //   }
  // }
}

export const defaultValues = {
  color: '#866cff',
  // canSelectToday: false,
  // enableLocalDates: true,
};

export const widgetConfig = {
  data: false,
  action: true,
  changeRate: false,
  variables: {
    startDate: {
      description: 'The start date (YYYY-MM-DD) of the selected date range',
      type: 'string'
    },
    endDate: {
      description: 'The end date (YYYY-MM-DD) of the selected date range',
      type: 'string'
    },
    period: {
      description: 'The string representation of the selected date range (e.g. `last28days`)',
      type: 'string'
    },
  },
  hideCard: true,
  previewImage: 'https://storage.googleapis.com/sm-development-sparrow-api-public-00e31609/logos/date-picker.svg'
};