import ApiEndpoint from '@/Config/api-endpoint'
import {
  AuthForgotPasswordConfirmRequest,
  AuthForgotPasswordRequest,
  AuthLoginData,
  AuthLoginRequest,
  FCMTokenRequest,
  FCMTokenResponse,
  ForgotPasswordResponse,
  NewUserChangePass1Request,
  NewUserChangePass1Response,
} from './auth.type'
import axiosClient, { BaseApiResponse } from './axios-client'

export const login = (payload: AuthLoginRequest) =>
  axiosClient.post<BaseApiResponse<AuthLoginData>>(ApiEndpoint.LOGIN, payload)

export const forgotPassword = (payload: AuthForgotPasswordRequest) =>
  axiosClient.post<ForgotPasswordResponse & BaseApiResponse>(
    ApiEndpoint.FORGOT_PASSWORD,
    {
      ...payload,
      device: 'ios',
    },
  )

export const forgotPasswordConfirm = (
  payload: AuthForgotPasswordConfirmRequest,
) =>
  axiosClient.post<BaseApiResponse>(ApiEndpoint.FORGOT_PASSWORD_CONFIRM, {
    ...payload,
  })

export const sendFcm = (payload: FCMTokenRequest) =>
  axiosClient.post<BaseApiResponse<FCMTokenResponse>>(
    ApiEndpoint.FCM_TOKEN,
    payload,
  )

export const changePassNewUser1 = (payload: NewUserChangePass1Request) =>
  axiosClient.post<BaseApiResponse<NewUserChangePass1Response>>(
    ApiEndpoint.NEW_USER_CHG_PASSWORD,
    {
      ...payload,
    },
  )
