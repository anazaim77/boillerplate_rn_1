import * as React from 'react'
import Svg, { SvgProps, Path, G, Defs, ClipPath } from 'react-native-svg'

const Pencil = (props: SvgProps) => {
  const { fill } = props
  return (
    <Svg width={17} height={17} viewBox="0 0 17 17" {...props} fill="none">
      <G fill={fill}>
        <Path d="M10.498 2.856 1.145 12.21a.373.373 0 0 0-.098.171L.011 16.542a.37.37 0 0 0 .446.447l4.161-1.037a.368.368 0 0 0 .171-.097L14.143 6.5l-3.645-3.645ZM16.461 1.58 15.42.54c-.696-.696-1.909-.695-2.604 0l-1.275 1.275 3.645 3.645 1.275-1.275c.348-.347.54-.81.54-1.302a1.83 1.83 0 0 0-.54-1.302Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={fill} d="M0 0h17v17H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Pencil.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(Pencil)
