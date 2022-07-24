import { getTwStyle } from '@/Utils'
import React, { useMemo } from 'react'
import { StyleProp, TextProps, TextStyle, Text } from 'react-native'

interface Props extends Omit<TextProps, 'style'> {
  style?: StyleProp<TextStyle> | string
}

const WTText = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])

  return <Text {...props} style={style} />
}

WTText.defaultProps = {
  style: undefined,
}

export default WTText
