import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const CHeck = (props: SvgProps) => {
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
        d="M10.25 14.45 7.8 12l-.817.817 3.267 3.266 7-7-.817-.816-6.183 6.183Z"
        fill={fill}
      />
    </Svg>
  )
}

CHeck.defaultProps = {
  fill: '#B3B6B8',
  width: 24,
  height: 24,
}

export default React.memo(CHeck)
