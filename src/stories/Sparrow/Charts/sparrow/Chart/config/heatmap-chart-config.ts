import { ANIMATION_DURATION } from '../constants'

const heatmapConfig = {
  chart: {
    aspectRatio: 3,
    color: '#866cff',
    offset: { vertical: 7, horizontal: 5 }
  },
  margin: {
    left: 35,
    right: 0,
    top: 5,
    bottom: 15
  },
  animation: {
    duration: ANIMATION_DURATION / 4
  }
}

export default heatmapConfig
