import React from 'react'
import { render } from '@testing-library/react'
import Chart from './index'

describe('Chart', () => {
  it('Goal chart renders correctly', () => {
    const { container } = render(
      <Chart
        type='goal'
        stepColors={['#FF5860']}
        data={71}
        width={100}
        height={100}
        useBackground
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('Goal chart width value renders correctly', () => {
    const { container } = render(
      <Chart
        type='goal'
        stepColors={['#FF5860', '#FF9600', '#33C635']}
        data={71}
        width={100}
        height={100}
        showValue
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('Goal chart width image renders correctly', () => {
    const { container } = render(
      <Chart
        type='goal'
        stepColors={['#FF5860', '#FF9600', '#33C635']}
        imgSrc='/path/to/image'
        data={71}
        width={100}
        height={100}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('Throws error if it is not a supported variant', () => {
    expect.assertions(1)
    try {
      expect(render(<Chart type='3d' />)).toThrowError()
    } catch (e) {
      expect(e.message).toMatch(/Unsupported chart type 3d/gi)
    }
  })
})
