import { RowValidationHandle } from '@/Components'
import { useInputFieldForm } from '@/Hooks'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useAppDispatch } from '@/Store'
import { authSelector } from '@/Store/Auth'
import { PostFCMToken, PostLogin } from '@/Store/Auth/actions'
import { storage, storageKey } from '@/Utils/storage'
import { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

const useLoginLogic = () => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(authSelector.isLoading('postLogin'))
  const rules = useRef({
    nrp: yup.string().required(),
    password: yup.string().required(),
  }).current

  const rowValidationMinCharacter = useRef<RowValidationHandle>(null)
  const rowValidationCapital = useRef<RowValidationHandle>(null)

  const { setRef, validate, isValid } = useInputFieldForm<'nrp' | 'password'>()

  const onChangePassword = useCallback(
    (value: string) => {
      if (value.length >= 8) {
        rowValidationMinCharacter?.current?.check()
      } else {
        rowValidationMinCharacter?.current?.uncheck()
      }
      if (/(.*[A-Z].*)/g.exec(value)) {
        rowValidationCapital?.current?.check()
      } else {
        rowValidationCapital?.current?.uncheck()
      }
    },
    [rowValidationMinCharacter, rowValidationCapital],
  )

  const _setFcmToken = useCallback(() => {
    const token = storage.getString(storageKey.FCM_TOKEN) as string
    dispatch(
      PostFCMToken.action({
        token,
      }),
    )
  }, [dispatch])

  const onPressLogin = useCallback(async () => {
    const { status, values } = await validate()
    if (status) {
      // 1234567 / shinigami1012!
      // 111222 / user123!
      // 123456 / shinigami1012!(developer)
      // 12345 / shinigami1012!(pengelola)
      dispatch(
        PostLogin.action({
          ...values,
          onSuccess: () => {
            storage.set(storageKey.IS_LOGIN, true)
            _setFcmToken()
            console.log('values', values)
            if (values.password === 'Sisfobeta2022') {
              navigateAndSimpleReset('ChangePassNewUser1')
              return
            }
            navigateAndSimpleReset('Home')
          },
        }),
      )
    }
  }, [validate, dispatch, _setFcmToken])

  return {
    onPressLogin,
    rules,
    setRef,
    isLoading,
    isValid,
    rowValidationMinCharacter,
    rowValidationCapital,
    onChangePassword,
  }
}

export default useLoginLogic
