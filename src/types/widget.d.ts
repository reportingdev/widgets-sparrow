type Widget = {
    data: WidgetData;
    loading: boolean;
    onChange: Function; // used for actions (e.g. date picker, filters)
    [key: string]: any; //...anyOtherSetting
}

type WidgetData = {
    datasets: Dataset[];
    dimension?: Dataset;
}

type Dataset = {
    label: string;
    data: Values;
    dataType: DataType;
    backgroundColor?: string;
    aggregationType?: 'total' | 'average' | 'count' | 'min' | 'max' | 'mode'; // only used for single-dimension charts (kpi, pie, donut)
    changeRate?: ChangeRate
};

type DataType = 'string' | 'number' | 'date'; 

type ChangeRate = {
    value: number; // decimal value of percentage
    label: string; // string generated version of %
}

type Values = number[] | string[];

type ComparedTo = {
  rule: 'lowestToHighest' | 'firstToLast' | 'datasets';
  sortBy: {values:Values; order: 'ascending' | 'descending'}
  datasets?: Dataset[];
}