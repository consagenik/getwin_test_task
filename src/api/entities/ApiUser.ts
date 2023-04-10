export default interface ApiUser {
  id?: number;
  token?: string;
  is_confirm_email?: number;
  is_confirm_phone?: number;
  is_profile_created?: number;
  email?: string;
  phone?: string;
  password?: string;
  lname: string;
  name: string;
  sname: string;
  birth_date: string;
  office_presence_status_id?: any[];
  files?: string[];
  reset_password_token?: string;
  confirm_phone_code?: string;
  gender_id?: number;
  otherEmails?: string[],
  otherPhones?: string[],
  socials?: string[],
}