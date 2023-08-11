import React from 'react';
import PropTypes from 'prop-types';
import { widgetDataGenerator } from '../../../utils/generators';
import LabelsWrap from "../sparrow/Chart/label-wrap/label-wrap";
//import s from '../sparrow/Chart/style/chart.module.css'



/**
 * Primary UI component for user interaction
 */
export const DonutChart = ({
  data,
  loading,
  onClick,
  title,
  titleAlignment,
  arcWidth,
  barOpacity,
  padAngle,
  animationDuration,
  showTooltip,
  showCenterLabel,
  showLegend,
  labelPosition,
  labelAlignment
}: Widget) => {

  // labels comes from the passed datasets



  // datasets comes from the passes datasets field
  const datasets = data?.datasets.map(ds => ({
    label: ds.label,
    data: ds.data,
    backgroundColor: ds?.backgroundColor,
    opacity: barOpacity,
  }));

  // grab each label from the datasets
  const labels = datasets.map(({label})=>label);

  const chartData = {
    labels,
    datasets
  }

  const config = {
    chart: {
      arcWidth: arcWidth,
      aspectRatio: 'auto',
      barOpacity: barOpacity,
      padAngle: padAngle
    },
    title: {
      align: titleAlignment
    },
    animation: {
      duration: animationDuration
    },
    tooltip: {
      hide: !showTooltip
    },
    centerLabel: {
      hide: !showCenterLabel,
      hideTitle: false,
      titleStyles: {},
      valueStyles: {}
    },
    loader: {
      show: loading,
      label: '',
      color: '#6B7280'
    },
    labels: {
      hide: !showLegend,
      position: labelPosition,
      align: labelAlignment,
    }
  }

  const chartSettings = {
    type: 'donut',
    data: chartData,
    config
  }


  return (
    <LabelsWrap
      title={title}
      chartSettings={chartSettings}
    />
  );
};

DonutChart.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
  arcWidth: PropTypes.number,
  barOpacity: PropTypes.number,
  padAngle: PropTypes.number,
  animationDuration: PropTypes.number,
  showTooltip: PropTypes.bool,
  showCenterLabel: PropTypes.bool,
  showLegend: PropTypes.bool,
  labelPosition: PropTypes.string,
  labelAlignment: PropTypes.string
};

const chartSampleData = widgetDataGenerator(1, true, false);

DonutChart.defaultProps = {
  data: chartSampleData,
  loading: false,
  onClick: ()=>{},
  title: 'My Chart',
  titleAlignment: 'center',
  arcWidth: 30,
  barOpacity: 0.7,
  padAngle: 0.05,
  animationDuration: 1000,
  showTooltip: true,
  showCenterLabel: true,
  showLegend: true,
  labelPosition: 'bottom',
  labelAlignment: 'center'
};



