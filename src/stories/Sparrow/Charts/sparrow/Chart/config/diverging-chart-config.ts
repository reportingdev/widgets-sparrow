import { ANIMATION_DURATION } from '../constants'

const divergingChartConfig = {
  margin: { top: 50, right: 20, bottom: 10, left: 65 },
  chart: {
    aspectRatio: 3,
    barPadding: 0.3,
    barHeight: 0,
    isAllPositive: false
  },
  scales: {
    y: {
      hide: false,
      styles: {}
    },
    x: {
      ticks: 10,
      hide: false,
      styles: {}
    }
  },
  tooltip: {
    hide: false,
    showPercent: true
  },
  animation: {
    duration: ANIMATION_DURATION
  },
  loader: {
    show: false,
    label: 'LOADING DATA',
    color: '#866CFF'
  }
}

export default divergingChartConfig
