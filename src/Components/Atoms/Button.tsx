import React, { useMemo, useCallback } from 'react'
import {
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
} from 'react-native'
import { IconName } from '@/Assets/Icon/Icon'
import { Icon } from '@/Assets'
import colors from '@/Config/colors'
import { ColorVariant } from '@/Types/Component'
import { getTwStyle, tw } from '@/Utils'
import Ripple from 'react-native-material-ripple'
import WTText from '../Native/WTText'

interface IconProps {
  fill?: string
  size?: number
}

type ButtonSize = 'sm' | 'md' | 'lg' | 'xs'

interface Props {
  mode?: 'solid' | 'outlined' | 'ghost'
  variant?: ColorVariant
  size?: ButtonSize
  onPress?: (value?: any) => void
  style?: StyleProp<ViewStyle> | string
  containerStyle?: StyleProp<ViewStyle> | string
  textStyle?: object
  loading?: boolean
  disabled?: boolean
  children?: React.ReactNode | string
  leftIcon?: IconName | ((props: IconProps) => {})
  rightIcon?: IconName | ((props: IconProps) => {})
  full?: boolean
  rounded?: boolean
}

const Button: React.FC<Props> = ({
  mode,
  size,
  onPress,
  style,
  loading,
  disabled,
  children,
  leftIcon,
  rightIcon,
  variant,
  containerStyle,
  full,
  rounded,
}) => {
  const borderRadius = useMemo(() => {
    return rounded ? 99 : 8
  }, [rounded])

  const iconSize = useMemo(() => {
    const sizeMap: { [key: string]: number } = {
      xs: 15,
      sm: 17,
      md: 24,
      lg: 30,
    }
    return sizeMap[size ?? 'md']
  }, [size])

  const stylesParameters = {
    variant,
    disabled,
    borderRadius,
  }
  const Styles = styles(stylesParameters)

  const typographyProps = useMemo(() => {
    let color = 'white'
    if (mode !== 'solid') {
      color = colors[variant ?? 'primary'][600]
    }

    const prop: Record<ButtonSize, string> = {
      xs: 'text-[10px] font-bold',
      sm: 'text-[12px] font-bold',
      md: 'text-[16px] font-bold',
      lg: 'text-[20px] font-bold',
    }

    return { color, ...getTwStyle(prop[size! || 'md']) }
  }, [mode, variant, size])

  const variantStyle = useMemo(() => {
    const styleMode: { [key: string]: StyleProp<ViewStyle> } = {
      solid: Styles.buttonModeContained,
      outlined: Styles.buttonModeOutlined,
      ghost: Styles.buttonModeGhost,
    }

    return [tw`py-2 px-4`, styleMode[mode ?? 'solid']]
  }, [mode, Styles])

  const rippleStyle = useMemo(
    () => [variantStyle, Styles.button, full && tw`fill`, getTwStyle(style)],
    [variantStyle, full, style, Styles.button],
  )

  const viewStyle = useMemo(() => {
    return [
      tw`flex-row`,
      getTwStyle(containerStyle),
      disabled && { opacity: 0.5 },
    ]
  }, [containerStyle, disabled])

  const renderIcon = useCallback(
    (position: 'left' | 'right') => {
      const iconPropsMap = {
        left: leftIcon,
        right: rightIcon,
      }
      const iconStyleMap = {
        left: Styles.containerIconLeft,
        right: Styles.containerIconRight,
      }

      const iconProps = iconPropsMap[position]
      const wrapperStyle = iconStyleMap[position]

      return (
        <View style={[wrapperStyle]}>
          {typeof iconProps === 'string' ? (
            <Icon
              name={iconProps}
              size={iconSize}
              fill={typographyProps.color}
            />
          ) : (
            iconProps?.({
              fill: typographyProps.color,
              size: iconSize,
            })
          )}
        </View>
      )
    },
    [Styles, typographyProps.color, iconSize, leftIcon, rightIcon],
  )

  const content = useMemo(() => {
    if (typeof children === 'string') {
      return (
        <View style={[Styles.containerContent]}>
          {loading && (
            <ActivityIndicator size="small" color={typographyProps.color} />
          )}
          {leftIcon && !loading && renderIcon('left')}
          {!loading && (
            <WTText style={typographyProps} numberOfLines={1}>
              {children}
            </WTText>
          )}
          {rightIcon && !loading && renderIcon('right')}
        </View>
      )
    }

    return children
  }, [
    children,
    loading,
    leftIcon,
    rightIcon,
    Styles.containerContent,
    renderIcon,
    typographyProps,
  ])
  return (
    <View style={viewStyle}>
      <Ripple
        rippleContainerBorderRadius={borderRadius}
        style={rippleStyle}
        onPress={onPress}
        disabled={disabled || loading}
      >
        {content}
      </Ripple>
    </View>
  )
}

Button.defaultProps = {
  onPress: () => null,
  style: {},
  containerStyle: {},
  textStyle: {},
  loading: false,
  disabled: false,
  full: true,
  children: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  variant: 'primary',
  size: 'md',
  mode: 'solid',
  rounded: true,
}

const styles = ({ variant, borderRadius }: any) =>
  StyleSheet.create({
    button: {
      borderRadius,
    },
    buttonModeGhost: tw`bg-transparent`,
    buttonModeOutlined: tw.style(`border border-${variant}-600`),
    buttonModeContained: tw.style(
      `border bg-${variant}-600 border-${variant}-600`,
    ),
    buttonModeDisabled: tw.style('bg-neutral-200'),
    containerContent: tw`flex-row justify-center items-center`,
    containerIconLeft: tw`pr-2`,
    containerIconRight: tw`pl-2`,
  })

export default React.memo(Button)
