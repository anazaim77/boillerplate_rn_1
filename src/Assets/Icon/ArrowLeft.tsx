import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowLeft = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowLeft.defaultProps = {
  fill: '#FFFFFF',
  width: 32,
  height: 32,
}

export default React.memo(ArrowLeft)
