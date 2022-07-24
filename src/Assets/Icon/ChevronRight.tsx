import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronRight: React.FC = (props: SvgProps) => {
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
        d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z"
        fill={fill}
      />
    </Svg>
  )
}

ChevronRight.defaultProps = {
  fill: '#B3B6B8',
  width: 24,
  height: 24,
}

export default React.memo(ChevronRight)
