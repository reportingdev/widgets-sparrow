import { ANIMATION_DURATION } from '../constants'

const polarChartConfig = {
  chart: {
    aspectRatio: 1,
    barOpacity: 0.7
  },
  tooltip: {
    hide: false
  },
  animation: {
    duration: ANIMATION_DURATION
  },
  scales: {
    min: 0
  },
  loader: {
    show: false,
    label: '',
    color: '#6B7280'
  }
}

export default polarChartConfig
