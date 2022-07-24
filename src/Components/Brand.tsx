import React from 'react'
import { View } from 'react-native'

interface Props {
  height?: number | string
  width?: number | string
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const Brand = ({ height, width }: Props) => {
  return <View style={{ height, width }}></View>
}

Brand.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default Brand
