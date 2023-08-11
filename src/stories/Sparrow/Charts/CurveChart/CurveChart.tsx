import React from 'react';
import PropTypes from 'prop-types';
import { widgetDataGenerator } from '../../../utils/generators';
import LabelsWrap from "../sparrow/Chart/label-wrap/label-wrap";
//import s from '../sparrow/Chart/style/chart.module.css'



/**
 * Primary UI component for user interaction
 */
export const CurveChart = ({
  data,
  loading,
  onClick,
  title,
  titleAlignment,
  animationDuration,
  showXAxis,
  XAxisFontSize,
  showTooltip,
}: Widget) => {


  // datasets comes from the passes datasets field
  const datasets = data?.datasets.map(ds => ({
    label: ds.label,
    data: ds.data,
    backgroundColor: ds?.backgroundColor,
    opacity: 0.1,
  }));

  // grab each label from the datasets
  const labels = datasets.map(({label})=>label);

  const chartData = {
    ...data,
    labels,
    datasets
  }

  const config = {
    chart: {
      aspectRatio: 'auto',
      colors: ['#FF5860', '#FF9600', '#33C635'],
      lineColors: ['#95343B', '#B37214', '#1E7620']
    },
    margin: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 30
    },
    scales: {
      x: {
        hide: !showXAxis,
        styles: {
          fontSize: XAxisFontSize
        }
      }
    },
    tooltip: {
      hide: !showTooltip
    },
    animation: {
      duration: animationDuration
    },
    loader: {
      show: loading,
      label: '',
      color: '#6B7280'
    },
    labels: {
      hide: true,
      position: 'bottom',
      align: 'center',
    },
    title: {
      align: titleAlignment
    }
  }

  const chartSettings = {
    type: 'curve',
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

CurveChart.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  titleAlignment: PropTypes.string,
  animationDuration:PropTypes.number,
  showXAxis: PropTypes.bool,
  showTooltip: PropTypes.bool,
};

const dummyData = widgetDataGenerator(2, true, false);
dummyData.dimension = dummyData.datasets[1];
dummyData.dimension.label = 'Organizations';
dummyData.datasets[0].label = 'Your Campaign';

CurveChart.defaultProps = {
  data: dummyData,
  loading: false,
  onClick: ()=>{},
  title: 'My Chart',
  titleAlignment: 'center',
  animationDuration: 3000,
  showXAxis: true,
  showTooltip: true,
};



