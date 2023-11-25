import { ANIMATION_DURATION, ANIMATION_STEP_DELAY } from '../constants'

const areaChartConfig = {
  chart: {
    aspectRatio: 2,
    lineOpacity: 1,
    showBadge: false,
  },
  title: {
    align: 'left',
    style: {}
  },
  margin: {
    left: 40,
    right: 10,
    top: 20,
    bottom: 20
  },
  scales: {
    y: {
      hide: false,
      labelSpace: 40,
      setUnreachableValues: true,
      formatLabel: null,
      styles: {}
    },
    x: {
      hide: false,
      labelOverflow: 'hide',
      labelSpace: 60,
      styles: {}
    }
  },
  tooltip: {
    hide: false,
    showInsideContainer: false
  },
  animation: {
    duration: ANIMATION_DURATION,
    stepDelay: ANIMATION_STEP_DELAY
  },
  loader: {
    show: false,
    label: '',
    color: '#6B7280'
  },
  labels: {
    hide: false,
    position: 'bottom',
    align: 'right',
  }
}

export default areaChartConfig
