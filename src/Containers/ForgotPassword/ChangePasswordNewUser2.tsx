import {
  Button,
  Typography,
  WTSafeAreaView,
  WTScrollView,
  WTView,
} from '@/Components'
import { tw } from '@/Utils'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import React from 'react'
import useChangePasswordNewUser2 from './useChangePasswordNewUser2'

const ChangePasswordNewUser2 = () => {
  const { onPressConfirm, otpCode, setOtpCode } = useChangePasswordNewUser2()

  return (
    <WTSafeAreaView style="bg-neutral-100 fill">
      <WTScrollView style="fill" contentContainerStyle="fill px-6">
        <WTView style="">
          <Typography weight="medium" containerStyle="pb-4 pt-4">
            Masukkan kode OTP yang dikirim ke email anda
          </Typography>
          <Typography style="text-neutral-400" containerStyle="pb-2">
            Kode OTP
          </Typography>
        </WTView>
        <WTView style="items-start justify-start">
          <OTPInputView
            code={otpCode}
            onCodeChanged={setOtpCode}
            pinCount={6}
            style={tw`w-[240px] h-[60px] items-baseline`}
            codeInputFieldStyle={tw`border-0 border-b border-b-neutral-300 text-neutral-500 text-4 w-8`}
            codeInputHighlightStyle={tw`border-b-primary-500`}
          />
        </WTView>

        {/* <WTTouchableOpacity disabled={count > 0} onPress={onPressResend}>
          <Typography
            style="text-primary-500 pt-2"
            weight="bold"
            containerStyle="pb-2"
          >
            Kirim ulang kode OTP{' '}
            {count > 0 ? stringFormat.numberToTime(count) : ''}
          </Typography>
        </WTTouchableOpacity> */}
      </WTScrollView>
      <Button onPress={onPressConfirm} full containerStyle="m-5">
        Kirim
      </Button>
    </WTSafeAreaView>
  )
}

export default ChangePasswordNewUser2
