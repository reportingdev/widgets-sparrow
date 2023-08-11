import { ANIMATION_DURATION } from '../constants'

const donutChartConfig = {
  chart: {
    arcWidth: 30,
    aspectRatio: 1,
    barOpacity: 0.7,
    padAngle: 0.05,
  },
  title: {
    align: 'center',
    style: {}
  },
  margin: {
    top: 20,
  },
  animation: {
    duration: ANIMATION_DURATION / 2
  },
  tooltip: {
    hide: true
  },
  centerLabel: {
    hide: false,
    hideTitle: false,
    titleStyles: {},
    valueStyles: {}
  },
  loader: {
    show: false,
    label: '',
    color: '#6B7280'
  },
  labels: {
    hide: false,
    position: 'bottom',
    align: 'center',
  }
}

export default donutChartConfig
