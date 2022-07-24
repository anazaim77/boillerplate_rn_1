import colors from '@/Config/colors'
import * as React from 'react'
import WTView from '../Native/WTView'

interface DividerProps {
  height?: number | string
  // width?: number | string
  color?: string
  style?: string
}

const Divider = ({ height, color, style }: DividerProps) => {
  const heightUsed = React.useMemo(
    () => (typeof height === 'number' ? `${height}px` : height),
    [height],
  )
  // const widthUsed = React.useMemo(
  //   () => (typeof width === 'number' ? `${width}px` : width),
  //   [width],
  // )
  return (
    <WTView style={`${height && `h-[${heightUsed}]`} bg-[${color}] ${style}`} />
  )
}

Divider.defaultProps = {
  height: 2,
  // width: 2,
  color: colors.neutral[200],
  style: '',
}

export default React.memo(Divider)
