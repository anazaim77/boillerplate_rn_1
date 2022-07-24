import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Star = (props: SvgProps) => {
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
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27Z"
        fill="#42494D"
      />
    </Svg>
  )
}

Star.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(Star)
