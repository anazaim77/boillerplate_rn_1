import { ImgLogo } from '@/Assets'
import {
  Button,
  InputFieldPassword,
  InputFieldText,
  Typography,
  WTImage,
  WTSafeAreaView,
  WTScrollView,
  WTView,
} from '@/Components'
import { navigate } from '@/Navigators/utils'
import React, { useCallback } from 'react'
import useLoginLogic from './useLoginLogic'

const LoginContainer = () => {
  const { onPressLogin, rules, setRef, isLoading, isValid } = useLoginLogic()

  const onNavigateForgotPassword = useCallback(() => {
    navigate('ForgotPassword1')
  }, [])

  return (
    <WTSafeAreaView style="bg-neutral-100 fill">
      <WTScrollView
        style="fill"
        contentContainerStyle="py-5"
        showsVerticalScrollIndicator={false}
      >
        <WTView style="items-center">
          <WTImage source={ImgLogo} style={'w-20 h-20'} />
          <Typography
            containerStyle="pb-6 pt-1"
            color="neutral-500"
            size="3xl"
            style="font-fjalla-one"
          >
            BOILERPLATE
          </Typography>
          <Typography
            containerStyle="pb-2"
            color="neutral-500"
            weight="bold"
            size="lg"
          >
            Masuk
          </Typography>
          <Typography
            containerStyle="pb-10 max-w-60"
            style="text-center"
            color="neutral-400"
            size="sm"
          >
            Silahkan masukan NRP dan Password anda
          </Typography>
        </WTView>
        <WTView style="pt-0 px-8 fill">
          <InputFieldText
            label="NRP"
            rules={rules.nrp}
            containerStyle="pb-1"
            setRef={setRef}
            refName="nrp"
            leftIcon="nrp"
          />
          <InputFieldPassword
            label="Password"
            rules={rules.password}
            setRef={setRef}
            refName="password"
            leftIcon="lock-outline"
            // onChangeText={onChangePassword}
          />
          {/* <WTView>
            <Typography
              color="neutral-400"
              size="xs"
              containerStyle="pt-4 pb-2"
            >
              Password Anda harus mengandung :
            </Typography>
            <RowValidation
              ref={rowValidationMinCharacter}
              label="Minimal 8 karakter"
            />
            <RowValidation ref={rowValidationCapital} label="1 huruf besar" />
          </WTView> */}

          <Button
            loading={isLoading}
            full
            onPress={onPressLogin}
            containerStyle="mt-8"
            disabled={!isValid}
          >
            Masuk
          </Button>

          <Button
            size="sm"
            mode="ghost"
            containerStyle="mt-4"
            onPress={onNavigateForgotPassword}
          >
            Lupa Password
          </Button>
        </WTView>
      </WTScrollView>
    </WTSafeAreaView>
  )
}

export default LoginContainer
