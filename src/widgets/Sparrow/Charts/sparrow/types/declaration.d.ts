declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
  >
  const src: string
  export default src
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}
declare module '*.module.css' {
  const content: Record<string, string>
  export default content
}

declare module 'd3-v6-tip'
