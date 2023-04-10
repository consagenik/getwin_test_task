export default interface IResetPasswordRequest {
  newPassword: string;
  resetPasswordToken: string;
}