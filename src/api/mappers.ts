import {
  IConfirmEmailRequest,
  IConfirmPhoneRequest,
  IConfirmPhoneSendSmsRequest,
  IForgotPasswordEmailRequest,
  IForgotPasswordPhoneRequest,
  ILoginEmailRequest,
  ILoginPhoneRequest,
  ILoginResponse,
  IProfileCreateRequest,
  IProfileCreateResponse,
  IRegistrationRequest,
  IRegistrationResponse,
  IResetPasswordConfirmPhoneRequest,
  IResetPasswordConfirmPhoneResponse,
  IResetPasswordRedirectRequest,
  IResetPasswordRequest,
  IResponse,
  IUpdateProfileRequest,
  IUpdateProfileResponse,
  IUploadFileRequest,
  IUploadFileResponse,
  IUser,
  IUserInfoResponse
} from "../entities";
import { 
  ApiConfirmEmailRequest,
  ApiConfirmPhoneRequest,
  ApiConfirmPhoneSendSmsRequest,
  ApiForgotPasswordEmailRequest,
  ApiForgotPasswordPhoneRequest,
  ApiLoginEmailRequest,
  ApiLoginPhoneRequest,
  ApiLoginResponse,
  ApiProfileCreateRequest,
  ApiProfileCreateResponse,
  ApiRegistrationRequest,
  ApiRegistrationResponse,
  ApiResetPasswordConfirmPhoneRequest,
  ApiResetPasswordConfirmPhoneResponse,
  ApiResetPasswordRedirectRequest,
  ApiResetPasswordRequest,
  ApiResponse,
  ApiUpdateProfileRequest,
  ApiUpdateProfileResponse,
  ApiUploadFileRequest,
  ApiUploadFileResponse,
  ApiUser,
  ApiUserInfoResponse
} from "./entities";

export function mapIUserToApiUser(iEntity: IUser): ApiUser {
  return {
    birth_date: iEntity.birthDate,
    email: iEntity.email,
    id: iEntity.id,
    is_confirm_email: iEntity.isConfirmEmail,
    is_confirm_phone: iEntity.isConfirmPhone,
    is_profile_created: iEntity.isProfileCreated,
    lname: iEntity.lname,
    name: iEntity.name,
    password: iEntity.password,
    phone: iEntity.phone,
    sname: iEntity.sname,
    token: iEntity.token,
    confirm_phone_code: iEntity.confirmPhoneCode,
    files: iEntity.files,
    gender_id: iEntity.genderId,
    office_presence_status_id: iEntity.officePresenceStatusId,
    otherEmails: iEntity.otherEmails,
    otherPhones: iEntity.otherPhones,
    reset_password_token: iEntity.resetPasswordToken,
    socials: iEntity.socials,
  }
}

export function mapApiUserToIUser(apiEntity: ApiUser): IUser {
  return {
    birthDate: apiEntity.birth_date,
    email: apiEntity.email,
    id: apiEntity.id,
    isConfirmEmail: apiEntity.is_confirm_email,
    isConfirmPhone: apiEntity.is_confirm_phone,
    isProfileCreated: apiEntity.is_profile_created,
    lname: apiEntity.lname,
    name: apiEntity.name,
    password: apiEntity.password,
    phone: apiEntity.phone,
    sname: apiEntity.sname,
    token: apiEntity.token,
    confirmPhoneCode: apiEntity.confirm_phone_code,
    files: apiEntity.files,
    genderId: apiEntity.gender_id,
    officePresenceStatusId: apiEntity.office_presence_status_id,
    otherEmails: apiEntity.otherEmails,
    otherPhones: apiEntity.otherPhones,
    resetPasswordToken: apiEntity.reset_password_token,
    socials: apiEntity.socials,
  }
}

export function mapIConfirmEmailRequestToApiConfirmEmailRequest(iEntity: IConfirmEmailRequest): ApiConfirmEmailRequest {
  return {
    token: iEntity.token,
    ref: iEntity.ref,
  }
}

export function mapIConfirmPhoneRequestToApiConfirmPhoneRequest(iEntity: IConfirmPhoneRequest): ApiConfirmPhoneRequest {
  return {
    confirm_phone_code: iEntity.confirmPhoneCode,
  }
}

export function mapIConfirmPhoneSendSmsRequestToApiConfirmPhoneSendSmsRequest(iEntity: IConfirmPhoneSendSmsRequest): ApiConfirmPhoneSendSmsRequest {
  return {
    phone: iEntity.phone,
  }
}

export function mapIForgotPasswordEmailRequestToApiForgotPasswordEmailRequest(iEntity: IForgotPasswordEmailRequest): ApiForgotPasswordEmailRequest {
  return {
    email: iEntity.email,
    ref: iEntity.ref,
  }
}

export function mapIForgotPasswordPhoneRequestToApiForgotPasswordPhoneRequest(iEntity: IForgotPasswordPhoneRequest): ApiForgotPasswordPhoneRequest {
  return {
    phone: iEntity.phone,
  }
}

