import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const DoubleChevronRight: React.FC = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg width={width} height={height} viewBox="0 0 8 8" fill="none" {...props}>
      <Path
        d="M1.774 1.859a.646.646 0 0 0-.908-.013.631.631 0 0 0-.013.898L2.33 4.17.853 5.598a.623.623 0 0 0-.138.682.631.631 0 0 0 .828.34.631.631 0 0 0 .206-.138L3.64 4.613a.623.623 0 0 0 .138-.682.623.623 0 0 0-.138-.203l-1.866-1.87Zm5.36 1.87-1.892-1.87a.637.637 0 0 0-.895 0 .622.622 0 0 0 0 .885l1.45 1.427-1.45 1.427a.623.623 0 0 0-.138.682.631.631 0 0 0 .828.34.631.631 0 0 0 .205-.138l1.892-1.869a.623.623 0 0 0 .157-.678.622.622 0 0 0-.132-.207h-.025Z"
        fill={fill}
      />
    </Svg>
  )
}

DoubleChevronRight.defaultProps = {
  fill: '#FFFFFF',
  width: 8,
  height: 8,
}

export default React.memo(DoubleChevronRight)
