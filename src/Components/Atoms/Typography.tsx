/* libraries */
import { TypographySize, TypographyWeight } from '@/Types/Component'
import { getTwColor, getTwStyle, tw } from '@/Utils'
import React, { FC, useMemo } from 'react'
import {
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native'
import WTView from '../Native/WTView'
import WTText from '../Native/WTText'

interface Props extends Omit<TextProps, 'style'> {
  size?: TypographySize
  weight?: TypographyWeight
  children?: string | React.ReactNode
  style?: StyleProp<TextStyle> | string
  containerStyle?: StyleProp<ViewStyle> | string
  color?: string
  onPress?: () => void
  withContainer?: boolean
}

export type TypographyProps = Props

const Typography: FC<Props> = ({
  size,
  weight,
  children,
  style,
  containerStyle,
  color,
  withContainer,
  ...props
}) => {
  const fontSize = useMemo(() => {
    const sizeMap: Record<TypographySize, number> = {
      '2xs': 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
    }
    return sizeMap[size ?? 'md']
  }, [size])

  const fontFamily = useMemo(() => {
    const weightMap: Record<TypographyWeight, string> = {
      regular: 'Poppins-Regular',
      medium: 'Poppins-Medium',
      bold: 'Poppins-Bold',
    }
    return weightMap[weight ?? 'regular']
  }, [weight])

  const viewStyle = useMemo(() => {
    return [styles.viewContainer, getTwStyle(containerStyle)]
  }, [containerStyle])

  const textStyle = useMemo(() => {
    return [
      styles.viewTitle,
      {
        fontFamily,
        fontSize: fontSize,
        lineHeight: fontSize * 1.5,
        color: getTwColor(color) ?? StyleSheet.flatten(styles.viewTitle).color,
      },
      getTwStyle(style),
    ] as TextStyle
  }, [fontFamily, color, fontSize, style])

  const renderText = useMemo(
    () => (
      <WTText style={textStyle} {...props}>
        {children}
      </WTText>
    ),
    [textStyle, children, props],
  )

  if (!withContainer) {
    return renderText
  }
  return <WTView style={viewStyle}>{renderText}</WTView>
}

Typography.defaultProps = {
  size: 'md',
  weight: 'regular',
  children: undefined,
  style: undefined,
  containerStyle: undefined,
  color: undefined,
  onPress: undefined,
  withContainer: true,
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    flexShrink: 1,
    alignItems: 'center',
  },
  viewTitle: {
    color: tw.color('neutral-500'),
  },
})

export default React.memo(Typography)
