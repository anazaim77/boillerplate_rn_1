import React from 'react'
import {
  Button,
  InputFieldPassword,
  RowValidation,
  Typography,
  WTSafeAreaView,
  WTScrollView,
  WTView,
} from '@/Components'
import useForgotPassword3Logic from './useForgotPassword3Logic'

const ForgotPassword3Container = () => {
  const {
    onPressForgotPassword,
    rules,
    setRef,
    // isLoading,
    onChangePassword,
    rowValidationCapital,
    rowValidationMinCharacter,
    onChangePasswordConfirmation,
  } = useForgotPassword3Logic()

  return (
    <WTSafeAreaView style="bg-neutral-100 fill">
      <WTScrollView style="fill" contentContainerStyle="fill px-6">
        <Typography containerStyle="pb-4 pt-4">
          Masukkan password dan konfirmasi password baru Anda
        </Typography>
        <InputFieldPassword
          label="Password Baru"
          rules={rules.password}
          setRef={setRef}
          refName="password"
          leftIcon="lock-outline"
          onChangeText={onChangePassword}
        />
        <WTView style="pb-4">
          <Typography color="neutral-400" size="xs" containerStyle="pt-4 pb-2">
            Password Anda harus mengandung :
          </Typography>
          <RowValidation
            ref={rowValidationMinCharacter}
            label="Minimal 8 karakter"
          />
          <RowValidation ref={rowValidationCapital} label="1 huruf besar" />
        </WTView>
        <InputFieldPassword
          label="Konfirmasi Password Baru"
          rules={rules.password_confirmation}
          setRef={setRef}
          refName="password_confirmation"
          leftIcon="lock-outline"
          onValidate={onChangePasswordConfirmation}
        />
      </WTScrollView>
      <Button onPress={onPressForgotPassword} full containerStyle="m-5">
        Kirim
      </Button>
    </WTSafeAreaView>
  )
}

export default ForgotPassword3Container
