import { getTwStyle } from '@/Utils'
import React, { useMemo } from 'react'
import {
  StyleProp,
  ViewStyle,
  ScrollView,
  ScrollViewProps,
  NativeScrollEvent,
} from 'react-native'

const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) => {
  const paddingToBottom = 20
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  )
}
interface Props
  extends Omit<ScrollViewProps, 'style' | 'contentContainerStyle'> {
  style?: StyleProp<ViewStyle> | string
  contentContainerStyle?: StyleProp<ViewStyle> | string
  onLoadMore?: () => void
}

const WTScrollView = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])
  const contentContainerStyle = useMemo(
    () => getTwStyle(props.contentContainerStyle),
    [props],
  )

  return (
    <ScrollView
      {...props}
      style={style}
      contentContainerStyle={contentContainerStyle}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          props.onLoadMore?.()
        }
      }}
      scrollEventThrottle={400}
    />
  )
}

WTScrollView.defaultProps = {
  style: undefined,
  contentContainerStyle: undefined,
  onLoadMore: () => undefined,
}

export default WTScrollView
