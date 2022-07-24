import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const LockOutline = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 0 4Zm6 3V10H6v10h12Zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 1 1 10 0v2h1Zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
        fill={fill}
      />
    </Svg>
  )
}

LockOutline.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(LockOutline)
