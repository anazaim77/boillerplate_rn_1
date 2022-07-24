import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const InboxFill = (props: SvgProps) => {
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
        d="M19.212 20.308h-5.859c-.441 0-.8.359-.8.8v1.797c0 .442.358.801.8.801h5.86c.44 0 .8-.359.8-.8v-1.798c0-.441-.36-.8-.8-.8Zm-.229 2.369h-5.401v-1.34h5.401v1.34Z"
        fill={fill}
      />
      <Path
        d="m29.305 15.861.008-.004-3.86-7.633c-.313-.616-.936-1-1.627-1h-.734v-.71A.515.515 0 0 0 22.578 6H9.988a.515.515 0 0 0-.515.515v.71H8.74c-.69 0-1.314.383-1.626 1l-3.86 7.632.008.004c-.166.273-.261.592-.261.933v8.064c0 .994.809 1.803 1.803 1.803h22.96c.994 0 1.802-.81 1.802-1.803v-8.064c0-.341-.095-.66-.26-.933Zm-6.213-7.493h.734c.257 0 .49.143.606.373l3.16 6.25h-2.149v-1.923a.515.515 0 0 0-.515-.515h-.636V9.791a.515.515 0 0 0-.515-.514h-.685v-.909Zm1.322 5.215v1.408h-2.717a1.19 1.19 0 0 0-1.083.7l-.741 1.645a.044.044 0 0 1-.04.025h-7.1a.044.044 0 0 1-.04-.025l-.742-1.645a1.19 1.19 0 0 0-1.083-.7H8.152v-1.408h16.262ZM10.503 7.03h11.56v2.247h-11.56V7.03Zm12.759 3.276v2.247H9.303v-2.247h13.959ZM8.134 8.741a.675.675 0 0 1 .605-.373h.734v.909H8.79a.515.515 0 0 0-.515.514v2.762h-.637a.515.515 0 0 0-.515.515v1.923h-2.15l3.162-6.25Zm19.628 16.776H4.803a.66.66 0 0 1-.659-.66v-8.063a.66.66 0 0 1 .66-.659h6.064c.018 0 .033.01.04.026l.742 1.645c.191.425.616.7 1.082.7h7.101a1.19 1.19 0 0 0 1.083-.7l.741-1.645a.044.044 0 0 1 .04-.026h6.065a.66.66 0 0 1 .66.66v8.063a.66.66 0 0 1-.66.659Z"
        fill={fill}
      />
      <Path
        d="M3.5 25.322v-8.5l.5-1.5h5.5l1.5.5 1.5 2h8l.5-1.5 1-1h5.5l1.5 1v9l-1 1H5l-1.5-1Z"
        fill={fill}
      />
    </Svg>
  )
}

InboxFill.defaultProps = {
  fill: '#FFFFFF',
  width: 32,
  height: 32,
}

export default React.memo(InboxFill)
