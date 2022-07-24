import { RowValidationHandle } from '@/Components'
import { useInputFieldForm } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
import { authSelector } from '@/Store/Auth'
import { PostChgPassNewUser1 } from '@/Store/Auth/actions'
import { useCallback, useRef } from 'react'
import { showMessage } from 'react-native-flash-message'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

const useChangePasswordNewUser = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(authSelector.isLoading('postChgPassNewUser1'))

  const rowValidationMinCharacter = useRef<RowValidationHandle>(null)
  const rowValidationCapital = useRef<RowValidationHandle>(null)

  const rules = useRef({
    password: yup
      .string()
      .required()
      .min(8)
      .matches(RegExp('(.*[A-Z].*)'), 'Minimal mengandung 1 huruf kapital'),
    password_confirmation: yup
      .string()
      .required()
      .min(8)
      .matches(RegExp('(.*[A-Z].*)'), 'Minimal mengandung 1 huruf kapital'),
    email: yup.string().email().required(),
    notelp: yup.string().required(),
  }).current

  const { setRef, validate, refInput } = useInputFieldForm<
    'password' | 'password_confirmation' | 'email' | 'notelp'
  >()

  const onPressForgotPassword = useCallback(async () => {
    const { status, values } = await validate()
    if (status) {
      dispatch(
        PostChgPassNewUser1.action({
          email: values.email,
          notelp: values.notelp,
          password: values.password,
          password_confirmation: values.password_confirmation,
          onSuccess: () => {
            showMessage({
              message: 'OTP telah dikirim ke email anda!',
              type: 'success',
              duration: 5000,
            })
            navigate('ChangePassNewUser2')
          },
        }),
      )
    }
  }, [validate, dispatch])

  const onChangePassword = useCallback(
    (value: string) => {
      if (value.length >= 8) {
        rowValidationMinCharacter?.current?.check()
      } else {
        rowValidationMinCharacter?.current?.uncheck()
      }
      if (/(.*[A-Z].*)/g.exec(value)) {
        rowValidationCapital?.current?.check()
      } else {
        rowValidationCapital?.current?.uncheck()
      }
    },
    [rowValidationMinCharacter, rowValidationCapital],
  )

  const onChangePasswordConfirmation = useCallback(
    (passwordConfirmation: string, setError: (err: string) => void) => {
      const password = refInput.current.password.getValue()
      if (password && password !== passwordConfirmation) {
        setError('Konfirmasi password baru harus sama dengan password baru')
      }
    },
    [refInput],
  )

  return {
    onPressForgotPassword,
    rules,
    setRef,
    isLoading,
    rowValidationMinCharacter,
    rowValidationCapital,
    onChangePassword,
    onChangePasswordConfirmation,
  }
}

export default useChangePasswordNewUser
