import { InputFieldHandle } from '@/Components'
import { globalRef } from '@/Utils/globalRef'
import moment from 'moment'
import React, { useCallback, useRef } from 'react'
import { Pressable } from 'react-native'

import InputField, { InputFieldProps } from './InputField'

interface Props extends InputFieldProps {}

const InputFieldDate = ({ ...props }: Props) => {
  const inputRef = useRef<InputFieldHandle>(null)

  const onSelect = useCallback((date: Date) => {
    inputRef?.current?.setValue(
      moment(date).format('YYYY-MM-DD'),
      moment(date).format('DD MMMM YYYY'),
    )
  }, [])

  const onInputPress = useCallback(() => {
    globalRef.modalDatePicker?.show({
      onSelect,
    })
  }, [onSelect])

  return (
    <Pressable disabled={props.disabled} onPress={onInputPress}>
      <InputField
        {...props}
        ref={inputRef}
        focusable={false}
        pointerEvents="none"
        rightIcon="outline-date"
      />
    </Pressable>
  )
}

InputFieldDate.defaultProps = {}

export default React.memo(InputFieldDate)
