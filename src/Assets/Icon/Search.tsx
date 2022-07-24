import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Search = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M12.917 12.167h-.659l-.233-.225a5.392 5.392 0 0 0 1.308-3.525 5.417 5.417 0 1 0-5.416 5.416 5.393 5.393 0 0 0 3.525-1.308l.225.233v.659l4.166 4.158 1.242-1.242-4.158-4.166Zm-5 0a3.745 3.745 0 0 1-3.75-3.75 3.745 3.745 0 0 1 3.75-3.75 3.745 3.745 0 0 1 3.75 3.75 3.745 3.745 0 0 1-3.75 3.75Z"
        fill={fill}
      />
    </Svg>
  )
}

Search.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(Search)
