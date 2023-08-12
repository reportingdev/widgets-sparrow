import React from 'react';
import PropTypes from 'prop-types';
import { widgetDataGenerator } from '../../../utils/generators';
import LabelsWrap from "../sparrow/Chart/label-wrap/label-wrap";
import { formatDateStringGenerator } from '../sparrow/utils';
import { getMaxDatasetValue } from '../sparrow/Chart/utils';
//import s from '../sparrow/Chart/style/chart.module.css'



/**
 * Primary UI component for user interaction
 */
export const LineChart = ({
  data,
  loading,
  title,
  titleAlignment,
  onBarClick,
  lineOpacity,
  showXAxis,
  XAxisFontSize,
  XAxisLabelSpace,
  showYAxis,
  YAxisFontSize,
  YAxisLabelSpace,
  yAxisPaddingPercentage,
  animationDuration,
  animationStepDelay,
  showTooltip,
  formatTooltipTitle,
  formatXAxisLabel,
  axisColor,
  keepTooltipInsideContainer,
  showLegend,
  labelPosition,
  labelAlignment
}: Widget) => {

  // labels comes from the passed dimension object
  const rawLabels = ((data?.dimension?.data as Values) ?? [data?.dimension?.label ?? 'null'])
  const labels = rawLabels//.map(formatDateStringGenerator('US Short Month & Day') as any);

  // datasets comes from the passes datasets field
  const datasets:any = data?.datasets.map(ds => ({
    label: ds.label,
    data: ds.data,
    backgroundColor: ds?.backgroundColor,
    //color: ds?.backgroundColor,
    opacity: lineOpacity,
    type: 'line'
  }));

  let maxDatasetValue = getMaxDatasetValue(datasets)

  const yMaxValue = maxDatasetValue*(1+Math.min(Math.abs(yAxisPaddingPercentage),1));
  
  const chartData = {
    labels,
    datasets
  }
  const config = {
    chart: {
      clickHandler: onBarClick,
      stacked: true,
      barOpacity: 1,
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
        formatLabel: formatDateStringGenerator(formatXAxisLabel),
      },
      y: {
        hide: !showYAxis,
        styles: {
          'font-size': YAxisFontSize,
          color: axisColor
        },
        max: yMaxValue,
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
      show: loading,
      
    },
    labels: {
      hide: !showLegend,
      position: labelPosition,
      align: labelAlignment,
    }
  }

  const chartSettings = {
    type: 'bar',
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

LineChart.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  title: PropTypes.string,
  titleAlignment: PropTypes.string,
  onClick: PropTypes.func,
  stackBars: PropTypes.bool,
  lineOpacity: PropTypes.number,
  showXAxis: PropTypes.bool,
  XAxisFontSize: PropTypes.string,
  XAxisLabelSpace: PropTypes.number,
  showYAxis: PropTypes.bool,
  YAxisFontSize: PropTypes.string,
  YAxisLabelSpace: PropTypes.number,
  yAxisPaddingPercentage: PropTypes.number,
  axisColor: PropTypes.string,
  animationDuration: PropTypes.number,
  animationStepDelay: PropTypes.number,
  showTooltip: PropTypes.bool,
  formatTooltipTitle: PropTypes.string,
  formatXAxisLabel: PropTypes.string,
  keepTooltipInsideContainer: PropTypes.bool,
  showLegend: PropTypes.bool,
  labelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  labelPosition: PropTypes.string,
  labelAlignment: PropTypes.string
};

const chartSampleData = widgetDataGenerator(1, true, false);

LineChart.defaultProps = {
  data: chartSampleData,
  loading: false,
  onClick: () => { },
  title: "My Chart",
  titleAlignment: 'left',
  stackBars: false,
  lineOpacity: 0.7,
  showXAxis: true,
  XAxisFontSize: '11px',
  XAxisLabelSpace: 60,
  showYAxis: true,
  YAxisFontSize: '11px',
  YAxisLabelSpace: 40,
  yAxisPaddingPercentage: 0.2,
  animationDuration: 2000,
  animationStepDelay: 50,
  showTooltip: true,
  formatTooltipTitle: 'Full Month, Day & Year',
  formatXAxisLabel: 'Short Month & Day',
  keepTooltipInsideContainer: false,
  showLegend: true,
  axisColor: "#7E8B9D",
  labelPosition: 'top',
  labelAlignment: 'right'
};



