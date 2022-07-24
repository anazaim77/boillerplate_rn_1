import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronDown = (props: SvgProps) => {
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
        d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronDown.defaultProps = {
  fill: '#B3B6B8',
  width: 24,
  height: 24,
}

export default React.memo(ChevronDown)
