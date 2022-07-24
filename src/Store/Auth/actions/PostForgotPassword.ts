import { authServices } from '@/Services'
import { AuthForgotPasswordRequest } from '@/Services/auth.type'
import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'

interface Request extends AuthForgotPasswordRequest {
  onSuccess: () => void
}

export default {
  initialState: buildAsyncState('postForgotPassword'),
  action: buildAsyncActions(
    'auth/postForgotPassword',
    async ({ email, onSuccess }: Request, { rejectWithValue }) => {
      try {
        const { data } = await authServices.forgotPassword({ email })
        onSuccess()
        return { ...data, email }
      } catch (error) {
        return rejectWithValue(error)
      }
    },
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'postForgotPassword.error',
      loadingKey: 'postForgotPassword.loading',
      itemKey: 'forgotPasswordData',
    }),
  },
}
