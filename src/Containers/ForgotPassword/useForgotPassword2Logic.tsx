import { useCountdown } from '@/Hooks'
import { navigateAndReplace } from '@/Navigators/utils'
import { authSelector } from '@/Store/Auth'
import { PostForgotPassword } from '@/Store/Auth/actions'
import { globalRef } from '@/Utils/globalRef'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useForgotPassword2Logic = () => {
  const dispatch = useDispatch()
  const forgotPasswordData = useSelector(authSelector.forgotPasswordData)
  const [count, { start, stop, reset }] = useCountdown({
    seconds: 60,
    interval: 1000,
    isIncrement: false,
  })
  const [otpCode, setOtpCode] = useState('')

  useEffect(() => {
    start()
  }, [start])

  useEffect(() => {
    if (count <= 0) {
      stop()
    }
  }, [count, stop])

  useEffect(() => {
    if (otpCode.length === 6) {
      if (otpCode === forgotPasswordData.otp_code) {
        navigateAndReplace('ForgotPassword3')
      } else {
        globalRef.modalBottomInfo?.show({
          content: 'Kode OTP Salah!',
        })
        setOtpCode('')
      }
    }
  }, [otpCode, forgotPasswordData])

  const onPressResend = useCallback(() => {
    dispatch(
      PostForgotPassword.action({
        email: forgotPasswordData.email,
        onSuccess: () => {
          reset()
          setTimeout(() => {
            start()
          }, 100)
          globalRef.modalBottomInfo?.show({
            title: 'Berhasil',
            content: 'OTP berhasil dikirim. Silahkan periksa email anda!',
            buttonCenter: {
              label: 'Ok',
              onPress: ({ hide }) => {
                hide()
              },
            },
            onHide: () => {},
          })
        },
      }),
    )
  }, [reset, forgotPasswordData.email, dispatch, start])

  const onPressConfirm = useCallback(async () => {}, [])

  return {
    count,
    onPressConfirm,
    onPressResend,
    otpCode,
    setOtpCode,
  }
}

export default useForgotPassword2Logic
