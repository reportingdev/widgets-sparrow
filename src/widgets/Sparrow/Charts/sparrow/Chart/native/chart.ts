import { createSizeListener } from '../hooks/use-container-size'
import AreaChart from './area-chart'
import BarChart from './bar-chart'
import CurveChart from './curve-chart'
import DivergingChart from './diverging-chart'
import DonutChart from './donut-chart'
import PolarChart from './polar-chart'
import SpiderChart from './spider-chart'

class Chart {
  chart: any
  data: any
  config: any
  private width: number
  private height: number
  private readonly listener: any

  constructor (type: string, ref: any, data: any, config: any) {
    this.data = data
    this.config = config
    this.listener = createSizeListener(
      ({ width, height }: { width: number, height: number }) => {
        this.width = width
        this.height = height
        this.render(this.data, this.config)
      }
    )
    this.listener.observe(ref)
    switch (type) {
      case 'bar':
        this.chart = new BarChart(ref)
        break
      case 'area':
        this.chart = new AreaChart(ref)
        break
      case 'curve':
        this.chart = new CurveChart(ref)
        break
      case 'diverging':
        this.chart = new DivergingChart(ref)
        break
      case 'donut':
        this.chart = new DonutChart(ref)
        break
      case 'polar':
        this.chart = new PolarChart(ref)
        break
      case 'spider':
        this.chart = new SpiderChart(ref)
        break
      default:
        throw new Error(`Unsupported chart type ${type}`)
    }
  }

  render (data: any, config: any): void {
    const { chart, width, height } = this
    this.data = data
    this.config = config
    chart.render(width, height, data, config)
  }
}

export default Chart
