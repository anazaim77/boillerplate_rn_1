/* libraries */
import React, { useCallback, useEffect } from 'react'
import { WTView, WTImage, Typography } from '@/Components'
import { ImgLogo } from '@/Assets'
import { storage, storageKey } from '@/Utils/storage'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useDispatch } from 'react-redux'
import { GetDataOptions } from '@/Store/Shared/actions'
import JailMonkey from 'jail-monkey'
import { globalRef } from '@/Utils/globalRef'
import { BackHandler } from 'react-native'
import Permissions from '@/Utils/Permissions'

const StartupContainer = () => {
  const dispatch = useDispatch()

  const init = async () => {
    dispatch(GetDataOptions.action())
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    if (!__DEV__ && JailMonkey.isJailBroken()) {
      globalRef.modalBottomInfo?.show({
        title: 'Peringatan!',
        content:
          'Perangkat anda terdeteksi sebagai perangkat jailbreak/root. Untuk menghindari sesuatu yang tidak diinginkan, anda tidak diperkenankan mengakses aplikasi ini.',
        buttonCenter: {
          label: 'Keluar App',
          onPress: () => {
            BackHandler.exitApp()
          },
        },
      })
      return
    }

    const isFinishOnboarding = storage.getBoolean(
      storageKey.IS_FINISH_ONBOARDING,
    )
    if (!isFinishOnboarding) {
      navigateAndSimpleReset('Onboarding')
    } else {
      const isLogin = storage.getBoolean(storageKey.IS_LOGIN)
      if (isLogin) {
        navigateAndSimpleReset('Home')
      } else {
        navigateAndSimpleReset('Login')
      }
    }
  }

  const getPermission = useCallback(() => {
    Permissions.NotificationPermission()
      .then(token => {
        console.log('YOUR FCM TOKEN IS : ' + token)
        storage.set(storageKey.FCM_TOKEN, token)
      })
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    init()
    getPermission()
  })

  return (
    <WTView style="fill justify-center items-center bg-white">
      <WTImage source={ImgLogo} style={'w-40 h-40'} />
      <Typography
        size="3xl"
        weight="bold"
        color="neutral-600"
        containerStyle={'pt-3'}
      >
        BOILERPLATE
      </Typography>
    </WTView>
  )
}

export default StartupContainer
