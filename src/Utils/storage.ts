import { MMKV } from 'react-native-mmkv'

export const storageKey = {
  IS_FINISH_ONBOARDING: 'IS_FINISH_ONBOARDING',
  IS_LOGIN: 'IS_LOGIN',
  FCM_TOKEN: 'FCM_TOKEN',
}

export const storage = new MMKV()
