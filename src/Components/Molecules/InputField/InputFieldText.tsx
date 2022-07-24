import React from 'react'

import InputField, { InputFieldProps } from './InputField'

interface Props extends InputFieldProps {}

const InputFieldText = (props: Props) => {
  return <InputField {...props} />
}

InputFieldText.defaultProps = {
  style: undefined,
}

export default React.memo(InputFieldText)
