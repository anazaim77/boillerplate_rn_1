import 'react-native-gesture-handler'
import React, { useEffect, useRef, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'
import './Translations'
import {
  ModalBottomInfo,
  ModalBottomInfoHandle,
  ModalBottomOption,
  ModalBottomOptionHandle,
  ModalBottomPhotoPicker,
  ModalBottomPhotoPickerHandle,
  ModalDatePicker,
  ModalDatePickerHandle,
  ModalLoading,
  ModalLoadingHandle,
} from './Components'
import {
  setGlobalLoadingRef,
  setGlobalModalBottomInfoRef,
  setGlobalModalBottomOptionRef,
  setGlobalModalBottomPhotoPicker,
  setGlobalModalDatePicker,
} from './Utils/globalRef'
import FlashMessage from 'react-native-flash-message'
import * as Sentry from '@sentry/react-native'

if (!__DEV__) {
  Sentry.init({
    dsn:
      'https://d74d1b5f329a40528ed69e1befea9691@o1223987.ingest.sentry.io/6368557',
    enableAutoSessionTracking: true,
    // Sessions close after app is 10 seconds in the background.
    sessionTrackingIntervalMillis: 10000,
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 0.5,
  })
}

const App = () => {
  const modalLoadingRef = useRef<ModalLoadingHandle>(null)
  const modalBottomInfoRef = useRef<ModalBottomInfoHandle>(null)
  const modalBottomOptionRef = useRef<ModalBottomOptionHandle>(null)
  const modalDatePickerRef = useRef<ModalDatePickerHandle>(null)
  const modalBottomPhotoPickerRef = useRef<ModalBottomPhotoPickerHandle>(null)

  const [random, setRandom] = useState(0)

  useEffect(() => {
    if (modalLoadingRef?.current) {
      setGlobalLoadingRef(modalLoadingRef.current)
    }
    if (modalBottomInfoRef?.current) {
      setGlobalModalBottomInfoRef(modalBottomInfoRef.current)
    }
    if (modalBottomOptionRef?.current) {
      setGlobalModalBottomOptionRef(modalBottomOptionRef.current)
    }
    if (modalDatePickerRef?.current) {
      setGlobalModalDatePicker(modalDatePickerRef.current)
    }
    if (modalBottomPhotoPickerRef?.current) {
      setGlobalModalBottomPhotoPicker(modalBottomPhotoPickerRef.current)
    }
  }, [
    modalLoadingRef,
    modalBottomInfoRef,
    modalBottomOptionRef,
    modalDatePickerRef,
    modalBottomPhotoPickerRef,
    random,
  ])

  useEffect(() => {
    setTimeout(() => {
      setRandom(Math.random())
    }, 10)
  }, [])

  return (
    <Provider store={store}>
      {/**
       * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
       * and saved to redux.
       * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
       * for example `loading={<SplashScreen />}`.
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
        <ModalLoading ref={modalLoadingRef} />
        <ModalBottomInfo ref={modalBottomInfoRef} />
        <ModalBottomOption ref={modalBottomOptionRef} />
        <ModalDatePicker ref={modalDatePickerRef} />
        <ModalBottomPhotoPicker ref={modalBottomPhotoPickerRef} />
        <FlashMessage position="bottom" />
      </PersistGate>
    </Provider>
  )
}

export default Sentry.wrap(App)
