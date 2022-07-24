import { getTwStyle } from '@/Utils'
import React, { useMemo } from 'react'
import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native'

interface Props extends Omit<TextInputProps, 'style'> {
  style?: StyleProp<TextStyle> | string
}

const WTTextInput = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])

  return <TextInput {...props} style={style} />
}

WTTextInput.defaultProps = {
  style: undefined,
}

export default WTTextInput
