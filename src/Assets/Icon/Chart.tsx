import * as React from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

const ArrowLeft = (props: SvgProps) => {
  const { width, height } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="m28.333 15-5.71 8.566a1 1 0 0 1-1.727-.107l-1.792-3.584a1 1 0 0 0-1.726-.108l-5.711 8.566"
        stroke="#3E563E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={5} y={5} width={30} height={30} rx={2} stroke="#3E563E" />
    </Svg>
  )
}

ArrowLeft.defaultProps = {
  fill: '#3E563E',
  width: 40,
  height: 40,
}

export default React.memo(ArrowLeft)
