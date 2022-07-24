import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const CircleChevronRight = (props: SvgProps) => {
  const { width, height } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M10.022 19.355 15.365 14l-5.343-5.355L11.667 7l7 7-7 7-1.645-1.645Z"
        fill="#fff"
      />
    </Svg>
  )
}

CircleChevronRight.defaultProps = {
  fill: '#B3B6B8',
  width: 32,
  height: 32,
}

export default React.memo(CircleChevronRight)
