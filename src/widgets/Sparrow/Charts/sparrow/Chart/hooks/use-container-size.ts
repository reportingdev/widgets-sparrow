import { debounce } from 'lodash'
import { useLayoutEffect, useRef, useState } from 'react'

export const createSizeListener = (
  listener: any,
  debounceTimeout: number = 100
): any => {
  const resizeCallback = (entries: any): void => {
    let width
    let height
    const entry = entries[0]

    if (entry.contentBoxSize != null) {
      // Firefox implements `contentBoxSize` as a single content rect, rather than an array
      const contentBoxSize = Array.isArray(entry.contentBoxSize)
        ? entry.contentBoxSize[0]
        : entry.contentBoxSize
      width = contentBoxSize.inlineSize
      height = contentBoxSize.blockSize
    } else {
      width = entry.contentRect.width
      height = entry.contentRect.height
    }
    listener({ width, height })
  }

  const resizeObserver = new window.ResizeObserver(
    debounce(resizeCallback, debounceTimeout)
  )

  return resizeObserver
}

const useContainerSize = (): any => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const ref = useRef(null)
  const listener = createSizeListener(setContainerSize)

  useLayoutEffect((): any => {
    const container = ref.current

    if (container !== null) {
      listener.observe(container as any)
    }

    return (): void => {
      if (container !== null) {
        listener.unobserve(container as any)
      }
    }
  }, [ref.current])

  const { width, height } = containerSize

  return { ref, width, height }
}

export default useContainerSize

