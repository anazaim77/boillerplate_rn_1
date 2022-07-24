const ApiEndpoint = {
  LOGIN: 'api/login',
  FORGOT_PASSWORD: 'api/forgot-password',
  FORGOT_PASSWORD_CONFIRM: 'api/forgot-password-post',
  FCM_TOKEN: 'kpr/api/notification/fcm-token',
  NEW_USER_CHG_PASSWORD: 'api/set-credential',

  MASTER_PANGKAT: 'api/get-all-pangkat',
  MASTER_KOTAMA: 'api/get-all-kotama',
  MASTER_CORP: 'api/get-all-corp',
  MASTER_KATEGORI: 'api/get-all-kategori',
  MASTER_KESATUAN: 'api/get-all-kesatuan',

  MASTER_JENIS_PEKERJAAN: 'kpr/api/master/jenis-pekerjaan',
  MASTER_PROVINSI: 'kpr/api/master/provinsi',
  MASTER_KOTA: 'kpr/api/master/kota',
  MASTER_KECAMATAN: 'kpr/api/master/kecamatan',
  MASTER_KELURAHAN: 'kpr/api/master/kelurahan',
  MASTER_CABANG: 'kpr/api/master/cabang',
}

export default ApiEndpoint
