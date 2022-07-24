import { ValidationError } from 'yup'
import { InputFieldHandle } from '@/Components'
import { showMessage } from 'react-native-flash-message'

async function inputFieldValidator<T extends string | number | symbol>(
  refInput: Record<string, InputFieldHandle>,
  showErrorMessge = false,
) {
  let values: Record<string, string> = {}
  const func = Object.keys(refInput).map(key => {
    values[key] = refInput[key].getValue()
    // values[`${key}.label`] = refInput[key].getValueLabel()
    return refInput[key]
  })
  let errors = ''
  let errorObject = {} as Record<T, Array<ValidationError>>
  for (let i = 0; i < func.length; i++) {
    try {
      await func[i].validate()
    } catch (error) {
      if (errors) {
        errors += '\n'
      }
      if (typeof error === 'string') {
        errors += error
      } else {
        const e = error as ValidationError
        errorObject[func[i].getRefName() as T] = e.inner
        errors += e.errors[0]
      }
    }
  }
  if (showErrorMessge && errors) {
    // showFlashMessage(errors, 'error')
    showMessage({
      message: errors,
      type: 'danger',
    })
    // globalRef.modalBottomInfo?.show({
    //   title: 'Oops..',
    //   content: errors,
    // })
  }
  return { status: !errors, errors, values, errorObject } as {
    status: boolean
    values: Record<T, string>
    errors: string
    errorObject: Record<T, Array<ValidationError>>
  }
}

export default inputFieldValidator
