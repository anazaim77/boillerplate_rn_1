import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const MenuKPR = (props: SvgProps) => {
  const { width, height, fill } = props

  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <Path
        d="m22.16 10.25-9-8a1 1 0 0 0-1.32 0l-9 8A1 1 0 0 0 3.5 12h1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9h1a1 1 0 0 0 .66-1.75ZM13.5 20h-2v-3a1 1 0 0 1 2 0v3Zm5 0h-3v-3a3 3 0 0 0-6 0v3h-3v-8h12v8ZM6.13 10l6.37-5.66L18.87 10H6.13Z"
        fill={fill}
      />
    </Svg>
  )
}

MenuKPR.defaultProps = {
  fill: '#6FA068',
  width: 20,
  height: 20,
}

export default React.memo(MenuKPR)
