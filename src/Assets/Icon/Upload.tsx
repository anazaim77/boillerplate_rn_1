import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Upload = (props: SvgProps) => {
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
        d="M2 12h2v5h16v-5h2v5c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-5ZM12 2 6.46 7.46l1.42 1.42L11 5.75V15h2V5.75l3.13 3.13 1.42-1.43L12 2Z"
        fill={fill}
      />
    </Svg>
  )
}

Upload.defaultProps = {
  fill: '#558F4D',
  width: 12,
  height: 12,
}

export default React.memo(Upload)
