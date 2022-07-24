import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Gallery = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M19 19H5V5h14v14Zm0-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-5.04 9.29-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71Z"
        fill={fill}
      />
    </Svg>
  )
}

Gallery.defaultProps = {
  fill: '#558F4D',
  width: 24,
  height: 24,
}

export default React.memo(Gallery)
