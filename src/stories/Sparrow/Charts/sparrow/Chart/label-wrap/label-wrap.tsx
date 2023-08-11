import React, { FC, useState, ReactElement } from 'react'
import classnames from 'classnames'

import Chart from '..'

import s from './style/label.module.css'
//import { formatTipDate } from '../utils'
//import { openSparrowCharts } from '../../utils'

export interface Props {
  chartSettings: any
  title?: string
  //position?: 'top' | 'right' | 'bottom' | 'left'
  //labelsAlign?: 'left' | 'right' | 'center'
}

const LabelsWrap: FC<Props> = ({
  chartSettings,
  title,
}) => {
 
  const [disabledLabels, setDisabledLabels] = useState<string[]>([])
  const { type, data: rawData, config } = chartSettings
  const { datasets } = rawData
  const isLoading = config?.loader?.show ?? false;
  const showLabels = !config?.labels?.hide ?? true
  const position = config?.labels?.position ?? 'top';
  const labelsAlign = config?.labels?.align ?? 'right';
  const labelColor = chartSettings?.scales?.x?.styles?.color ?? '#546070';
  const isSidePosition = position === 'left' || position === 'right'
  const renderLabels = (): ReactElement => {
    const listClasses = classnames(s.labelsList, {
      [s.labelsList__right]: labelsAlign === 'right',
      [s.labelsList__center]: labelsAlign === 'center',
      [s.labelsList__column]: isSidePosition,
      [s.labelsList__full_row]: title != null && !isSidePosition,
      [s.labelsList__firstOrder]:
        title == null && position === 'top'
    })

    const handleLabelClick = (key: string): void => {
      if(isLoading) {return}
      let disabled
      if (disabledLabels.includes(key)) {
        disabled = disabledLabels.filter((k) => k !== key)
      } else {
        disabled = [...disabledLabels, key]
      }

      setDisabledLabels(disabled)
    }

    return (
      <div className={listClasses}>
        {datasets?.map(({ label, backgroundColor }: any) => {
          const wrapClass = classnames(s.labelWrap, {
            [s.labelWrap__off]: disabledLabels.includes(label),
            [s.labelLoading]: isLoading
          })
          return (
            <button
              onClick={() => handleLabelClick(label)}
              key={label}
              className={wrapClass}
            >
              <div
                className={s.labelColor}
                style={{ '--color': backgroundColor } as any}
              />
              <div className={s.labelTitle} style={{ color: labelColor }}>
                {label}
              </div>
            </button>
          )
        })}
      </div>
    )
  }

  const containerClasses = classnames(s.container, {
    [s.container__labelsRight]: position === 'right',
    [s.container__labelsLeft]: position === 'left',
  })

  const chartData = {
    ...rawData,
    datasets: datasets.filter(
      ({ label }: any) => !disabledLabels.includes(label)
    )
  }
  
  const updatedConfig = {
    ...config,
    chart: {
      ...config.chart,
    }
  }

  const titleClasses = classnames(s.title, {
    [s.title__forwardOrder]: title == null && position === 'top'
  })

  // set the styles for the title of the chart
  const titleAlignmentStyles = {
    alignItems: 'flex-start',
    textAlign: 'left',
  } 

  if(config?.title?.align === 'center') {
    titleAlignmentStyles.alignItems = 'center';
    titleAlignmentStyles.textAlign = 'center';
  } else if(config?.title?.align === 'right') {
    titleAlignmentStyles.alignItems = 'flex-end';
    titleAlignmentStyles.textAlign = 'right';
  }
  const titleStyles = {
    ...titleAlignmentStyles,
    ...config?.title?.styles ?? {}
  }

  return (
    <div className={s.card}>
      <div className={s.header} style={titleStyles}>
        {title != null && <div className={titleClasses}>{title}</div>}
      </div>
      {position === 'top' && showLabels === true && renderLabels()}

      <div className={containerClasses}>
        <Chart type={type} data={chartData} config={updatedConfig}/>
        {position !== 'top' && showLabels === true && renderLabels()}
      </div>
    </div>
  )
}

export default LabelsWrap
