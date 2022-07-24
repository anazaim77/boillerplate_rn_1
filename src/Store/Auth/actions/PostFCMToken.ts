import { authServices } from '@/Services'
import { RootState } from '@/Store'
import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper'

interface Request {
  token: string
}

export default {
  initialState: buildAsyncState('postFCMToken'),
  action: buildAsyncActions(
    'auth/postFCMToken',
    async ({ token }: Request, { getState, rejectWithValue }) => {
      try {
        const {
          auth: { user },
        } = getState() as RootState

        const {
          data: { data },
        } = await authServices.sendFcm({
          nrp: user?.nrp!,
          token_firebase: token,
          imei_hp: null,
        })
        // onSuccess(data)
        return data
      } catch (error) {
        return rejectWithValue(error)
      }
    },
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'postFCMToken.error',
      loadingKey: 'postFCMToken.loading',
      itemKey: null,
    }),
  },
}
