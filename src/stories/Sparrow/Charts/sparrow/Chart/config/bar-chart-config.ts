import { ANIMATION_DURATION, ANIMATION_STEP_DELAY } from '../constants'

const barChartConfig = {
  chart: {
    stacked: false,
    barOpacity: 0.7,
    lineOpacity: 1,
    aspectRatio: 2,
    showBadge: false,
  },
  title: {
    align: 'left',
    style: {}
  },
  margin: {
    left: 40,
    right: 10,
    top: 10,
    bottom: 20
  },
  scales: {
    y: {
      hide: false,
      preSign: '',
      postSign: '',
      zeroHeight: 2,
      labelSpace: 40,
      styles: {}
    },
    x: {
      labelOverflow: 'hide',
      idxShowLabel: 2,
      hide: false,
      labelSpace: 60,
      formatLabel: null,
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

export default barChartConfig
