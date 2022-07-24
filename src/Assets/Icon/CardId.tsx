import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const CardId = (props: SvgProps) => {
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
        d="M12.858 10.072a.643.643 0 0 1 .643-.643h4.714a.643.643 0 0 1 0 1.285H13.5a.643.643 0 0 1-.643-.642Zm.643 2.785a.643.643 0 1 0 0 1.286h4.714a.643.643 0 1 0 0-1.286H13.5Zm-3.858-2.785a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-3.642 2.357h4.285a.857.857 0 0 1 .857.857v.428s-.428 2.143-3 2.143c-2.571 0-3-2.143-3-2.143v-.428a.857.857 0 0 1 .858-.857ZM1.718 5.786a2.357 2.357 0 0 1 2.357-2.357H19.93a2.357 2.357 0 0 1 2.357 2.357v12.428a2.357 2.357 0 0 1-2.357 2.358H4.076a2.357 2.357 0 0 1-2.357-2.358V5.786Zm2.357-1.072c-.591 0-1.071.48-1.071 1.072v12.428c0 .592.48 1.072 1.071 1.072H19.93c.591 0 1.072-.48 1.072-1.072V5.786c0-.592-.48-1.072-1.072-1.072H4.076Z"
        fill={fill}
      />
    </Svg>
  )
}

CardId.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(CardId)
