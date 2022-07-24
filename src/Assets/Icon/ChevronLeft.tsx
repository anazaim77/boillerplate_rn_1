import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronLeft: React.FC = (props: SvgProps) => {
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
        d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronLeft.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(ChevronLeft)
