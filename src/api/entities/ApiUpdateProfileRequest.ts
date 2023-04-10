export default interface ApiUpdateProfileRequest {
  lname: string;
  name: string;
  sname: string;
  birth_date: string;
  office_presence_status_id?: any[];
  gender_id?: number;
  otherEmails: string[];
  otherPhones: string[];
  socials: string[];
}