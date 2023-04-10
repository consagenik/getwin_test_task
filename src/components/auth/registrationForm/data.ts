
import * as Yup from 'yup';

import { GoogleIcon, FacebookIcon, LinkedInIcon } from "../../../assets/images";

export interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const initialValues: FormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Неверный формат почты')
    .required('Поле обязательно для заполнения'),
  password: Yup.string().required('Поле обязательно для заполнения'),
  confirmPassword: Yup.string()
    .required('Поле обязательно для заполнения')
    // @ts-ignore
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
});

export const socialNetworks = [
  {
    key: 'google',
    icon: GoogleIcon,
    url: 'https://google.com',
  },
  {
    key: 'facebook',
    icon: FacebookIcon,
    url: 'https://facebook.com',
  },
  {
    key: 'linkedin',
    icon: LinkedInIcon,
    url: 'https://linkedin.com',
  },
];
