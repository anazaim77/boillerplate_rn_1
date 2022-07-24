import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const MenuBaltab = (props: SvgProps) => {
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
        d="M19.5 7h-1V6a3 3 0 0 0-3-3h-10a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3Zm-14-2h10a1 1 0 0 1 1 1v1h-11a1 1 0 0 1 0-2Zm15 10h-1a1 1 0 0 1 0-2h1v2Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V8.83a3 3 0 0 0 1 .17h14a1 1 0 0 1 1 1v1Z"
        fill={fill}
      />
    </Svg>
  )
}

MenuBaltab.defaultProps = {
  fill: '#6FA068',
  width: 20,
  height: 20,
}

export default React.memo(MenuBaltab)
