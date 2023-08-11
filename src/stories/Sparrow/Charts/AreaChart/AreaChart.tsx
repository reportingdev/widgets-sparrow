import React from 'react';
import PropTypes from 'prop-types';
import { widgetDataGenerator } from '../../../utils/generators';
import LabelsWrap from "../sparrow/Chart/label-wrap/label-wrap";
import { formatDateStringGenerator } from '../sparrow/utils';
//import s from '../sparrow/Chart/style/chart.module.css'

/**
 * Primary UI component for user interaction
 */
export const AreaChart = ({
  data,
  loading,
  onClick,
  title,
  titleAlignment,
  lineOpacity,
  showXAxis,
  XAxisFontSize,
  XAxisLabelSpace,
  showYAxis,
  YAxisFontSize,
  YAxisLabelSpace,
  axisColor,
  animationDuration,
  animationStepDelay,
  showTooltip,
  formatTooltipTitle,
  formatXAxisLabel,
  keepTooltipInsideContainer,
  showLegend,
  labelPosition,
  labelAlignment
}: Widget) => {

  // labels comes from the passed dimension object
  const labels = ((data?.dimension?.data as Values) ?? [data?.dimension?.label ?? 'null'])

  // datasets comes from the passes datasets field
  const datasets = data?.datasets.map(ds => ({
    label: ds.label,
    data: ds.data,
    backgroundColor: ds?.backgroundColor,
    opacity: lineOpacity,
    //type: 'bar'
  }))
  
  const chartData = {
    labels,
    datasets
  }
  const config = {
    chart: {
      clickHandler: onClick,
      lineOpacity: lineOpacity,
      aspectRatio: 'auto',
    },
    title: {
      align: titleAlignment
    },
    scales: {
      x: {
        hide: !showXAxis,
        styles: {
          'font-size': XAxisFontSize,
          color: axisColor
        },
        labelSpace: XAxisLabelSpace,
        labelOverflow: 'hide',
        formatLabel: formatDateStringGenerator(formatXAxisLabel)
      },
      y: {
        hide: !showYAxis,
        styles: {
          'font-size': YAxisFontSize,
          color: axisColor
        },
        labelSpace: YAxisLabelSpace,
      }
    },
    animation: {
      duration: animationDuration,
      stepDelay: animationStepDelay
    },
    tooltip: {
      hide: !showTooltip,
      formatTitle: formatDateStringGenerator(formatTooltipTitle),
      showInsideContainer: keepTooltipInsideContainer
    },
    loader: {
      show: loading
    },
    labels: {
      hide: !showLegend,
      position: labelPosition,
      align: labelAlignment,
    }
  }

  const chartSettings = {
    type: 'area',
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

AreaChart.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  title: PropTypes.string,
  titleAlignment: PropTypes.string,
  lineOpacity: PropTypes.number,
  showXAxis: PropTypes.bool,
  XAxisFontSize: PropTypes.string,
  XAxisLabelSpace: PropTypes.number,
  showYAxis: PropTypes.bool,
  YAxisFontSize: PropTypes.string,
  YAxisLabelSpace: PropTypes.number,
  animationDuration: PropTypes.number,
  animationStepDelay: PropTypes.number,
  showTooltip: PropTypes.bool,
  formatTooltipTitle: PropTypes.string,
  keepTooltipInsideContainer: PropTypes.bool,
  showLegend: PropTypes.bool,
  axisColor: PropTypes.string,
  labelPosition: PropTypes.string,
  labelAlignment: PropTypes.string
};

const chartSampleData = widgetDataGenerator(1, true, false);

AreaChart.defaultProps = {
  data: chartSampleData,
  loading: false,
  onClick: ()=>{},
  title: "My new chart",
  titleAlignment: 'left',
  lineOpacity: 0.7,
  showXAxis: true,
  XAxisFontSize: '11px',
  XAxisLabelSpace: 60,
  showYAxis: true,
  YAxisFontSize: '11px',
  YAxisLabelSpace: 40,
  animationDuration: 2000,
  animationStepDelay: 50,
  showTooltip: true,
  formatTooltipTitle: 'Full Month, Day & Year',
  formatXAxisLabel: 'Short Month & Day',
  keepTooltipInsideContainer: false,
  showLabels: true,
  axisColor: "#7E8B9D",
  labelPosition: 'top',
  labelAlignment: 'right'
};



