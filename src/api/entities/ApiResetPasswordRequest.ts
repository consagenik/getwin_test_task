export default interface ApiResetPasswordRequest {
  new_password: string;
  reset_password_token: string;
}