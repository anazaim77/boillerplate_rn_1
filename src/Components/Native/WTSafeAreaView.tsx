import { getTwStyle } from '@/Utils'
import React, { useMemo } from 'react'
import {
  SafeAreaView as RNSafeAreaView,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-context'

interface Props extends Omit<SafeAreaViewProps, 'style'> {
  style?: StyleProp<ViewStyle> | string
}

const WTSafeAreaView = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])

  return <RNSafeAreaView {...props} style={style} />
}

WTSafeAreaView.defaultProps = {
  style: undefined,
}

export default WTSafeAreaView
