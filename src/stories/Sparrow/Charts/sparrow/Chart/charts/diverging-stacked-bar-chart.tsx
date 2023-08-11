import React, { FC, useEffect, useRef } from 'react'
import Chart from '../native/chart'

const DivergingStackedBarChart: FC<any> = ({ data, config }) => {
  const ref = useRef(null)
  const chartRef = useRef<any>(null)

  useEffect(() => {
    if (ref.current != null) {
      chartRef.current = new Chart('diverging', ref.current, data, config)
    }
  }, [])

  useEffect(() => {
    if (chartRef.current != null) {
      chartRef.current.render(data, config)
    }
  }, [chartRef.current, data, config])

  return <div ref={ref} />
}

export default DivergingStackedBarChart
