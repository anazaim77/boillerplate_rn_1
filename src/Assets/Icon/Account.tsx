import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Account = (props: SvgProps) => {
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
        d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
        fill={fill}
      />
    </Svg>
  )
}

Account.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(Account)
