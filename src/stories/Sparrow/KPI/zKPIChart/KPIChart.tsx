import React from 'react';
import PropTypes from 'prop-types';
import { datasetGenerator } from '../../../utils/generators';
import {KPI} from '../KPI/KPI';
import { LabelsWrap } from '../../Charts/sparrow';
 

/**
 * Primary UI component for user interaction
 */
export const KPIChart = ({ data, loading,onChange, labelColor, metricColor, metricFormat, alignment, icon, iconFormat,chartType,chartPosition, showChart, chartOpacity,animationDuration }: Widget) => {

  // create the KPI
  const ChartKPI = (
    <KPI
      data={data}
      loading={loading}
      onChange={onChange}
      labelColor={labelColor}
      metricColor={metricColor}
      metricFormat={metricFormat}
      alignment={alignment}
      icon={icon}
      iconFormat={iconFormat}
    />
  );


  // labels comes from the passed dimension object
  const rawLabels = ((data?.dimension?.data as Values) ?? [data?.dimension?.label ?? 'null'])
  const labels = rawLabels//.map(formatDateStringGenerator('US Short Month & Day') as any);

  // datasets comes from the passes datasets field
  const datasets = data?.datasets.map(ds => ({
    label: ds.label,
    data: ds.data,
    backgroundColor: ds?.backgroundColor,
    //color: ds?.backgroundColor,
    opacity: chartOpacity,
    //type: 'bar'
  }))
  
  const chartData = {
    labels,
    datasets
  }
  const config = {
    chart: {
      clickHandler: null,
      stacked: false,
      barOpacity: chartOpacity,
      lineOpacity: chartOpacity,
      height: 50
    },
    title: {
      align: 'left'
    },
    scales: {
      x: {
        hide: true,
      },
      y: {
        hide: true,
      }
    },
    animation: {
      duration: animationDuration,
    },
    tooltip: {
      hide: true,
    },
    loader: {
      show: loading,
    },
    labels: {
      hide: true,
    }
  }

  const chartSettings = {
    type: chartType,
    data: chartData,
    config
  };


  // create the Chart
  const ChartComponent = (
    <div style={{height:50,width:100}}>
      <LabelsWrap
        chartSettings={chartSettings}
      />
    </div>
  );

  const containerStyle = {
    display:'flex'
  }

  return (
  <div style={containerStyle}>
    {ChartKPI}
    {ChartComponent}
  </div>)
};

KPIChart.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  labelColor: PropTypes.string,
  metricColor: PropTypes.string,
  metricFormat: PropTypes.string,
  alignment: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconFormat: PropTypes.string,
  showChart: PropTypes.bool,
  chartType: PropTypes.string,
  chartOpacity: PropTypes.number,
  animationDuration: PropTypes.number
};

const kpiSampleData = {
  datasets: datasetGenerator(1),
  dimension: null,
  comparedTo: datasetGenerator(1)[0],
}

KPIChart.defaultProps = {
  data: kpiSampleData,
  loading: false,
  labelColor: '#7E8B9D',
  metricColor: '#2C3039',
  metricFormat: 'decimal',
  alignment: 'left',
  icon: 'Users',
  iconFormat: 'solid',
  showChart: true,
  chartType: 'area',
  chartOpacity: 1,
  animationDuration: 2000
};