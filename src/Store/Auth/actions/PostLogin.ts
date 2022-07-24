import { authServices } from '@/Services'
import { AuthLoginData, AuthLoginRequest } from '@/Services/auth.type'
import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'

interface Request extends AuthLoginRequest {
  onSuccess: (data: AuthLoginData) => void
}

export default {
  initialState: buildAsyncState('postLogin'),
  action: buildAsyncActions(
    'auth/postLogin',
    async ({ nrp, password, onSuccess }: Request, { rejectWithValue }) => {
      try {
        const {
          data: { data },
        } = await authServices.login({ nrp, password })
        onSuccess(data)
        return data
      } catch (error) {
        return rejectWithValue(error)
      }
    },
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'postLogin.error',
      loadingKey: 'postLogin.loading',
      itemKey: 'user',
    }),
  },
}
