/**
 * The primary widget object containing all necessary props to power the widget.
 */
type Widget = {
  /** 
   * Data used to power the widget. Shows up as `fields` in our dashboard editor.
   */
  data?: WidgetData;
  /**
   * Indicates whether or not the widget should be in a loading state.
   */
  loading?: boolean;
  /**
   * Object of report variables used to instantiate the widget. 
   * Can be changed by the widget by using the `onChange` callback.
   */
  variables?: object;
  /**
   * Used for triggering actions and updating variables (e.g., date picker, filters).
   */
  onChange?: Function;
  /**
   * Used to let the widget know there was an error querying data or loading the report 
   * and that an error UI should be shown.
   */
  error?: string;
  /**
   * Any additional props to power the widget can be added. 
   * Make sure to define them in the `config.argTypes`.
   */
  [key: string]: any;
}

/**
* Data object containing datasets and an optional dimension.
*/
type WidgetData = {
  /**
   * Array of datasets used to visualize data.
   */
  datasets: Dataset[];
  /**
   * Dimension dataset generally used for the X axis of a chart (dates, categories, etc.).
   */
  dimension?: Dataset;
}

/**
* Dataset type containing all necessary data to power a visualization.
*/
type Dataset = {
  /**
   * The label of the dataset. Should be used as the value for any labels or tooltips in the widget.
   */
  label: string;
  /**
   * The raw data values. Could be numbers or strings based on `dataType`.
   */
  data: Values;
  /**
   * The type of the data.
   */
  dataType: DataType;
  /**
   * Optional color for visualizing the data. 
   * Required only for multidataset use-cases when different datasets have different colors.
   */
  backgroundColor?: string;
  /**
   * How data should be aggregated for single-dimension widgets like KPIs, Pie Charts, etc.
   */
  aggregationType?: AggregationType;
  /**
   * Used to visualize a percentage difference between datasets. 
   * Passed as a string label and raw value.
   */
  changeRate?: ChangeRate;
}

/**
* Enum for the aggregation type.
*/
type AggregationType = 'total' | 'average' | 'count' | 'min' | 'max' | 'mode';

/**
* Enum for the data type.
*/
type DataType = 'string' | 'number' | 'date';

/**
* Object for representing change rates.
*/
type ChangeRate = {
  /**
   * Decimal value of the percentage change.
   */
  value: number;
  /**
   * String-generated version of the percentage change.
   */
  label: string;
}

/**
* Union type for values, which could be either numbers or strings.
*/
type Values = number[] | string[];


/**
 * The `WidgetConfig` type is used to define the configuration settings for widgets
 * in the dashboard editor.
 */
type WidgetConfig = {
  /** 
   * Specifies if the widget utilizes the `data` prop. 
   */
  data?: boolean;
  
  /** 
   * Limits the number of fields if the widget uses the `data` prop.
   */
  fieldLimit?: number;
  
  /** 
   * Indicates whether the widget uses the `dimension` prop in `data`.
   */
  dimension?: boolean;
  
  /** 
   * Indicates if the widget uses the `changeRate` prop from the passed datasets.
   */
  changeRate?: boolean;
  
  /**
   * Specifies if the widget uses `onChange` to get/set dashboard variables.
   */
  action?: boolean;
  
  /**
   * Defines what variables should be passed to the `onChange` callback if the widget takes actions.
   */
  variables?: ActionFields;
  
  /**
   * Specifies the default size and resizing options for the widget.
   */
  size?: {
    /**
     * Specifies the default width in pixels when the widget is added to the dashboard. Value should be __px or `auto`.
     */
    defaultWidth?: string;
    
    /**
     * Specifies the default height in pixels when the widget is added to the dashboard. Value should be __px or `auto`.
     */
    defaultHeight?: string;
    
    /**
     * When true, prevents the dashboard editor from resizing the height of the widget.
     */
    disableHeightResize?: boolean;
    
    /**
     * When true, prevents the dashboard editor from resizing the width of the widget.
     */
    disableWidthResize?: boolean;
  };

  /**
   * Defines the order in which different settings appear in the editor Sidebar.
   */
  settingsOrder?: SettingsOrder;
};

/**
 * Defines the order in which different settings appear in the editor Sidebar.
 * Each key is the name of a group of settings, and the associated array specifies the order of the settings within that group.
 * 
 * @example
 * ```typescript
 * {
 *   'chartSettings': ['enableXAxis', 'enableYAxis'],
 *   'dataSettings': ['useData', 'sortData']
 * }
 * ```
 */
type SettingsOrder = Record<string, string[]>;


/**
 * An object that maps keys to ActionFieldProps objects.
 */
type ActionFields = {
  /**
   * The key serves as the identifier for each action field.
   */
  [key: string]: ActionFieldProps;
}

/**
 * Properties for each individual action field.
 */
type ActionFieldProps = {
  /**
   * A description explaining the purpose or role of the action field.
   */
  description: string;
  /**
   * The data type of the action field, which can be 'string', 'number', or 'date'.
   */
  type: DataType;
}
