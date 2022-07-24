import React from 'react'
import {
  Button,
  InputFieldText,
  Typography,
  WTSafeAreaView,
  WTScrollView,
  WTView,
} from '@/Components'
import useForgotPasswordLogic from './useForgotPasswordLogic'

const LoginContainer = () => {
  const {
    onPressForgotPassword,
    rules,
    setRef,
    isLoading,
  } = useForgotPasswordLogic()

  return (
    <WTSafeAreaView style="bg-neutral-100 fill">
      <WTView style="fill">
        <WTScrollView style="fill" contentContainerStyle="fill px-6">
          <Typography containerStyle="pb-4 pt-4">
            Masukkan email untuk memperbarui password
          </Typography>
          <InputFieldText
            label="E-Mail"
            rules={rules.email}
            setRef={setRef}
            refName="email"
            leftIcon="mail"
            keyboardType="email-address"
          />
        </WTScrollView>
      </WTView>
      <Button
        loading={isLoading}
        full
        onPress={onPressForgotPassword}
        containerStyle="m-5"
      >
        Kirim
      </Button>
    </WTSafeAreaView>
  )
}

export default LoginContainer
