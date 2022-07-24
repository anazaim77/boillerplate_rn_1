import { stringFormat } from '@/Utils'
import React from 'react'

import InputField, { InputFieldProps } from './InputField'

interface Props extends InputFieldProps {}

const InputFieldCurrency = (props: Props) => {
  return (
    <InputField
      leftIcon="rp"
      valueFormatter={{
        display: val =>
          stringFormat.convertToRp(stringFormat.convertRpToNum(val), false),
        reverse: val => stringFormat.convertRpToNum(val),
      }}
      keyboardType="numeric"
      {...props}
    />
  )
}

InputFieldCurrency.defaultProps = {
  style: undefined,
}

export default React.memo(InputFieldCurrency)
