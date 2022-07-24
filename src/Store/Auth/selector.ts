import { AuthState, AuthStateLoading } from './reducer'
export default {
  isLoading: (key: AuthStateLoading) => (state: { auth: AuthState }) =>
    state.auth[key].loading,
  isLogin: (state: { auth: AuthState }) => !!state.auth.user,
  user: (state: { auth: AuthState }) => state.auth.user,
  forgotPasswordData: (state: { auth: AuthState }) =>
    state.auth.forgotPasswordData,
  otpNewUser: (state: { auth: AuthState }) => state.auth.otpNewUser,
}
