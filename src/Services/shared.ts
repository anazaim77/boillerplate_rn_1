import ApiEndpoint from '@/Config/api-endpoint'
import axiosClient, { BaseApiResponse, BaseApiResponse2 } from './axios-client'
import {
  GetAllKotamaResponse,
  GetAllPangkatResponse,
  GetMasterCorpResponse,
  PostMasterJenisPekerjaanResponse,
  GetMasterKategoriResponse,
  GetMasterKesatuanResponse,
  PostMasterProvinsiResponse,
  PostMasterKotaResponse,
  PostMasterKecamatanResponse,
  PostMasterKelurahanResponse,
  PostMasterCabangResponse,
  PostMasterKotaRequest,
  PostMasterKecamatanRequest,
  PostMasterKelurahanRequest,
} from './shared.type'

export const getMasterPangkat = () =>
  axiosClient.get<BaseApiResponse<GetAllPangkatResponse>>(
    ApiEndpoint.MASTER_PANGKAT,
  )
export const getMasterKotama = () =>
  axiosClient.get<BaseApiResponse<GetAllKotamaResponse>>(
    ApiEndpoint.MASTER_KOTAMA,
  )
export const getMasterCorp = () =>
  axiosClient.get<BaseApiResponse<GetMasterCorpResponse>>(
    ApiEndpoint.MASTER_CORP,
  )
export const getMasterKategori = () =>
  axiosClient.get<BaseApiResponse<GetMasterKategoriResponse>>(
    ApiEndpoint.MASTER_KATEGORI,
  )
export const getMasterKesatuan = () =>
  axiosClient.get<BaseApiResponse<GetMasterKesatuanResponse>>(
    ApiEndpoint.MASTER_KESATUAN,
  )
export const postMasterJenisPekerjaan = () =>
  axiosClient.post<BaseApiResponse2<PostMasterJenisPekerjaanResponse>>(
    ApiEndpoint.MASTER_JENIS_PEKERJAAN,
    {},
  )
export const postMasterProvinsi = () =>
  axiosClient.post<BaseApiResponse2<PostMasterProvinsiResponse>>(
    ApiEndpoint.MASTER_PROVINSI,
    {},
  )
export const postMasterKota = (payload: PostMasterKotaRequest) =>
  axiosClient.post<BaseApiResponse2<PostMasterKotaResponse>>(
    ApiEndpoint.MASTER_KOTA,
    payload,
  )
export const postMasterKecamatan = (payload: PostMasterKecamatanRequest) =>
  axiosClient.post<BaseApiResponse2<PostMasterKecamatanResponse>>(
    ApiEndpoint.MASTER_KECAMATAN,
    payload,
  )
export const postMasterKelurahan = (payload: PostMasterKelurahanRequest) =>
  axiosClient.post<BaseApiResponse2<PostMasterKelurahanResponse>>(
    ApiEndpoint.MASTER_KELURAHAN,
    payload,
  )
export const postMasterCabang = () =>
  axiosClient.post<BaseApiResponse2<PostMasterCabangResponse>>(
    ApiEndpoint.MASTER_CABANG,
    {},
  )
