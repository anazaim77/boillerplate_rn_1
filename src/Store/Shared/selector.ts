import { SharedState, SharedStateLoading } from './reducer'

export default {
  isLoading: (key: SharedStateLoading) => (state: { shared: SharedState }) =>
    state.shared[key].loading,
  getDataOptions: (state: { shared: SharedState }) => ({
    optionsPangkat: state.shared.optionsPangkat,
    optionsKotama: state.shared.optionsKotama,
    optionsCorp: state.shared.optionsCorp,
    optionsKategori: state.shared.optionsKategori,
    optionsKesatuan: state.shared.optionsKesatuan,
    optionsJenisPekerjaan: state.shared.optionsJenisPekerjaan,
    optionsProvinsi: state.shared.optionsProvinsi,
    optionsKota: state.shared.optionsKota,
    optionsKecamatan: state.shared.optionsKecamatan,
    optionsKelurahan: state.shared.optionsKelurahan,
    // optionsCabang: state.shared.optionsCabang,
  }),
  optionsKota: (state: { shared: SharedState }) => state.shared.optionsKota,
  optionsKecamatan: (state: { shared: SharedState }) =>
    state.shared.optionsKecamatan,
  optionsKelurahan: (state: { shared: SharedState }) =>
    state.shared.optionsKelurahan,
}
