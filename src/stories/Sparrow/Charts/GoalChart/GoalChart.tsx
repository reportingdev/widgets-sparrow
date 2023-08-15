import React from 'react';
import PropTypes from 'prop-types';
import { widgetDataGenerator } from '../../../utils/generators';
import Chart from '../sparrow/Chart';
//import s from '../sparrow/Chart/style/chart.module.css'
import '../../KPI/KPI/kpi.css';
import { convertPxToNumber } from '../../../utils/helpers';
import { aggregateData } from '../../../utils/aggregations';
import s from '../sparrow/Chart/style/chart.module.css'
import { getIcon } from '../../../utils/icons';

/**
 * Primary UI component for user interaction
 */
export const GoalChart = ({
  data,
  loading,
  borderWidth,
  size,
  variant,
  imageSrc,
  imageGap,
  icon,
  iconFormat,
  iconSize,
  showBackground,
  showValue,
  showLabel,
  showValueAsPercentage,
  showPath
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
  const displayValue = showValueAsPercentage ? calculatePercentage(data) : 0// aggregateData();
  
  // visual variables
  const datasetLabel = data?.datasets?.[0]?.label ?? 'undefined';
  const color = data?.datasets?.[0]?.backgroundColor ?? '#FF5860';
  const sizeValue = convertPxToNumber(size);
  const borderWidthValue = convertPxToNumber(borderWidth)

  // user can choose image, icon, progress
  // other: backgroundGap
  // progress: asPercentage, showLabel, (labelFontSize, valueFontSize -- could be multipled by height),
  
  //TODO
  /*
     - add loading state
     - add the option to show data as non-percent
     - update size of progress labels to increase/decrease with size of chart
     - test icon and image variants
  */
  
  let ChildComponent;

  if (variant === 'image') {
    const imageGapValue = convertPxToNumber(imageGap)
    const imageSize = sizeValue - (borderWidthValue + imageGapValue) * 2

    ChildComponent = (<img
      className={s.GoalChart__image}
      style={{ width: imageSize, height: imageSize }}
      src={imageSrc}
      alt='goal'
    />);
  } else if (variant === 'icon') {
    const iconSizeValue = convertPxToNumber(iconSize);
    const HeroIcon = icon ? getIcon(icon, iconFormat) : null;
    const iconStyles = { height: iconSizeValue, width: iconSizeValue, color };
    ChildComponent = (
      <HeroIcon style={iconStyles} />
    );
  }

  return (
    <Chart
      type='goal'
      loading={loading}
      stepColors={[color]}
      border={borderWidthValue}
      data={displayValue}
      width={sizeValue}
      height={sizeValue}
      useBackground={showBackground}
      showValue={showValue}
      label={showLabel && datasetLabel}
      showPath={showPath}
    >
      {ChildComponent}
    </Chart>

  );
};

GoalChart.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  borderWidth: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  imageSrc: PropTypes.string,
  imageGap: PropTypes.string,
  icon: PropTypes.string,
  iconFormat: PropTypes.string,
  iconSize: PropTypes.string,
  showBackground: PropTypes.bool,
  showValue: PropTypes.bool,
  showValueAsPercentage: PropTypes.bool,
  showLabel: PropTypes.bool,
  showPath: PropTypes.bool
};

const dummyData = widgetDataGenerator(2, true, false);
dummyData.dimension = dummyData.datasets[1];
dummyData.dimension.label = 'Organizations';
dummyData.datasets[0].label = 'Your Campaign';

GoalChart.defaultProps = {
  data: dummyData,
  loading: false,
  borderWidth: '5px',
  size: '100px',
  variant: 'progress',
  imageSrc: '',
  imageGap: '0px',
  icon: '',
  iconFormat: 'solid',
  iconSize: '16px',
  showBackground: true,
  showValue: true,
  showValueAsPercentage:true,
  showLabel: false,
  showPath: true,
};



