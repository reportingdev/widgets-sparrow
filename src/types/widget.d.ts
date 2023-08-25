type Widget = {
    data: WidgetData;
    loading: boolean;
    onChange: Function; // used for actions (e.g. date picker, filters)
    error?: string // used for 
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


// the widget config object is used to set the rules for how widgets work in our editor
type WidgetConfig = {
  data?: boolean;                     // whether or not the widget uses the `data` prop
  dimension?: boolean;                // whether or not the widget ues the dimension prop in `data`
  changeRate?: boolean;               // whether or not the widget uses the changeRate prop from the passed datasets
  action?: boolean;                   // whether or not the widget uses onChange to get/set dashboard variables 
  actionFields?: ActionFields;        // If the widget takes actions, we use the actionFields map to define what the passed variables to onChange should be and sho 
  size: {
    defaultWidth?: string;            // the initial `__px` width for the widget when it's added to the dashboard. use `auto` to default to the widget's width
    defaultHeight?: string;           // the initial `__px` height for the widget when it's added to the dashboard. use `auto` to default to the widget's height
    disableHeightResize?: boolean;    // when `true`, prevents the dashboard editor from resizing the height of the widget 
    disableWidthResize?: boolean;     // when `true`, prevents the dashboard editor from resizing the width of the widget
  }
}

type ActionFields = {
  [key: string]: ActionFieldProps;
}

type ActionFieldProps = {
  description: string;
  type: DataType;
}