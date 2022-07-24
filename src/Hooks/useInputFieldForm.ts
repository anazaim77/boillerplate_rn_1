import { useCallback, useRef, useState } from 'react'
import { InputFieldHandle } from '@/Components'
import inputFieldValidator from '@/Utils/inputFieldValidator'
import { Keyboard } from 'react-native'

function useInputFieldForm<Fields extends string | number | symbol>() {
  const refInput = useRef<Record<string, InputFieldHandle>>({})
  const [isValid, setIsValid] = useState(false)

  const validate = useCallback(async () => {
    Keyboard.dismiss()
    return inputFieldValidator<Fields>(refInput.current, true)
  }, [refInput])

  const checkIsValid = useCallback(() => {
    const valid = !Object.keys(refInput.current)
      .map(ref => {
        const error =
          refInput.current[ref].getError() || !refInput.current[ref].getValue()
        return !!error
      })
      .some(v => v)
    setIsValid(valid)
    return valid
  }, [])

  const setRef = useCallback(
    (key: string, ref: InputFieldHandle) => {
      refInput.current[key] = ref
      checkIsValid()
    },
    [refInput, checkIsValid],
  )

  return { refInput, setRef, validate, isValid }
}

export default useInputFieldForm
