import React from 'react'
import {
  Button,
  InputFieldPassword,
  InputFieldText,
  RowValidation,
  Typography,
  WTSafeAreaView,
  WTScrollView,
  WTView,
} from '@/Components'
import useChangePasswordNewUser from './useChangePasswordNewUser'

const ChangePasswordNewUser = () => {
  const {
    onPressForgotPassword,
    rules,
    setRef,
    isLoading,
    onChangePassword,
    rowValidationCapital,
    rowValidationMinCharacter,
    onChangePasswordConfirmation,
  } = useChangePasswordNewUser()

  return (
    <WTSafeAreaView style="bg-neutral-100 fill">
      <WTScrollView style="fill" contentContainerStyle="fill px-6">
        <Typography containerStyle="pb-4 pt-4">
          Masukkan data berikut untuk merubah password baru Anda
        </Typography>
        <InputFieldText
          label="Email"
          rules={rules.email}
          setRef={setRef}
          refName="email"
        />
        <InputFieldText
          label="No Telepon"
          rules={rules.notelp}
          setRef={setRef}
          refName="notelp"
          keyboardType="numeric"
        />
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
      <Button
        loading={isLoading}
        onPress={onPressForgotPassword}
        full
        containerStyle="m-5"
      >
        Kirim
      </Button>
    </WTSafeAreaView>
  )
}

export default ChangePasswordNewUser
