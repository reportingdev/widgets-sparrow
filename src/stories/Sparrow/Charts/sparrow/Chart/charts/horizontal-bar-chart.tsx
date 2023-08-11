import React, { FC } from 'react'
import { HorizontalBarProps as Props } from './types'

import s from '../style/chart.module.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const HorizontalBarChart: FC<Props> = ({
  data,
  width,
  height,
  colors = {}
}) => {
  // add height/width style to div if properties exist
  // - otherwise defaults to width: 100%
  const size = {
    ...(width != null && { width: `${width}px` }),
    ...(height != null && { height: `${height}px` })
  }
  return (
    <div className={s.HorizontalBar} style={size}>
      <div className={s.HorizontalBar__line}>
        {Object.keys(data).map((key: string) => (
          <div
            className={s.HorizontalBar__percent}
            key={colors[key]}
            style={{ width: `${data[key]}%`, backgroundColor: colors[key] }}
          />
        ))}
      </div>
      <div className={s.HorizontalBar__legend}>
        {Object.keys(data).map((key: string) => (
          <div className={s['HorizontalBar__legend-item']} key={key}>
            <span
              className={`${s['HorizontalBar__legend-value']} ${
                s[`HorizontalBar__legend-value--${key}`]
              }`}
            >
              {`${data[key]}%`}
            </span>
            <span className={s['HorizontalBar__legend-label']}>{key}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalBarChart
