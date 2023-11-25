import { ANIMATION_DURATION } from '../constants'

const curveChartConfig = {
  chart: {
    aspectRatio: 1.5,
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
      hide: false
    }
  },
  tooltip: {
    hide: false
  },
  animation: {
    duration: ANIMATION_DURATION
  },
  loader: {
    show: false,
    label: '',
    color: '#6B7280'
  },
  labels: {
    hide: true,
    position: 'bottom',
    align: 'center',
  },
  title: {
    align: 'center',
    style: {}
  },
}

export default curveChartConfig
