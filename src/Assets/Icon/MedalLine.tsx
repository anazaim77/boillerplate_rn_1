import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const MedalLine = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <Path
        d="M10 5.833a6.667 6.667 0 1 1 0 13.334 6.667 6.667 0 0 1 0-13.334ZM10 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-.269 1.795a.3.3 0 0 1 .538 0l.833 1.688 1.863.271a.3.3 0 0 1 .166.512l-1.348 1.313.319 1.856a.3.3 0 0 1-.436.316L10 14.375l-1.666.876a.3.3 0 0 1-.435-.317l.318-1.855-1.348-1.314a.3.3 0 0 1 .166-.512l1.863-.27.833-1.688ZM14.2 1.667a.8.8 0 0 1 .8.8v1.325a.8.8 0 0 1-.287.615l-.849.708a8.28 8.28 0 0 0-3.03-.908v-1.74a.8.8 0 0 1 .8-.8H14.2Zm-5.833-.001a.8.8 0 0 1 .8.8v1.741a8.279 8.279 0 0 0-3.03.907l-.85-.707A.8.8 0 0 1 5 3.792V2.467a.8.8 0 0 1 .8-.8l2.567-.001Z"
        fill={fill}
      />
    </Svg>
  )
}

MedalLine.defaultProps = {
  fill: '#42494D',
  width: 24,
  height: 24,
}

export default React.memo(MedalLine)
