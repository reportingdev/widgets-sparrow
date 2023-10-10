import { ANIMATION_DURATION } from '../constants'

const areaChartConfig = {
  chart: {
    aspectRatio: 1
  },
  margin: {
    top: 70,
    bottom: 70,
    right: 70,
    left: 70
  },
  tooltip: {
    hide: false
  },
  animation: {
    duration: ANIMATION_DURATION / 2
  },
  loader: {
    show: false,
    label: 'LOADING DATA',
    color: '#866CFF'
  }
}

export default areaChartConfig
