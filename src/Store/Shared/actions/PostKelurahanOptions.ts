import { sharedServices } from '@/Services'
import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper'

interface Request {
  province_id: string
  city_id: string
  kecamatan_id: string
}

export default {
  initialState: buildAsyncState('postKelurahanOptions'),
  action: buildAsyncActions(
    'shared/postKelurahanOptions',
    async (args: Request, { rejectWithValue }) => {
      try {
        const {
          data: { Data },
        } = await sharedServices.postMasterKelurahan({
          i_prop: args?.province_id,
          i_kota: args?.city_id,
          i_kec: args?.kecamatan_id,
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
    errorKey: 'postKelurahanOptions.error',
    loadingKey: 'postKelurahanOptions.loading',
    itemKey: 'optionsKelurahan',
  }),
}
