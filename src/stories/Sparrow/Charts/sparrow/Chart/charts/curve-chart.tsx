/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef, FC, useEffect } from 'react'
import Chart from '../native/chart'

const CurveChart: FC<any> = ({ data, config }) => {
  const ref = useRef(null)
  const chartRef = useRef<any>(null)

  useEffect(() => {
    if (ref.current != null) {
      chartRef.current = new Chart('curve', ref.current, data, config)
    }
  }, [])

  useEffect(() => {
    if (chartRef.current != null) {
      chartRef.current.render(data, config)
    }
  }, [chartRef.current, data, config])

  return <div ref={ref} />
}

export default CurveChart
