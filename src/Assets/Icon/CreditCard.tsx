import * as React from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

const CreditCard = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Rect x={5} y={10} width={30} height={21.667} rx={2} stroke="#3E563E" />
      <Path
        d="M11.667 25h.016M6.667 18.333H35"
        stroke="#3E563E"
        strokeLinecap="round"
      />
    </Svg>
  )
}

CreditCard.defaultProps = {
  fill: '#3E563E',
  width: 40,
  height: 40,
}

export default React.memo(CreditCard)
