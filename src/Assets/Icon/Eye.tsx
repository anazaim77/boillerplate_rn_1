import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Eye = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg height={height} width={width} viewBox="0 0 24 24" {...props}>
      <Path
        d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5ZM3.18 12a9.822 9.822 0 0 0 17.64 0 9.821 9.821 0 0 0-17.64 0Z"
        fill={fill}
      />
    </Svg>
  )
}

Eye.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Eye)
