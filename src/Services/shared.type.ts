export type CommonMasterData = {
  id: number
  kode: number
  uraian: string
}

export type CommonMasterDatas = Array<CommonMasterData>

export type GetAllPangkatResponse = CommonMasterDatas

export type GetAllKotamaResponse = CommonMasterDatas

export type GetMasterCorpResponse = CommonMasterDatas

export type GetMasterKategoriResponse = CommonMasterDatas

export type GetMasterKesatuanResponse = Array<{
  id: number
  kosat: string
  ku_kotama: string
  namsat: string
  is_active: boolean
}>

export type PostMasterJenisPekerjaanResponse = Array<{
  kd: string
  nl: string
  urt: number
}>

export type PostMasterProvinsiResponse = Array<{
  id: string
  n: string
}>

export type PostMasterKotaRequest = {
  i_prop: string
}

export type KotaData = {
  id: string
  n: string
  i_prop: string
  n_prop: string
}

export type PostMasterKotaResponse = Array<KotaData>

export type PostMasterKecamatanRequest = {
  i_prop: string
  i_kota: string
}

export type PostMasterKecamatanResponse = Array<{
  id: string
  n: string
  i_prop: string
  n_prop: string
  i_kot: string
  n_kot: string
}>

export type PostMasterKelurahanRequest = {
  i_prop: string
  i_kota: string
  i_kec: string
}

export type PostMasterKelurahanResponse = Array<{
  id: string
  n: string
  i_prop: string
  n_prop: string
  i_kot: string
  n_kot: string
  i_kec: string
  n_kec: string
  pos: string
}>

export type PostMasterCabangResponse = Array<{
  id: string
  jns: string
  cbg: string
  almt: string
  pos: string
  i_prop: string
  n_prop: string
  i_kot: string
  n_kot: string
  i_kec: string
  n_kec: string
  i_kel: string
  n_kel: string
  no_telp: string
  no_fax: string
  eml: null
  wlyh: string
}>

export type Link = {
  url: null | string
  label: string
  active: boolean
}
