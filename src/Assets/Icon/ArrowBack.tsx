import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowBack = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowBack.defaultProps = {
  fill: '#42494D',
  width: 24,
  height: 24,
}

export default React.memo(ArrowBack)
