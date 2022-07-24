import { getTwStyle } from '@/Utils'
import React, { useMemo } from 'react'
import { StyleProp, ViewStyle, FlatList, FlatListProps } from 'react-native'

interface Props
  extends Omit<FlatListProps<any>, 'style' | 'contentContainerStyle'> {
  style?: StyleProp<ViewStyle> | string
  contentContainerStyle?: StyleProp<ViewStyle> | string
}

const WTFlatList = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])
  const contentContainerStyle = useMemo(
    () => getTwStyle(props.contentContainerStyle),
    [props],
  )

  return (
    <FlatList
      {...props}
      style={style}
      contentContainerStyle={contentContainerStyle}
    />
  )
}

WTFlatList.defaultProps = {
  style: undefined,
  contentContainerStyle: undefined,
}

export default WTFlatList
