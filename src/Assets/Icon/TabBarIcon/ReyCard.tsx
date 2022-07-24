import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ReyCard = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 26 20"
      fill="none"
      {...props}
    >
      <Path
        d="M24.6462 2.6831C24.6462 1.1872 23.4323 2.00192e-09 21.9631 2.00192e-09H3.1831C1.6872 -5.69242e-05 0.5 1.21395 0.5 2.6831V3.65842H24.6462V2.6831Z"
        fill={fill}
      />
      <Path d="M0.5 5.36621H24.6462V7.3169H0.5V5.36621Z" fill={fill} />
      <Path
        d="M18.1833 16.3415H20.0125C20.5582 16.3415 20.9879 15.8977 20.9879 15.3662C20.9879 14.8205 20.5441 14.3909 20.0125 14.3909H18.1833C17.6376 14.3909 17.208 14.8348 17.208 15.3662C17.208 15.9118 17.6518 16.3415 18.1833 16.3415Z"
        fill={fill}
      />
      <Path
        d="M0.5 17.3169C0.5 18.8128 1.71395 20 3.1831 20H21.9631C23.459 20 24.6462 18.786 24.6462 17.3169V9.02466H0.5V17.3169ZM18.1832 12.6831H20.0124C21.4801 12.6831 22.6955 13.8688 22.6955 15.3662C22.6955 16.8339 21.5098 18.0493 20.0124 18.0493H18.1832C16.7156 18.0493 15.5001 16.8636 15.5001 15.3662C15.5001 13.8985 16.6858 12.6831 18.1832 12.6831Z"
        fill={fill}
      />
    </Svg>
  )
}

ReyCard.defaultProps = {
  fill: '#B3B6B8',
  width: 26,
  height: 20,
}

export default React.memo(ReyCard)
