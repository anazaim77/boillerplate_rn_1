import axios, { AxiosRequestConfig } from 'axios'
import { showMessage } from 'react-native-flash-message'
import _ from 'lodash'
import { Config } from '@/Config'
// import { globalRef } from '@/Utils/globalRef'
// import { store } from '../store'

interface InterceptorResponseAxiosRequestConfig extends AxiosRequestConfig {}

interface InterceptorRequestAxiosRequestConfig extends AxiosRequestConfig {}

export interface BaseApiResponse<D = any> {
  statusCode: number
  message: string
  data: D
}

export interface BaseApiResponse2<D = any> {
  IsError: boolean
  ErrMessage: string
  Output: string
  Proses: string
  Waktu: string
  Paging?: null
  Data: D
}

const axiosClient = axios.create({
  baseURL: Config.API_URL,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'API-ID': Config.API_ID,
    'CLIENT-KEY': Config.API_CLIENT_KEY,
    'SERVER-KEY': Config.API_SERVER_KEY,
  },
})

axiosClient.interceptors.request.use(
  (config: InterceptorRequestAxiosRequestConfig) => {
    _.set(config, 'headers.Authorization', 'Bearer xxx')
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

axiosClient.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
    } else if (error.response.status === 500) {
      showMessage({
        message: '[500] Internal Server Error',
        type: 'danger',
      })
    } else {
      let message = error.response.data?.message
      if (typeof message !== 'string') {
        message = JSON.stringify(message)
      }
      console.log({ err: error.response.config.url })
      if (
        !error.response.config.url.includes('baltab/api/baltab') &&
        !error.response.config.url.includes('baltab/api/get-data-mobile')
      ) {
        showMessage({
          message: message,
          type: 'danger',
          duration: 3000,
        })
      }
    }

    // Log API call here

    return Promise.reject(error.response.data)
  },
)

export default axiosClient
