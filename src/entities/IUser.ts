export default interface IUser {
  lname: string;
  name: string;
  sname: string;
  birthDate: string;
  id?: number;
  token?: string;
  isConfirmEmail?: number;
  isConfirmPhone?: number;
  isProfileCreated?: number;
  email?: string;
  phone?: string;
  password?: string;
  officePresenceStatusId?: any[];
  files?: string[];
  resetPasswordToken?: string;
  confirmPhoneCode?: string;
  genderId?: number;
  otherEmails?: string[],
  otherPhones?: string[],
  socials?: string[],
}