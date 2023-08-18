import { random } from 'lodash'
import { percentageFormatter } from './formatters';
import { percentageChange } from './formulas';


const labelGenerator = () => {
  const options = [
    'Total Sessions',
    'Total Likes',
    'Total Impressions',
    'Total Spend',
    'Return on Ad Spend',
    'Average Sessions per Day',
    'Total Clicks',
    'Total Shares',
    'Total Comments',
    'Click Through Rate',
    'Total Views',
    'Average Views per Day',
    'Total Conversions',
    'Conversion Rate',
    'Cost per Click',
    'Cost per Conversion',
    'Total Followers',
    'Average Likes per Day',
    'Total Engagements',
    'Engagement Rate',
    'Bounce Rate',
    'Page Views per Session',
    'Total Subscribers',
    'New Subscribers per Day',
    'Unsubscribes',
    'Active Users',
    'New Registrations',
    'Total Sales',
    'Sales Growth Rate',
    'Average Sales per User',
    'Total Refunds',
    'Refund Rate',
    'Total Revenue',
    'Monthly Recurring Revenue',
    'Churn Rate',
    'Customer Lifetime Value',
    'Net Promoter Score',
    'Total Feedback',
    'Positive Feedback Rate',
    'Negative Feedback Rate',
    'Neutral Feedback',
    'Total Downloads',
    'Download Growth Rate',
    'Average Time Spent',
    'Top Referral Sources',
    'Total Bookmarks',
    'User Retention Rate',
    'Total Cart Abandonment',
    'Cart Abandonment Rate',
    'Average Purchase Value',
  ];

  const pick = Math.floor(Math.random() * options.length)
  return options[pick];
};

const getRandomArr = (length: number): number[] =>
  new Array(length).fill('').map(() => random(20, 120))

const getLastXDays = (x: number) => {
  const today = new Date();
  const lastXDays = [];

  for (let i = x - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toISOString().slice(0, 10);
    lastXDays.push(dateString);
  }

  return lastXDays;
}
function getRandomStrings(x: number) {
  const animals = ['lion', 'tiger', 'bear', 'wolf', 'elephant', 'giraffe', 'hippopotamus', 'rhinoceros', 'zebra', 'gorilla', 'monkey', 'penguin', 'whale', 'shark', 'octopus', 'dolphin', 'seagull', 'crocodile', 'snake', 'spider', 'scorpion', 'eagle', 'hawk', 'parrot', 'flamingo', 'peacock', 'kangaroo', 'koala', 'platypus', 'turtle', 'lizard', 'frog', 'crab', 'lobster', 'shrimp', 'clam', 'starfish', 'jellyfish', 'snail', 'ant', 'bee', 'butterfly', 'caterpillar', 'grasshopper', 'ladybug', 'mosquito', 'moth', 'praying mantis'];

  const result = [];

  for (let i = 0; i < x; i++) {
    const randomIndex = Math.floor(Math.random() * animals.length);
    result.push(animals[randomIndex]);
  }

  return result;
}

const datasetGenerator = (number = 1, dataType: DataType = 'number') => {
  number = Math.max(0, number); //prevent negatives
  const datasets: Dataset[] = [];

  let dataGenerator: any = getRandomArr;
  if (dataType === 'date') {
    dataGenerator = getLastXDays;
  }
  if (dataType === 'string') {
    dataGenerator = getRandomStrings;
  }

  const addWithModifiedLabel = (arr:any, newObj:any):any =>{
    // Check if an object in the array has the same label as newObj
    const hasDuplicate = arr.some((item:any) => item.label === newObj.label);

    // If duplicate found, append 's' to the label of newObj
    if (hasDuplicate) {
        newObj.label += 's';
    }

    // Add the newObj to the array
    arr.push(newObj);
}

  for (let i = 0; i < number; i++) {
    const dataset: Dataset = {
      label: labelGenerator(),
      data: dataGenerator(28),
      dataType: dataType,
      aggregationType: 'total',
      backgroundColor: getRandomColor(),
    };
    const percentageValue = percentageChange(dataset.data[0] as number, dataset.data[19] as number);
    dataset.changeRate = {
      value: percentageValue,
      label: percentageFormatter(percentageValue)
    }
    addWithModifiedLabel(datasets,dataset); // prevents duplicate labels
  }
  return datasets;
}

const widgetDataGenerator = (number: number = 1, includeDimension: boolean, includePreviousPeriod: boolean): WidgetData => {
  return {
    datasets: datasetGenerator(number),
    dimension: includeDimension ? datasetGenerator(1, 'date')[0] : undefined,
  };
}

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const actionDataGenerator = () => {

  const defaultOptionData:WidgetData = {
    datasets: [{
      label: 'labels',
      data: ['Facebook','Instagram','Twitter'],
      dataType: 'string',
      },
    ],
    dimension: {
      label: 'values',
      data: ['facebook','instagram','twitter'],
      dataType: 'string',
    }
  };
  return defaultOptionData;
}

export {
  datasetGenerator,
  widgetDataGenerator,
  getRandomColor,
  actionDataGenerator
};