export function mapILoginEmailRequestToApiLoginEmailRequest(iEntity: ILoginEmailRequest): ApiLoginEmailRequest {
  return {
    email: iEntity.email,
    password: iEntity.password,
  }
}

export function mapILoginPhoneRequestToApiLoginPhoneRequest(iEntity: ILoginPhoneRequest): ApiLoginPhoneRequest {
  return {
    password: iEntity.password,
    phone: iEntity.password,
  }
}

export function mapIProfileCreateRequestToApiProfileCreateRequest(iEntity: IProfileCreateRequest): ApiProfileCreateRequest {
  return {
    birth_date: iEntity.birthDate,
    gender_id: iEntity.genderId,
    lname: iEntity.lname,
    name: iEntity.name,
    phone: iEntity.phone,
    sname: iEntity.sname,
  }
}

export function mapIRegistrationRequestToApiRegistrationRequest(iEntity: IRegistrationRequest): ApiRegistrationRequest {
  return {
    email: iEntity.email,
    password: iEntity.password,
    ref: iEntity.ref,
  }
}

export function mapIResetPasswordConfirmPhoneRequestToApiResetPasswordConfirmPhoneRequest(iEntity: IResetPasswordConfirmPhoneRequest): ApiResetPasswordConfirmPhoneRequest {
  return {
    confirm_phone_code: iEntity.confirmPhoneCode,
    phone: iEntity.phone,
  }
}

export function mapIResetPasswordRedirectRequestToApiResetPasswordRedirectRequest(iEntity: IResetPasswordRedirectRequest): ApiResetPasswordRedirectRequest {
  return {
    email: iEntity.email,
    ref: iEntity.ref,
  }
}

export function mapIResetPasswordRequestToApiResetPasswordRequest(iEntity: IResetPasswordRequest): ApiResetPasswordRequest {
  return {
    new_password: iEntity.newPassword,
    reset_password_token: iEntity.resetPasswordToken,
  }
}

export function mapIUpdateProfileRequestToApiUpdateProfileRequest(iEntity: IUpdateProfileRequest): ApiUpdateProfileRequest {
  return {
    birth_date: iEntity.data!.birthDate,
    lname: iEntity.data!.lname,
    name: iEntity.data!.name,
    otherEmails: iEntity.data!.otherEmails,
    otherPhones: iEntity.data!.otherPhones,
    sname: iEntity.data!.sname,
    socials: iEntity.data!.socials,
    gender_id: iEntity.data!.genderId,
    office_presence_status_id: iEntity.data!.officePresenceStatusId,
  }
}

export function mapIUploadFileRequestToApiUploadFileRequest(iEntity: IUploadFileRequest): ApiUploadFileRequest {
  return {
    file: iEntity.file,
    type: iEntity.file.type,
  }
}

export function mapApiLoginResponseToILoginResponse(apiEntity: ApiLoginResponse): ILoginResponse {
  return {
    data: apiEntity.user_data ? mapApiUserToIUser(apiEntity.user_data) : undefined,
  }
}

export function mapApiProfileCreateResponseToIProfileCreateResponse(apiEntity: ApiProfileCreateResponse): IProfileCreateResponse {
  return {
    data: apiEntity.user_data ? mapApiUserToIUser(apiEntity.user_data) : undefined,
  }
}

export function mapApiRegistrationResponseToIRegistrationResponse(apiEntity: ApiRegistrationResponse): IRegistrationResponse {
  return {
    data: apiEntity.user_data ? {
      token: apiEntity.user_data.token,
    } : undefined,
  }
}

export function mapApiResetPasswordConfirmPhoneResponseToIResetPasswordConfirmPhoneResponse(apiEntity: ApiResetPasswordConfirmPhoneResponse): IResetPasswordConfirmPhoneResponse {
  return {
    data: apiEntity.user_data ? {
      resetPasswordToken: apiEntity.user_data.reset_password_token
    } : undefined,
  }
}

export function mapApiResponseToIResponse(apiEntity: ApiResponse): IResponse {
  return {
    status: apiEntity.status,
    error: apiEntity.error,
    msg: apiEntity.msg,
  }
}

export function mapApiUpdateProfileResponseToIUpdateProfileResponse(apiEntity: ApiUpdateProfileResponse): IUpdateProfileResponse {
  return {
    data: apiEntity.user_data ? mapApiUserToIUser(apiEntity.user_data) : undefined,
  }
}

export function mapApiUploadFileResponseToIUploadFileResponse(apiEntity: ApiUploadFileResponse): IUploadFileResponse {
  return {
    data: apiEntity.user_data || undefined,
  }
}

export function mapApiUserInfoResponseToIUserInfoResponse(apiEntity: ApiUserInfoResponse): IUserInfoResponse {
  return {
    data: apiEntity.user_data ? mapApiUserToIUser(apiEntity.user_data) : undefined,
  }
}