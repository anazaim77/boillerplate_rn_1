import { ValueLabelOptions } from '@/Types/Component'
import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import {
  GetDataOptions,
  PostKecamatanOptions,
  PostKelurahanOptions,
  PostKotaOptions,
} from './actions'

export type SharedStateLoading =
  | 'getDataOptions'
  | 'postKotaOptions'
  | 'postKecamatanOptions'
  | 'postKelurahanOptions'

export interface SharedState {
  optionsPangkat: ValueLabelOptions
  optionsKotama: ValueLabelOptions
  optionsCorp: ValueLabelOptions
  optionsKategori: ValueLabelOptions
  optionsKesatuan: ValueLabelOptions
  optionsJenisPekerjaan: ValueLabelOptions
  optionsProvinsi: ValueLabelOptions
  optionsKota: ValueLabelOptions
  optionsKecamatan: ValueLabelOptions
  optionsKelurahan: ValueLabelOptions
  optionsCabang: ValueLabelOptions

  getDataOptions: {
    loading: boolean
    error: any
  }
  postKotaOptions: {
    loading: boolean
    error: any
  }
  postKecamatanOptions: {
    loading: boolean
    error: any
  }
  postKelurahanOptions: {
    loading: boolean
    error: any
  }
}

export const initialState: SharedState = {
  optionsPangkat: [],
  optionsKotama: [],
  optionsCorp: [],
  optionsKategori: [],
  optionsKesatuan: [],
  optionsJenisPekerjaan: [],
  optionsProvinsi: [],
  optionsKota: [],
  optionsKecamatan: [],
  optionsKelurahan: [],
  optionsCabang: [],

  getDataOptions: {
    loading: false,
    error: null,
  },
  postKotaOptions: {
    loading: false,
    error: null,
  },
  postKecamatanOptions: {
    loading: false,
    error: null,
  },
  postKelurahanOptions: {
    loading: false,
    error: null,
  },
}

export default buildSlice(
  'shared',
  [GetDataOptions, PostKotaOptions, PostKecamatanOptions, PostKelurahanOptions],
  initialState,
).reducer
