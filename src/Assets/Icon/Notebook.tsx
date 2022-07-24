import * as React from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

const Notebook = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      {...props}
      fill="none"
    >
      <Rect
        x={3.542}
        y={2.125}
        width={10.625}
        height={13.458}
        rx={2}
        stroke={fill}
      />
      <Path
        d="M10.625 7.083V4.958M2.125 6.375h3.542M2.125 9.208h3.542M2.125 12.75h3.542"
        stroke={fill}
        strokeLinecap="round"
      />
    </Svg>
  )
}

Notebook.defaultProps = {
  fill: '#558F4D',
  width: 17,
  height: 17,
}

export default React.memo(Notebook)
