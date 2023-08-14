import React from 'react';
import PropTypes from 'prop-types';
import { widgetDataGenerator } from '../../../utils/generators';
import Chart from '../sparrow/Chart';
//import s from '../sparrow/Chart/style/chart.module.css'
import '../../KPI/KPI/kpi.css';
import { convertPxToNumber } from '../../../utils/helpers';
import { aggregateData } from '../../../utils/aggregations';

/**
 * Primary UI component for user interaction
 */
export const GoalChart = ({
  data,
  loading,
  color,
  borderWidth,
  width,
  height,
  showBackground,
  showValue,
}: Widget) => {

  const calculatePercentage = (data: WidgetData): number => {
    const { datasets, dimension } = data;
  
    if (!datasets.length || !dimension) return 0;
  
    const datasetValue = aggregateData(datasets[0].data, datasets[0].aggregationType || 'total');
    const dimensionValue = aggregateData(dimension.data, datasets[0].aggregationType || 'total'); // Assuming total aggregation for dimension
  
    if (dimensionValue === 0) return 0;  // Avoid division by zero
  
    return (datasetValue / dimensionValue) * 100;
  };

  // calculate percentage
  const percentageValue = calculatePercentage(data);
  

  //const chartColor = '#FF5860';
  // const TestElment = (
  //   <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
  //     <p className='KPI__Metric'>500</p>
  //     <p className="KPI__Label">Hello World</p>
  //   </div>
  // )
  return (
    <Chart
        type='goal'
        loading={loading}
        stepColors={[color]}
        border={convertPxToNumber(borderWidth)}
        data={percentageValue}
        width={convertPxToNumber(width)}
        height={convertPxToNumber(height)}
        useBackground={showBackground}
        showValue={showValue}
      >
        {/* {!showValue && 'likes'} */}
      </Chart>

  );
};

GoalChart.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  color: PropTypes.string,
  borderWidth: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  showBackground: PropTypes.bool,
  showValue: PropTypes.bool
};

const dummyData = widgetDataGenerator(2, true, false);
dummyData.dimension = dummyData.datasets[1];
dummyData.dimension.label = 'Organizations';
dummyData.datasets[0].label = 'Your Campaign';

GoalChart.defaultProps = {
  data: dummyData,
  loading: false,
  color: '#FF5860',
  borderWidth: '5px',
  width: '100px',
  height: '100px',
  showBackground: true,
  showValue: true
};



