import React from 'react'
import { SvgProps } from 'react-native-svg'

export type IconName =
  | 'home'
  | 'menu'
  | 'reycard'
  | 'reycare'
  | 'profile'
  | string

const IconMap: { [key: IconName]: React.FC } = {
  home: require('./Home').default,
  profile: require('./User').default,
}

const TabBarIcon = (props: SvgProps & { name: IconName }) => {
  const IconComponent = IconMap[props.name]
  return <IconComponent {...props} />
}

export default React.memo(TabBarIcon)
