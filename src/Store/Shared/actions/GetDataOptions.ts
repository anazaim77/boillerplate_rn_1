import { CommonMasterDatas } from './../../../Services/shared.type'
import { SharedState } from './../reducer'
import { sharedServices } from '@/Services'
import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import { PayloadAction } from '@reduxjs/toolkit'
import { ValueLabelOptions } from '@/Types/Component'

export const mapData = (data: CommonMasterDatas) =>
  data.map(v => ({
    value: v.kode,
    label: v.uraian,
  }))

export default {
  initialState: buildAsyncState('getDataOptions'),
  action: buildAsyncActions(
    'shared/getDataOptions',
    async (_, { rejectWithValue }) => {
      try {
        const [
          {
            data: { data: dataPangkat },
          },
          {
            data: { data: dataKotama },
          },
          {
            data: { data: dataCorp },
          },
          {
            data: { data: dataKategori },
          },
          {
            data: { data: dataKesatuan },
          },
          {
            data: { Data: dataJenisPekerjaan },
          },
          {
            data: { Data: dataProvinsi },
          },
          // {
          //   data: { Data: dataKota },
          // },
          // {
          //   data: { Data: dataKecamatan },
          // },
          // {
          //   data: { Data: dataKelurahan },
          // },
          // {
          //   data: { Data: dataCabang },
          // },
        ] = await Promise.all([
          sharedServices.getMasterPangkat(),
          sharedServices.getMasterKotama(),
          sharedServices.getMasterCorp(),
          sharedServices.getMasterKategori(),
          sharedServices.getMasterKesatuan(),
          sharedServices.postMasterJenisPekerjaan(),
          sharedServices.postMasterProvinsi(),
          // sharedServices.postMasterKota(),
          // sharedServices.postMasterKecamatan(),
          // sharedServices.postMasterKelurahan(),
          // sharedServices.postMasterCabang(),
        ])

        return {
          optionsPangkat: mapData(dataPangkat),
          optionsKotama: mapData(dataKotama),
          optionsCorp: mapData(dataCorp),
          optionsKategori: mapData(dataKategori),
          optionsKesatuan: dataKesatuan.map(v => ({
            value: v.kosat,
            label: v.namsat,
          })),
          optionsJenisPekerjaan: dataJenisPekerjaan.map(v => ({
            value: v.kd,
            label: v.nl,
          })),
          optionsProvinsi: dataProvinsi.map(v => ({
            value: v.id,
            label: v.n,
            ...v,
          })),
          // optionsKota: dataKota.map(v => ({
          //   value: v.id,
          //   label: v.n,
          // })),
          // optionsKecamatan: dataKecamatan.map(v => ({
          //   value: v.id,
          //   label: v.n,
          // })),
          // optionsKelurahan: dataKelurahan.map(v => ({
          //   value: v.id,
          //   label: v.n,
          // })),
          //   optionsCabang: [],
        }
      } catch (error) {
        return rejectWithValue(error)
      }
    },
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'getDataOptions.error',
      loadingKey: 'getDataOptions.loading',
    }),
    fulfilled: (
      state: SharedState,
      action: PayloadAction<{
        optionsPangkat: ValueLabelOptions
        optionsKotama: ValueLabelOptions
        optionsCorp: ValueLabelOptions
        optionsKategori: ValueLabelOptions
        optionsKesatuan: ValueLabelOptions
        optionsJenisPekerjaan: ValueLabelOptions
        optionsProvinsi: ValueLabelOptions
        // optionsCabang: ValueLabelOptions
      }>,
    ) => {
      state.optionsPangkat = action.payload.optionsPangkat
      state.optionsKotama = action.payload.optionsKotama
      state.optionsCorp = action.payload.optionsCorp
      state.optionsKategori = action.payload.optionsKategori
      state.optionsKesatuan = action.payload.optionsKesatuan
      state.optionsJenisPekerjaan = action.payload.optionsJenisPekerjaan
      state.optionsProvinsi = action.payload.optionsProvinsi
      // state.optionsCabang = action.payload.optionsCabang
    },
  },
}
