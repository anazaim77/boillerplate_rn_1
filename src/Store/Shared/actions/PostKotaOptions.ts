import { sharedServices } from '@/Services'
import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper'

interface Request {
  province_id: string
}

export default {
  initialState: buildAsyncState('postKotaOptions'),
  action: buildAsyncActions(
    'shared/postKotaOptions',
    async (args: Request, { rejectWithValue }) => {
      try {
        const {
          data: { Data },
        } = await sharedServices.postMasterKota({
          i_prop: args?.province_id!,
        })
        // return Data
        return Data.map(v => ({
          value: v.id,
          label: v.n,
          ...v,
        }))
      } catch (error) {
        return rejectWithValue(error)
      }
    },
  ),
  reducers: buildAsyncReducers({
    errorKey: 'postKotaOptions.error',
    loadingKey: 'postKotaOptions.loading',
    itemKey: 'optionsKota',
  }),
}
