import React from 'react'
import { useWindowDimensions } from 'react-native'
import RNHTML from 'react-native-render-html'
import { tw } from '@/Utils'

interface Props {
  html: string
}

const RenderHtml: React.FC<Props> = ({ html }) => {
  const { width } = useWindowDimensions()

  return (
    <RNHTML
      contentWidth={width}
      source={{ html: html.replace(/\r\n/g, '<br/>') }}
      baseStyle={tw`text-neutral-500 text-sm`}
    />
  )
}

export default RenderHtml
