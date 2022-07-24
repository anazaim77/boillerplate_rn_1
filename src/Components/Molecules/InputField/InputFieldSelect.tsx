import { InputFieldHandle } from '@/Components'
import { ValueLabelOption, ValueLabelOptions } from '@/Types/Component'
import { globalRef } from '@/Utils/globalRef'
import React, { useCallback, useEffect, useRef } from 'react'
import { Pressable } from 'react-native'

import InputField, { InputFieldProps } from './InputField'

interface Props extends InputFieldProps {
  options: ValueLabelOptions
  onValueSelected?: () => void
}

const InputFieldSelect = ({
  options,
  initialValue,
  onValueSelected,
  ...props
}: Props) => {
  const inputRef = useRef<InputFieldHandle>(null)

  const onOptionSelect = useCallback(
    (data: ValueLabelOption) => {
      inputRef?.current?.setValue(data.value, data.label)
      onValueSelected?.()
    },
    [inputRef, onValueSelected],
  )

  const onInputPress = useCallback(() => {
    globalRef.modalBottomOption?.show({
      title: props.label,
      options,
      onSelect: onOptionSelect,
    })
  }, [options, onOptionSelect, props.label])

  useEffect(() => {
    if (initialValue) {
      const initialSelect = options.find(v => v.value === initialValue)
      if (initialSelect) {
        inputRef?.current?.setValue(initialSelect.value, initialSelect.label)
      }
    }
  }, [initialValue, options])

  return (
    <Pressable disabled={props.disabled} onPress={onInputPress}>
      <InputField
        {...props}
        ref={inputRef}
        focusable={false}
        pointerEvents="none"
        rightIcon="arrow-down"
      />
    </Pressable>
  )
}

InputFieldSelect.defaultProps = {
  onValueSelected: undefined,
}

export default React.memo(InputFieldSelect)
