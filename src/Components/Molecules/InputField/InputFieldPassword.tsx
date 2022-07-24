import React, { useCallback, useState } from 'react'
import InputField, { InputFieldProps } from './InputField'
import { Icon } from '@/Assets'
import { TouchableOpacity } from 'react-native'
import colors from '@/Config/colors'

interface Props extends InputFieldProps {}

const InputFieldPassword = ({ ...props }: Props) => {
  const [secure, setSecure] = useState(true)

  const rightIcon = useCallback(() => {
    return (
      <TouchableOpacity onPress={() => setSecure(prev => !prev)}>
        <Icon fill={colors.neutral[400]} name={secure ? 'eye' : 'eye-slash'} />
      </TouchableOpacity>
    )
  }, [secure])
  return (
    <InputField {...props} rightIcon={rightIcon} secureTextEntry={secure} />
  )
}

InputFieldPassword.defaultProps = {}

export default React.memo(InputFieldPassword)
