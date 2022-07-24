import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Bed = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <Path
        d="M3.5 7C4.33 7 5 6.33 5 5.5S4.33 4 3.5 4 2 4.67 2 5.5 2.67 7 3.5 7Zm0-2c.275 0 .5.225.5.5s-.225.5-.5.5a.501.501 0 0 1-.5-.5c0-.275.225-.5.5-.5Zm6-1.5h-4v4h-4v-5h-1V10h1V8.5h9V10h1V5.5a2 2 0 0 0-2-2Zm1 4h-4v-3h3c.55 0 1 .45 1 1v2Z"
        fill={fill}
      />
    </Svg>
  )
}

Bed.defaultProps = {
  fill: '#42494D',
  width: 12,
  height: 12,
}

export default React.memo(Bed)
