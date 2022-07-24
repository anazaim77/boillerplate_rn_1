import { useCountdown } from '@/Hooks'
import { navigateAndReplace } from '@/Navigators/utils'
import { authSelector } from '@/Store/Auth'
import { globalRef } from '@/Utils/globalRef'
import { useCallback, useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import { useSelector } from 'react-redux'

const useChangePasswordNewUser2 = () => {
  const otpNewUser = useSelector(authSelector.otpNewUser)
  const [count, { start, stop }] = useCountdown({
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
      if (otpCode === otpNewUser?.data.otp) {
        showMessage({
          message: 'Password berhasil diubah!',
          type: 'success',
          duration: 3000,
        })
        navigateAndReplace('Home')
      } else {
        globalRef.modalBottomInfo?.show({
          content: 'Kode OTP Salah!',
        })
        setOtpCode('')
      }
    }
  }, [otpCode, otpNewUser])

  const onPressResend = useCallback(() => {}, [])

  const onPressConfirm = useCallback(async () => {}, [])

  return {
    count,
    onPressConfirm,
    onPressResend,
    otpCode,
    setOtpCode,
  }
}

export default useChangePasswordNewUser2
