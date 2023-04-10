export default interface IUpdateProfileRequest {
  data?: {
    lname: string;
    name: string;
    sname: string;
    birthDate: string;
    officePresenceStatusId?: any[];
    genderId?: number;
    otherEmails: string[];
    otherPhones: string[];
    socials: string[];
  }
}