import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const InboxFill = (props: SvgProps) => {
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
        d="M12.001 0c-6.632 0-12 5.367-12 12 0 6.632 5.367 12 12 12 6.632 0 12-5.367 12-12s-5.367-12-12-12Zm1.232 16.763c0 .38-.553.758-1.232.758-.71 0-1.216-.379-1.216-.758v-6.018c0-.442.505-.742 1.216-.742.68 0 1.232.3 1.232.742v6.018ZM12.001 8.55c-.726 0-1.295-.537-1.295-1.138 0-.6.569-1.121 1.295-1.121.711 0 1.28.521 1.28 1.121S12.712 8.55 12 8.55Z"
        fill={fill}
      />
    </Svg>
  )
}

InboxFill.defaultProps = {
  fill: '#3B533B',
  width: 24,
  height: 24,
}

export default React.memo(InboxFill)
