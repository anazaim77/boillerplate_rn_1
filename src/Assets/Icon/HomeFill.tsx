import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const HomeFill = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M27.939 16.694 16.57 3.42c-.479-.56-1.398-.56-1.877 0L3.325 16.694c-.164.191-.271.428-.31.681-.038.254-.005.513.095.748.202.479.654.787 1.153.787H6.79v9.292c0 .352.134.69.37.938.237.25.559.39.894.39h3.79c.334 0 .655-.14.892-.39.237-.248.37-.586.37-.938v-5.31h5.053v5.31c0 .352.133.69.37.938.237.25.558.39.893.39h3.79c.335 0 .656-.14.893-.39.237-.248.37-.586.37-.938V18.91H27c.245.001.484-.073.69-.212a1.31 1.31 0 0 0 .467-.574c.1-.235.132-.495.093-.749a1.354 1.354 0 0 0-.311-.68Z"
        fill={fill}
      />
    </Svg>
  )
}

HomeFill.defaultProps = {
  fill: '#FFFFFF',
  width: 32,
  height: 32,
}

export default React.memo(HomeFill)
