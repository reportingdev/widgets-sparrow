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
  imagePadding,
  icon,
  iconFormat,
  showBackground,
  showLabel,
  labelColor,
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
  const displayValue = calculatePercentage(data) 

  // visual variables
  const datasetLabel = data?.datasets?.[0]?.label ?? 'undefined';
  const color = data?.datasets?.[0]?.backgroundColor ?? '#FF5860';
  const sizeValue = Math.max(convertPxToNumber(size),50);
  const borderWidthValue = convertPxToNumber(borderWidth)
  let stepColors = [color];

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

  if(variant === 'chroma-progress') {
    stepColors = ['#FF5860', '#FF9600', '#33C635']
  }
  else if (variant === 'image') {
    const imageGapValue = convertPxToNumber(imagePadding)
    const imageSize = Math.max(0, sizeValue - (borderWidthValue + imageGapValue) * 2);

    ChildComponent = (<img
      className={s.GoalChart__image}
      style={{ width: imageSize, height: imageSize }}
      src={imageSrc}
      alt='goal chart'
    />);    
  } else if (variant === 'icon') {
    const labelTextFontSize = Math.round(sizeValue / 12);
    const iconSizeValue = Math.round(sizeValue / 3);
    const HeroIcon = icon ? getIcon(icon, iconFormat) : null;
    const iconStyles = { 
      height: iconSizeValue, 
      width: iconSizeValue, 
      color
    };
    const labelTextStyles = {
      fontSize: `${labelTextFontSize}px`,
      lineHeight: `${labelTextFontSize}px`,
      marginTop: `${Math.round(sizeValue/20)}px`,
      color: labelColor ?? '#2C304F',
    };

    ChildComponent = (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {HeroIcon && <HeroIcon style={iconStyles} />}
        {showLabel && datasetLabel && <div className="GoalChart__label" style={labelTextStyles}>{datasetLabel}</div>}
      </div>
    );
}



  return (
    <Chart
      type='goal'
      stepColors={stepColors}
      border={borderWidthValue}
      data={displayValue}
      width={sizeValue}
      height={sizeValue}
      useBackground={showBackground}
      label={showLabel && datasetLabel}
      labelColor={labelColor}
      showPath={showPath}
      isLoading={loading}
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
  imagePadding: PropTypes.string,
  icon: PropTypes.string,
  iconFormat: PropTypes.string,
  iconSize: PropTypes.string,
  showBackground: PropTypes.bool,
  showLabel: PropTypes.bool,
  labelColor: PropTypes.string,
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
  showBackground: true,
  variant: 'progress',
  imageSrc: 'https://uploads-ssl.webflow.com/63c6e835dc1c7763baa585f4/64e546f3e0d382a4060af113_reporting-dev-icon.jpeg',
  imagePadding: '0px',
  icon: 'LightBulb',
  iconFormat: 'outline',
  iconSize: '32px',
  showLabel: false,
  labelColor: '#2C304F',
  showPath: true,
};



