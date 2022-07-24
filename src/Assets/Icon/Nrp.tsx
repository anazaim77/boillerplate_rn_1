import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Nrp = (props: SvgProps) => {
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
        d="M12 15h-2v-2h2v2Zm6 0h-4v-2h4v2ZM8 11H6V9h2v2Zm10 0h-8V9h8v2Zm2 9H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 6v12h16V6H4Z"
        fill={fill}
      />
    </Svg>
  )
}

Nrp.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(Nrp)
