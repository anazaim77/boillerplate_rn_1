import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const LuasTanah = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Path
        d="M14.25 9h-1.5v2.25H10.5v1.5h3.75V9Zm-9-2.25H7.5v-1.5H3.75V9h1.5V6.75Zm10.5-4.5H2.25a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm0 12H2.25V3.75h13.5v10.5Z"
        fill={fill}
      />
    </Svg>
  )
}

LuasTanah.defaultProps = {
  fill: '#7B8082',
  width: 18,
  height: 18,
}

export default React.memo(LuasTanah)
