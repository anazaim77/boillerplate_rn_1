import { authServices } from '@/Services'
import { RootState } from '@/Store'
import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'

interface Request {
  email: string
  notelp: string
  password: string
  password_confirmation: string
  onSuccess: () => void
}

export default {
  initialState: buildAsyncState('postChgPassNewUser1'),
  action: buildAsyncActions(
    'auth/postChgPassNewUser1',
    async (
      { password, password_confirmation, email, notelp, onSuccess }: Request,
      { rejectWithValue, getState },
    ) => {
      const {
        auth: { user },
      } = getState() as RootState
      try {
        const { data } = await authServices.changePassNewUser1({
          nrp: user?.nrp!,
          password,
          password_confirmation,
          email,
          notelp,
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
      errorKey: 'postChgPassNewUser1.error',
      loadingKey: 'postChgPassNewUser1.loading',
      itemKey: 'otpNewUser',
    }),
  },
}
