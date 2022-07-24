import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const CheckboxChecked = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="m10 17-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8l-9 9Zm9-14H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
        fill={fill}
      />
    </Svg>
  )
}

CheckboxChecked.defaultProps = {
  fill: '#558F4D',
  width: 24,
  height: 24,
}

export default React.memo(CheckboxChecked)
