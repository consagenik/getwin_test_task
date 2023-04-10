import {
  ILoginResponse,
  IProfileCreateResponse,
  IRegistrationResponse,
  IResetPasswordConfirmPhoneResponse,
  IResponse,
  IUpdateProfileResponse,
  IUploadFileResponse,
  IUserInfoResponse
} from "../entities";
import {
  ApiConfirmEmailRequest,
  ApiConfirmPhoneRequest,
  ApiLoginEmailRequest,
  ApiProfileCreateRequest,
  ApiRegistrationRequest,
  ApiResetPasswordRequest,
  ApiResetPasswordConfirmPhoneRequest,
  ApiResetPasswordRedirectRequest,
  ApiConfirmPhoneSendSmsRequest,
  ApiUpdateProfileRequest,
  ApiUploadFileRequest,
  ApiLoginPhoneRequest,
  ApiForgotPasswordPhoneRequest,
  ApiForgotPasswordEmailRequest
} from "./entities";

export default interface IApi {
  confirmEmail(data: ApiConfirmEmailRequest): Promise<void>;
  confirmPhone(data: ApiConfirmPhoneRequest): Promise<IResponse>;
  forgotPassword(data: ApiForgotPasswordEmailRequest | ApiForgotPasswordPhoneRequest): Promise<IResponse>;
  getUserInfo(): Promise<IResponse & IUserInfoResponse>;
  login(data: ApiLoginEmailRequest | ApiLoginPhoneRequest): Promise<IResponse & ILoginResponse>;
  profileCreate(data: ApiProfileCreateRequest): Promise<IResponse & IProfileCreateResponse>;
  registration(data: ApiRegistrationRequest): Promise<IResponse & IRegistrationResponse>;
  resetPassword(data: ApiResetPasswordRequest): Promise<IResponse>;
  resetPasswordConfirmPhone(data: ApiResetPasswordConfirmPhoneRequest): Promise<IResponse & IResetPasswordConfirmPhoneResponse>;
  resetPasswordRedirect(data: ApiResetPasswordRedirectRequest): Promise<void>;
  confirmPhoneSendSms(data: ApiConfirmPhoneSendSmsRequest): Promise<IResponse>;
  logoutUser(): Promise<IResponse>;
  updateProfile(data: ApiUpdateProfileRequest): Promise<IResponse & IUpdateProfileResponse>;
  uploadFile(data: ApiUploadFileRequest): Promise<IResponse & IUploadFileResponse>;
}