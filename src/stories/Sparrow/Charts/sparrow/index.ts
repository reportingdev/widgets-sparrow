import Chart from './Chart'
import LabelsWrap from './Chart/label-wrap/label-wrap'

import './index.css'

declare global {
  interface Window {
    ResizeObserver: any
  }
}

export { LabelsWrap }

export * as Utils from './utils'

export default Chart
