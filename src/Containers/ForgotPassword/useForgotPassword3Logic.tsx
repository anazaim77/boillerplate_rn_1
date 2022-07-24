import { RowValidationHandle } from '@/Components'
import { useInputFieldForm } from '@/Hooks'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { authSelector } from '@/Store/Auth'
import { PostForgotPasswordConfirm } from '@/Store/Auth/actions'
import { globalRef } from '@/Utils/globalRef'
import { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

const useForgotPassword3Logic = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(authSelector.isLoading('postForgotPassword'))

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
  }).current

  const { setRef, validate, refInput } = useInputFieldForm<
    'password' | 'password_confirmation'
  >()

  const onPressForgotPassword = useCallback(async () => {
    const { status, values } = await validate()
    if (status) {
      dispatch(
        PostForgotPasswordConfirm.action({
          password: values.password,
          password_confirmation: values.password_confirmation,
          onSuccess: () => {
            globalRef.modalBottomInfo?.show({
              content: 'Berhasil ubah password!',
              title: 'Sukses',
            })
            navigateAndSimpleReset('Login')
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

export default useForgotPassword3Logic
