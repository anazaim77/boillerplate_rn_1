import { authServices } from '@/Services'
import { RootState } from '@/Store'
import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'

interface Request {
  password: string
  password_confirmation: string
  onSuccess: () => void
}

export default {
  initialState: buildAsyncState('PostForgotPasswordConfirm'),
  action: buildAsyncActions(
    'auth/PostForgotPasswordConfirm',
    async (
      { password, password_confirmation, onSuccess }: Request,
      { rejectWithValue, getState },
    ) => {
      const { auth } = getState() as RootState
      try {
        const { data } = await authServices.forgotPasswordConfirm({
          new_pass: password,
          new_pass_confirmation: password_confirmation,
          id: auth.forgotPasswordData.id,
        })
        onSuccess()
        console.log({ data })
        return data
      } catch (error) {
        return rejectWithValue(error)
      }
    },
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'PostForgotPasswordConfirm.error',
      loadingKey: 'PostForgotPasswordConfirm.loading',
      itemKey: null,
    }),
  },
}
