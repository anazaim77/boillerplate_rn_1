import { getTwStyle } from '@/Utils'
import React, { useMemo } from 'react'
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'

interface Props extends Omit<TouchableOpacityProps, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

const WTTouchableOpacity = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])

  return <TouchableOpacity {...props} style={style} />
}

WTTouchableOpacity.defaultProps = {
  style: undefined,
}

export default WTTouchableOpacity
