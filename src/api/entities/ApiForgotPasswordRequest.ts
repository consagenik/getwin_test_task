export interface ApiForgotPasswordEmailRequest {
  email: string;
  ref?: string;
}

export interface ApiForgotPasswordPhoneRequest {
  phone: string;
}