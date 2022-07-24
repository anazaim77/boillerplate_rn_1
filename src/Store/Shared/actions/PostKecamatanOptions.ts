import { sharedServices } from '@/Services'
import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper'

interface Request {
  province_id: string
  city_id: string
}

export default {
  initialState: buildAsyncState('postKecamatanOptions'),
  action: buildAsyncActions(
    'shared/postKecamatanOptions',
    async (args: Request, { rejectWithValue }) => {
      try {
        const {
          data: { Data },
        } = await sharedServices.postMasterKecamatan({
          i_prop: args?.province_id,
          i_kota: args?.city_id,
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
    errorKey: 'postKecamatanOptions.error',
    loadingKey: 'postKecamatanOptions.loading',
    itemKey: 'optionsKecamatan',
  }),
}
