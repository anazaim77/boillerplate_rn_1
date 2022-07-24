import { getTwStyle } from '@/Utils'
import React, { useMemo } from 'react'
import {
  ImageBackground,
  ImageBackgroundProps,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native'

interface Props extends Omit<ImageBackgroundProps, 'style' | 'imageStyle'> {
  imageStyle?: StyleProp<ImageStyle> | string
  style?: StyleProp<ViewStyle> | string
  children?: React.ReactNode
}

const WTImageBg = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props.style])
  const imageStyle = useMemo(() => getTwStyle(props.imageStyle), [
    props.imageStyle,
  ])

  return <ImageBackground {...props} style={style} imageStyle={imageStyle} />
}

WTImageBg.defaultProps = {
  style: undefined,
  children: undefined,
  imageStyle: undefined,
}

export default WTImageBg
