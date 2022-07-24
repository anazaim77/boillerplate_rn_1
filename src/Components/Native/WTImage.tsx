import { getTwStyle } from '@/Utils'
import React, { useMemo } from 'react'
import { StyleProp, Image, ImageStyle, ImageProps } from 'react-native'

interface Props extends Omit<ImageProps, 'style'> {
  style?: StyleProp<ImageStyle> | string
}

const WTImage = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])

  return <Image {...props} style={style} />
}

WTImage.defaultProps = {
  style: undefined,
}

export default WTImage
