import * as React from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

const Plane = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <Rect y={0.5} width={width} height={height} rx={18} fill={fill} />
      <Path
        d="m24.95 16.267-11.667-5.834a2.5 2.5 0 0 0-3.4 3.25l2 4.475a.885.885 0 0 1 0 .684l-2 4.475a2.5 2.5 0 0 0 2.283 3.516c.39-.004.775-.095 1.125-.266l11.667-5.834a2.5 2.5 0 0 0 0-4.466h-.008Zm-.742 2.975-11.667 5.833a.833.833 0 0 1-1.125-1.083l1.992-4.475a1.68 1.68 0 0 0 .067-.184h5.741a.833.833 0 1 0 0-1.666h-5.741a1.68 1.68 0 0 0-.067-.184l-1.992-4.475a.833.833 0 0 1 1.125-1.083l11.667 5.833a.834.834 0 0 1 0 1.484Z"
        fill="#fff"
      />
    </Svg>
  )
}

Plane.defaultProps = {
  fill: '#558F4D',
  width: 36,
  height: 36,
}

export default React.memo(Plane)
