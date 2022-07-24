import React, {
  Dispatch,
  forwardRef,
  SetStateAction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'

import * as yup from 'yup'
import { StyleProp, TextInputProps, TextStyle } from 'react-native'
import { IconName } from '@/Assets/Icon/Icon'
import Reference from 'yup/lib/Reference'
import Lazy from 'yup/lib/Lazy'
import WTTextInput from '../../Native/WTTextInput'
import WTText from '../../Native/WTText'
import WTView from '../../Native/WTView'
import Typography from '../../Atoms/Typography'
import { Icon } from '@/Assets'
import colors from '@/Config/colors'
import { getTwStyle } from '@/Utils'

interface Props extends Omit<TextInputProps, 'style'> {
  leftIcon?: IconName | (() => {})
  rightIcon?: IconName | (() => {})
  style?: StyleProp<TextStyle> | string
  rules?: yup.AnySchema | Reference | Lazy<any, any>
  label: string
  disabled?: boolean
  containerStyle?: StyleProp<TextStyle> | string
  initialValue?: string | null
  setRef?: (key: string, ref: InputFieldHandle) => void
  refName?: string
  helperText?: string
  valueFormatter?: {
    display: (value: string) => string
    reverse: (value: string) => string
  }
  onValidate?: (
    value: string,
    setError: Dispatch<SetStateAction<string>>,
  ) => void
  customChildren?: (value: string) => React.ReactNode
  showLabel?: boolean
}

export type InputFieldProps = Props

export type InputFieldHandle = {
  validate: () => Promise<any>
  getValue: () => string
  getError: () => string
  setError: (value: string) => void
  getRefName: () => string
  setValue: (value: string | number, displayValue?: string) => void
}

const InputField = forwardRef<InputFieldHandle, Props>(
  (
    {
      rules,
      label,
      initialValue,
      containerStyle,
      setRef,
      refName,
      rightIcon,
      leftIcon,
      disabled,
      helperText,
      valueFormatter,
      multiline,
      onChangeText,
      onValidate,
      customChildren,
      showLabel,
      ...restProps
    },
    ref,
  ) => {
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState('')
    const [displayValue, setDisplayValue] = useState('')
    const [error, setError] = useState('')

    const textInputWrapperStyle = useMemo(() => {
      let style = 'pb-0 border-b border-b-neutral-200 flex-row'
      if (focus) {
        style += ' border-b-primary-600'
      }
      if (error) {
        style += ' border-b-red-500'
      }
      return style
    }, [focus, error])

    const textInputStyle = useMemo(() => {
      let style = 'fill border-b-0 pb-2  text-[16px] justify-center'
      if (multiline) {
        style += ' h-[100px]'
      }
      return style
    }, [multiline])

    const schema = useMemo(() => {
      if (!rules) {
        return
      }
      return yup.object().shape({
        [label]: rules,
      })
    }, [rules, label])

    const memoContainerStyle = useMemo(() => {
      return [getTwStyle(containerStyle), { opacity: disabled ? 0.5 : 1 }]
    }, [containerStyle, disabled])

    const setIsFocus = useCallback(() => {
      setFocus(true)
    }, [])

    const setUnFocus = useCallback(() => {
      setFocus(false)
    }, [])

    const validateValue = useCallback(
      async (val, resolve?, reject?) => {
        if (!schema) {
          return reject?.('No Schema!')
        }
        schema
          .validate({ [label]: val }, { abortEarly: false })
          .then(() => {
            setError('')
            resolve?.()
          })
          .catch(err => {
            setError(err.errors[0])
            reject?.(err)
          })
          .finally(() => {
            onValidate?.(val, setError)
          })
      },
      [label, schema, onValidate],
    )

    const validateValueAsync = useCallback(
      async val => {
        return new Promise((resolve, reject) => {
          validateValue(val, resolve, reject)
        })
      },
      [validateValue],
    )

    const onSetValue = useCallback(
      (val: string | number, displayVal?: string) => {
        const formattedValue = valueFormatter?.reverse(val?.toString()) ?? ''
        setValue(formattedValue)
        setDisplayValue(
          valueFormatter?.display(displayVal?.toString() ?? val.toString()) ??
            '',
        )
        validateValue(formattedValue)
        onChangeText?.(val?.toString() ?? '')
      },
      [validateValue, valueFormatter, onChangeText],
    )

    const renderIcon = useCallback(
      (position: 'left' | 'right') => {
        if (
          (position === 'left' && !leftIcon) ||
          (position === 'right' && !rightIcon)
        ) {
          return
        }
        const iconPropsMap = {
          left: leftIcon,
          right: rightIcon,
        }
        const iconStyleMap = {
          left: 'pr-2',
          right: 'pl-2',
        }

        const iconProps = iconPropsMap[position]
        const wrapperStyle = iconStyleMap[position]
        return (
          <WTView style={wrapperStyle}>
            {typeof iconProps === 'string' ? (
              <Icon name={iconProps!} size={24} fill={colors.neutral[400]} />
            ) : (
              iconProps?.()
            )}
          </WTView>
        )
      },
      [leftIcon, rightIcon],
    )

    const refMethod = useMemo(
      () => () => ({
        validate: () => validateValueAsync(value),
        getValue: () => value,
        getError: () => error,
        setError: (err: string) => setError(err),
        getRefName: () => refName ?? '',
        setValue: (val: string | number, displayVal?: string) =>
          onSetValue(val, displayVal),
      }),
      [validateValueAsync, onSetValue, value, refName, error],
    )

    useImperativeHandle(ref, refMethod)

    useEffect(() => {
      if (initialValue) {
        onSetValue(initialValue.toString(), initialValue.toString())
      }
    }, [initialValue, onSetValue])

    useEffect(() => {
      if (!refName) {
        return
      }
      setRef?.(refName, refMethod())
    }, [setRef, refName, refMethod])

    return (
      <>
        <WTView style={memoContainerStyle}>
          {showLabel && (
            <Typography
              weight="bold"
              size="xs"
              style={`pb-1 ${
                focus || value ? 'text-neutral-500' : 'text-transparent'
              }`}
            >
              {label}
            </Typography>
          )}

          <WTView style={textInputWrapperStyle}>
            {renderIcon('left')}
            {customChildren ? (
              customChildren?.(displayValue)
            ) : (
              <WTTextInput
                onFocus={setIsFocus}
                onBlur={setUnFocus}
                onChangeText={onSetValue}
                editable={!disabled}
                {...restProps}
                placeholder={focus && !value ? '' : label}
                style={textInputStyle}
                multiline={multiline}
              >
                <WTText style="text-[16px] text-neutral-500">
                  {displayValue?.toString() || value?.toString()}
                </WTText>
              </WTTextInput>
            )}

            {renderIcon('right')}
          </WTView>
          <WTView style="pt-1">
            {!!helperText && (
              <Typography color={'neutral-400'} size="xs" withContainer={false}>
                {helperText}
              </Typography>
            )}
            <Typography
              color={error ? 'red-500' : 'transparent'}
              size="xs"
              withContainer={false}
            >
              {error || ' '}
            </Typography>
          </WTView>
        </WTView>
      </>
    )
  },
)

InputField.defaultProps = {
  leftIcon: undefined,
  rightIcon: undefined,
  style: undefined,
  rules: undefined,
  label: '',
  disabled: false,
  containerStyle: undefined,
  initialValue: '',
  setRef: undefined,
  refName: undefined,
  helperText: '',
  valueFormatter: {
    display: value => value,
    reverse: value => value,
  },
  customChildren: undefined,
  showLabel: true,
}

export default React.memo(InputField)
