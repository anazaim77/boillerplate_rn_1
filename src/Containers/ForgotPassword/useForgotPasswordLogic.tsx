import { useInputFieldForm } from '@/Hooks'
import { navigateAndReplace } from '@/Navigators/utils'
import { authSelector } from '@/Store/Auth'
import { PostForgotPassword } from '@/Store/Auth/actions'
import { globalRef } from '@/Utils/globalRef'
import { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

const useForgotPasswordLogic = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(authSelector.isLoading('postForgotPassword'))
  const rules = useRef({
    email: yup.string().required(),
  }).current

  const { setRef, validate } = useInputFieldForm<'email'>()

  const onPressForgotPassword = useCallback(async () => {
    const { status, values } = await validate()
    if (status) {
      dispatch(
        PostForgotPassword.action({
          ...values,
          onSuccess: () => {
            navigateAndReplace('ForgotPassword2')
            globalRef.modalBottomInfo?.show({
              title: 'Berhasil',
              content: 'OTP berhasil dikirim. Silahkan periksa email anda!',
              buttonCenter: {
                label: 'Ok',
                onPress: ({ hide }) => {
                  hide()
                },
              },
            })
          },
        }),
      )
    }
  }, [validate, dispatch])

  return { onPressForgotPassword, rules, setRef, isLoading }
}

export default useForgotPasswordLogic
