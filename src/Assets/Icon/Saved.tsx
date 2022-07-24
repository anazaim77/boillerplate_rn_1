import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Saved = (props: SvgProps) => {
  const { width, height } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path fill="#fff" d="M0 0h24v24H0z" />
      <Path
        d="M18.879 7.286 15 3.222v4.064h3.879Zm.621 1.571h-6V2.571h-9V21.43h15V8.857ZM3.75 1H15l6 6.286v14.928a.805.805 0 0 1-.22.556.733.733 0 0 1-.53.23H3.75a.733.733 0 0 1-.53-.23.805.805 0 0 1-.22-.556V1.786c0-.209.079-.409.22-.556A.733.733 0 0 1 3.75 1Zm7.463 14.294 4.242-4.444 1.06 1.11-5.303 5.556L7.5 13.628l1.06-1.113 2.652 2.779Z"
        fill="#42494D"
      />
    </Svg>
  )
}

Saved.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(Saved)
