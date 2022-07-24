import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Checkbox = (props: SvgProps) => {
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
        d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 2v14H5V5h14Z"
        fill={fill}
      />
    </Svg>
  )
}

Checkbox.defaultProps = {
  fill: '#42494D',
  width: 24,
  height: 24,
}

export default React.memo(Checkbox)
