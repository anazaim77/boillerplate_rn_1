import colors from '@/Config/colors'
import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowDown = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
        fill={fill}
      />
    </Svg>
  )
}

ArrowDown.defaultProps = {
  fill: colors.primary[29],
  width: 24,
  height: 24,
}

export default React.memo(ArrowDown)
