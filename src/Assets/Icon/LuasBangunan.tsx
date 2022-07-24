import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const LuasBangunan = (props: SvgProps) => {
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
        d="M14.25 2.25v13.5h-4.5v-2.625h-1.5v2.625h-4.5V2.25h10.5Zm-3 3h1.5v-1.5h-1.5v1.5Zm-3 0h1.5v-1.5h-1.5v1.5Zm-3 0h1.5v-1.5h-1.5v1.5Zm6 3h1.5v-1.5h-1.5v1.5Zm-3 0h1.5v-1.5h-1.5v1.5Zm-3 0h1.5v-1.5h-1.5v1.5Zm6 3h1.5v-1.5h-1.5v1.5Zm-3 0h1.5v-1.5h-1.5v1.5Zm-3 0h1.5v-1.5h-1.5v1.5Zm6 3h1.5v-1.5h-1.5v1.5Zm-6 0h1.5v-1.5h-1.5v1.5ZM15.75.75H2.25v16.5h13.5V.75Z"
        fill={fill}
      />
    </Svg>
  )
}

LuasBangunan.defaultProps = {
  fill: '#7B8082',
  width: 18,
  height: 18,
}

export default React.memo(LuasBangunan)
