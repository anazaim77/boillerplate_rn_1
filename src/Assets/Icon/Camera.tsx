import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Agent = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m4.936 3.474-.35 1.085H3.529A3.53 3.53 0 0 0 0 8.089v7.058a3.53 3.53 0 0 0 3.53 3.53h12.942A3.53 3.53 0 0 0 20 15.147V8.088a3.53 3.53 0 0 0-3.53-3.53h-1.057l-.35-1.084a3.529 3.529 0 0 0-3.358-2.445h-3.41a3.53 3.53 0 0 0-3.36 2.445h.001ZM3.53 6.912H6.3l.877-2.714a1.176 1.176 0 0 1 1.12-.816h3.409a1.177 1.177 0 0 1 1.118.816l.877 2.714h2.77a1.176 1.176 0 0 1 1.177 1.176v7.06a1.176 1.176 0 0 1-1.176 1.175H3.529a1.177 1.177 0 0 1-1.176-1.176V8.088a1.176 1.176 0 0 1 1.176-1.176Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.882 11.03a4.118 4.118 0 1 0 8.237-.001 4.118 4.118 0 0 0-8.237 0Zm5.883 0a1.764 1.764 0 1 1-3.53 0 1.764 1.764 0 0 1 3.53 0Z"
        fill={fill}
      />
    </Svg>
  )
}

Agent.defaultProps = {
  fill: '#7B8082',
  width: 20,
  height: 20,
}

export default React.memo(Agent)
