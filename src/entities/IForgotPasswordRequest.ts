export interface IForgotPasswordEmailRequest {
  email: string;
  ref?: string;
}

export interface IForgotPasswordPhoneRequest {
  phone: string;
}