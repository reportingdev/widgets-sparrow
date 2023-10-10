import React from 'react';
import PropTypes from 'prop-types';
import './kpi.css';
import { datasetGenerator } from '../../../utils/generators';
import { aggregateData } from '../../../utils/aggregations';
import { addCommasToNumber, roundToTwo, abbreviateNumber } from '../../../utils/formatters';
//import { BadgeDelta, Flex, Metric, Text,Icon } from '@tremor/react';
//import { getDeltaBadgeGrowthType } from '../../utils';
import KPIMetric from './kpiComponent';
 


/**
 * Primary UI component for user interaction
 */
export const KPI = ({ data, loading, labelColor, metricColor, metricFormat, alignment, icon, iconFormat }: Widget) => {

  const kpiObject: any = data?.datasets?.[0] ?? { data: [] };
  let kpiValue = aggregateData(kpiObject.data, kpiObject?.aggregationType)
  const { changeRate } = kpiObject;

  // percentage
  const showChangeRate = changeRate?.label && changeRate?.value;
  const percentageString = changeRate?.label;
  //const percentageValue = changeRate?.value ?? 0;

  const loadingStyle = {
    opacity: 0.5,
  }

  if (metricFormat) {
    if (metricFormat === 'decimal') {
      kpiValue = addCommasToNumber(roundToTwo(kpiValue))
    }
    if (metricFormat === 'abbreviate') {
      kpiValue = abbreviateNumber(kpiValue);
    }
  }

  const loadingComponent = (
    <div style={loadingStyle}>
    <KPIMetric
      icon={icon}
      iconColor={kpiObject?.backgroundColor}
      iconFormat={iconFormat}
      metricLabel={kpiObject?.label}
      metricValue={'—'}
      metricColor={metricColor}
      labelColor={labelColor}
      growthPercentage={showChangeRate?'--%':undefined}
      alignment={alignment}
    />
    </div>
  )

  return loading ? loadingComponent : (
    <KPIMetric
      icon={icon}
      iconColor={kpiObject?.backgroundColor}
      iconFormat={iconFormat}
      metricLabel={kpiObject?.label}
      metricValue={kpiValue}
      metricColor={metricColor}
      labelColor={labelColor}
      growthPercentage={showChangeRate?percentageString:undefined}
      alignment={alignment}
    />
  )
};

KPI.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  labelColor: PropTypes.string,
  metricColor: PropTypes.string,
  metricFormat: PropTypes.string,
  alignment: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconFormat: PropTypes.string,
};

const kpiSampleData = {
  datasets: datasetGenerator(1),
  dimension: null,
  comparedTo: datasetGenerator(1)[0],
}

KPI.defaultProps = {
  data: kpiSampleData,
  loading: false,
  labelColor: '#7E8B9D',
  metricColor: '#2C3039',
  metricFormat: 'decimal',
  alignment: 'left',
  icon: 'Users',
  iconFormat: 'solid',
};