import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Shower = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <Path
        d="M9.5 6v.5c0 .955-.535 1.785-1.325 2.205L8.5 10h-1l-.25-1h-4.5l-.25 1h-1l.325-1.295A2.493 2.493 0 0 1 .5 6.5V6H0V5h9V1.5a.5.5 0 0 0-.5-.5c-.25 0-.44.17-.5.395.315.27.5.67.5 1.105h-3A1.5 1.5 0 0 1 7 1h.085A1.502 1.502 0 0 1 10 1.5V6h-.5Zm-1 0h-7v.5A1.5 1.5 0 0 0 3 8h4a1.5 1.5 0 0 0 1.5-1.5V6Z"
        fill={fill}
      />
    </Svg>
  )
}

Shower.defaultProps = {
  fill: '#42494D',
  width: 12,
  height: 12,
}

export default React.memo(Shower)
