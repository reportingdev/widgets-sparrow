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
    ];
    const pick = Math.floor(Math.random() * options.length)
    return options[pick];
};

const getRandomArr = (length: number): number[] =>
    new Array(length).fill('').map(() => random(20, 120))

const getLastXDays = (x:number) => {
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
function getRandomStrings(x:number) {
  const animals = ['lion', 'tiger', 'bear', 'wolf', 'elephant', 'giraffe', 'hippopotamus', 'rhinoceros', 'zebra', 'gorilla', 'monkey', 'penguin', 'whale', 'shark', 'octopus', 'dolphin', 'seagull', 'crocodile', 'snake', 'spider', 'scorpion', 'eagle', 'hawk', 'parrot', 'flamingo', 'peacock', 'kangaroo', 'koala', 'platypus', 'turtle', 'lizard', 'frog', 'crab', 'lobster', 'shrimp', 'clam', 'starfish', 'jellyfish', 'snail', 'ant', 'bee', 'butterfly', 'caterpillar', 'grasshopper', 'ladybug', 'mosquito', 'moth', 'praying mantis'];
  
  const result = [];
  
  for (let i = 0; i < x; i++) {
    const randomIndex = Math.floor(Math.random() * animals.length);
    result.push(animals[randomIndex]);
  }
  
  return result;
}

const datasetGenerator = (number = 1, dataType:DataType = 'number') => {
    number = Math.max(0, number); //prevent negatives
    const datasets: Dataset[] = [];

    let dataGenerator:any = getRandomArr;
    if(dataType === 'date') {
      dataGenerator = getLastXDays;
    }
    if(dataType === 'string') {
      dataGenerator = getRandomStrings;
    }

    for (let i = 0; i < number; i++) {
        const dataset: Dataset = {
            label: labelGenerator(),
            data: dataGenerator(28),
            dataType: dataType,
            aggregationType: 'total',
            backgroundColor: getRandomColor(),
        };
        const percentageValue = percentageChange(dataset.data[0] as number,dataset.data[19] as number);
        dataset.changeRate = {
            value: percentageValue,
            label: percentageFormatter(percentageValue)
        }
        datasets.push(dataset);
    }
    return datasets;
}

const widgetDataGenerator = (number:number=1, includeDimension:boolean, includePreviousPeriod:boolean):WidgetData => {
    return {
        datasets: datasetGenerator(number),
        dimension: includeDimension ? datasetGenerator(1, 'date')[0]: undefined,
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

    const labels = ['Facebook', 'Instagram', 'Twitter'];
    const values = ['facebook', 'instagram', 'twitter'];
  
    const createDatasets = ()=>{
      const result:any[] = [];
      labels.forEach((label,i)=>{
        result.push({
          label,
          data: [values[i]],
          dataType: 'string',
        })
      })
      return result;
    }
  
    return {
      datasets: createDatasets(),
      dimension: null
    }
  }

export {
    datasetGenerator,
    widgetDataGenerator,
    getRandomColor,
    actionDataGenerator
};