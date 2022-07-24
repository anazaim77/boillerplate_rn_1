import { AuthLoginData, NewUserChangePass1Response } from '@/Services/auth.type'
import { BaseApiResponse } from '@/Services/axios-client'
import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import {
  PostChgPassNewUser1,
  PostFCMToken,
  PostForgotPassword,
  PostForgotPasswordConfirm,
  PostLogin,
} from './actions'

export type AuthStateLoading =
  | 'postLogin'
  | 'postForgotPassword'
  | 'postFCMToken'
  | 'postChgPassNewUser1'
export interface AuthState {
  isLogin: boolean
  token?: string
  user: AuthLoginData | null
  forgotPasswordData: {
    id: string
    otp_code: string
    email: string
  }
  otpNewUser?: BaseApiResponse<NewUserChangePass1Response>

  postLogin: {
    loading: boolean
    error: any
  }
  postForgotPassword: {
    loading: boolean
    error: any
  }
  postForgotPasswordConfirm: {
    loading: boolean
    error: any
  }
  postFCMToken: {
    loading: boolean
    error: any
  }
  postChgPassNewUser1: {
    loading: boolean
    error: any
  }
}

export const initialState: AuthState = {
  isLogin: false,
  token: undefined,
  user: null,
  forgotPasswordData: {
    id: '',
    otp_code: '',
    email: '',
  },
  otpNewUser: { data: { end: '', otp: '' }, message: '', statusCode: 0 },

  postLogin: {
    loading: false,
    error: null,
  },
  postForgotPassword: {
    loading: false,
    error: null,
  },
  postForgotPasswordConfirm: {
    loading: false,
    error: null,
  },
  postFCMToken: {
    loading: false,
    error: null,
  },
  postChgPassNewUser1: {
    loading: false,
    error: null,
  },
}

export default buildSlice(
  'auth',
  [
    PostLogin,
    PostForgotPassword,
    PostForgotPasswordConfirm,
    PostFCMToken,
    PostChgPassNewUser1,
  ],
  initialState,
).reducer
