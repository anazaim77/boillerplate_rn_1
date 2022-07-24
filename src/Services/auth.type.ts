export type AuthLoginRequest = {
  nrp: string
  password: string
}

export type AuthLoginData = {
  id: number
  nrp: string
  nrp_new: string
  notam: null | string
  nama: string
  norek: string
  narek: string
  nabank: string
  kode_bank: null | string
  notelp: string
  nik: string
  access_app: null | string
  email: string
  email_verified_at?: string
  role: number
  desc_role: null | string
  avatar: null | string
  status_verif: null | string
  darkmode: null | string
  last_session: string
  gelar_dpn: null | string
  gelar_blk: null | string
  pangkat: null | string
  tmt_pkt: string
  ur_jab_skep: null | string
  corps: string
  kd_ktm: null | string
  kd_smkl: null | string
  kesatuan: null | string
  tmt_1: null | string
  tmt_2: null | string
  tmt_3: null | string
  tmt_4: null | string
  tmt_5: null | string
  tmt_abri: null | string
  npwp: string
  tmt_henti: null | string
  kode_p_sub: null | string
  kd_bansus: null | string
  tg_update: null | string
  tmt_pa: null | string
  tg_lahir: string
  no_bitur: null | string
  kd_ktg: null | string
  tmt_ktg: null | string
  g_pokok: null | string
  t_istri: null | string
  t_anak: null | string
  kpr1: null | string
  kpr2: null | string
  kd_stakel: null | string
  nm_kel1: string
  nm_kel2: string
  nm_kel3: null | string
  alamat: string
  thumb: string
  is_approve: boolean
  is_pensiun: boolean
  is_pengajuan: boolean
  is_valid_no_rek: boolean
  is_complate: boolean
  tgl_pensiun: string
  tmt_mpp: null | string
  stat_aktif: null | string
  tg_cair: null | string
  is_cair: boolean
  total: string
  bunga: string
  firebase: string
  created_at: null | string
  updated_at: null | string
  permission: null | string
  pangkat_id: string
  kesatuan_id: string
  kotama_id: null | string
  corps_id: string
}

export type AuthForgotPasswordRequest = {
  email: string
}

export type ForgotPasswordResponse = {
  id: string
  otp_code: string
}

export type AuthForgotPasswordConfirmRequest = {
  id: string
  new_pass: string
  new_pass_confirmation: string
}

export type AuthForgotPasswordConfirmResponse = {
  id: string
  new_pass: string
}

export type FCMTokenRequest = {
  nrp: string
  token_firebase: string
  imei_hp: string | null
}

export type FCMTokenResponse = {
  imei?: string
  token?: string
  nrp?: string
}

export type NewUserChangePass1Request = {
  nrp: string
  email: string
  notelp: string
  password: string
  password_confirmation: string
}

export type NewUserChangePass1Response = {
  end: string
  otp: string
}
