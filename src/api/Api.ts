import {
  IForgotPasswordPhoneRequest,
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
  ApiResponse,
  ApiUserInfoResponse,
  ApiLoginResponse,
  ApiProfileCreateResponse,
  ApiRegistrationResponse,
  ApiResetPasswordConfirmPhoneResponse,
  ApiUploadFileResponse,
  ApiUpdateProfileResponse,
  ApiConfirmEmailRequest,
  ApiConfirmPhoneRequest,
  ApiConfirmPhoneSendSmsRequest,
  ApiForgotPasswordEmailRequest,
  ApiLoginEmailRequest,
  ApiLoginPhoneRequest,
  ApiProfileCreateRequest,
  ApiRegistrationRequest,
  ApiResetPasswordConfirmPhoneRequest,
  ApiResetPasswordRedirectRequest,
  ApiResetPasswordRequest,
  ApiUpdateProfileRequest,
  ApiUploadFileRequest
} from "./entities";
import http from "./http-common";
import IApi from "./IApi";
import { 
  mapApiRegistrationResponseToIRegistrationResponse,
  mapApiResetPasswordConfirmPhoneResponseToIResetPasswordConfirmPhoneResponse,
  mapApiResponseToIResponse,
  mapApiUpdateProfileResponseToIUpdateProfileResponse,
  mapApiUploadFileResponseToIUploadFileResponse,
  mapApiUserToIUser
} from "./mappers";

export default class Api implements IApi {
  public async confirmEmail(data: ApiConfirmEmailRequest): Promise<void> {
    return http.get(`/profile/confirmEmail/?data=${data}`);
  }

  public async confirmPhone(data: ApiConfirmPhoneRequest): Promise<IResponse> {
    const userToken = localStorage.getItem('user_token');

    const res = await http.post<ApiResponse>(`/profile/confirmPhone/?data=${data}`, {}, {headers: {
      userToken,
    }});

    return mapApiResponseToIResponse(res.data);
  }

  public async forgotPassword(data: ApiForgotPasswordEmailRequest | IForgotPasswordPhoneRequest): Promise<IResponse> {
    const res = await http.post<ApiResponse>(`/profile/forgotPassword`, data);

    return mapApiResponseToIResponse(res.data);
  }

  public async getUserInfo(): Promise<IResponse & IUserInfoResponse> {
    const userToken = localStorage.getItem('user_token');

    const res = await http.get<ApiResponse & ApiUserInfoResponse>('/profile/get_userInfo', {headers: {
      userToken,
    }});

    return {
      ...mapApiResponseToIResponse(res.data),
      ...(res.data.user_data ? {data: mapApiUserToIUser(res.data.user_data)} : {})
    };
  }

  public async login(data: ApiLoginEmailRequest | ApiLoginPhoneRequest): Promise<IResponse & ILoginResponse> {
    const res = await http.post<ApiResponse & ApiLoginResponse>('/profile/loginUser', data);

    return {
      ...mapApiResponseToIResponse(res.data),
      ...(res.data.user_data ? {data: mapApiUserToIUser(res.data.user_data)} : {})
    }
  }

  public async profileCreate(data: ApiProfileCreateRequest): Promise<IResponse & IProfileCreateResponse> {
    const userToken = localStorage.getItem('user_token');

    const res = await http.post<ApiResponse & ApiProfileCreateResponse>('/profile/profileCreate', data, {headers: {
      userToken,
    }});

    return {
      ...mapApiResponseToIResponse(res.data),
      ...(res.data.user_data ? {data: mapApiUserToIUser(res.data.user_data)} : {})
    }
  }

  public async registration(data: ApiRegistrationRequest): Promise<IResponse & IRegistrationResponse> {
    const res = await http.post<ApiResponse & ApiRegistrationResponse>('/profile/registration', data);

    return {
      ...mapApiResponseToIResponse(res.data),
      ...(res.data.user_data ? mapApiRegistrationResponseToIRegistrationResponse(res.data) : {})
    }
  }

  public async resetPassword(data: ApiResetPasswordRequest): Promise<IResponse> {
    const res = await http.post<ApiResponse>('/profile/resetPassword', data);

    return mapApiResponseToIResponse(res.data);
  }

  public async resetPasswordConfirmPhone(data: ApiResetPasswordConfirmPhoneRequest): Promise<IResponse & IResetPasswordConfirmPhoneResponse> {
    const res = await http.post<ApiResponse & ApiResetPasswordConfirmPhoneResponse>('/profile/resetPasswordConfirmPhone', data);

    return {
      ...mapApiResponseToIResponse(res.data),
      ...(res.data.user_data ? mapApiResetPasswordConfirmPhoneResponseToIResetPasswordConfirmPhoneResponse(res.data) : {})
    }
  }

  public async resetPasswordRedirect(data: ApiResetPasswordRedirectRequest): Promise<void> {
    return http.get(`/profile/resetPasswordRedirect?data=${data}`);
  }

  public async confirmPhoneSendSms(data: ApiConfirmPhoneSendSmsRequest): Promise<IResponse> {
    const userToken = localStorage.getItem('user_token');

    const res = await http.post<ApiResponse>('/profile/confirmPhoneSendSms', data, {headers: {
      userToken,
    }});

    return mapApiResponseToIResponse(res.data);
  }

  public async logoutUser(): Promise<IResponse> {
    const userToken = localStorage.getItem('user_token');

    const res = await http.post<ApiResponse>('/profile/logoutUser', {}, {headers: {
      userToken,
    }});

    return mapApiResponseToIResponse(res.data);
  }

  public async updateProfile(data: ApiUpdateProfileRequest): Promise<IResponse & IUpdateProfileResponse> {
    const userToken = localStorage.getItem('user_token');

    const res = await http.post<ApiResponse & ApiUpdateProfileResponse>('/profile/updateProfile', data, {headers: {
      userToken,
    }});

    return {
      ...mapApiResponseToIResponse(res.data),
      ...(res.data.user_data ? mapApiUpdateProfileResponseToIUpdateProfileResponse(res.data) : {})
    }
  }

  public async uploadFile(data: ApiUploadFileRequest): Promise<IResponse & IUploadFileResponse> {
    const userToken = localStorage.getItem('user_token');

    const formData = new FormData();
    formData.append("type", data.file.type);
    formData.append("file", data.file);

    const res = await http.post<ApiResponse & ApiUploadFileResponse>('/profile/uploadFile', formData, {headers: {
      userToken,
      'Content-Type': 'multipart/form-data',
    }});

    return {
      ...mapApiResponseToIResponse(res.data),
      ...(res.data.user_data ? mapApiUploadFileResponseToIUploadFileResponse(res.data) : {})
    }
  }
}