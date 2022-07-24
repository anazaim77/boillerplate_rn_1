import { getTwStyle } from '@/Utils'
import React, { useMemo } from 'react'
import { View, StyleProp, ViewStyle, ViewProps } from 'react-native'

interface Props extends Omit<ViewProps, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

const WTView = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])

  return <View {...props} style={style} />
}

WTView.defaultProps = {
  style: undefined,
}

export default WTView
