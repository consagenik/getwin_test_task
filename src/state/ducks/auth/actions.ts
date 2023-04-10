import {createAction} from 'redux-actions';
import types from './types';
import { IForgotPasswordEmailRequest, IForgotPasswordPhoneRequest, ILoginEmailRequest, ILoginPhoneRequest, IRegistrationRequest } from '../../../entities';

export type RegisterUser = {request: IRegistrationRequest};
export type AuthCompleted = {session: any, error?: any};
export type Login = {request: ILoginEmailRequest | ILoginPhoneRequest};
export type RecoverPassword = {request: IForgotPasswordEmailRequest | IForgotPasswordPhoneRequest};

export default {
  registerUser: createAction<RegisterUser>(types.REGISTER_USER),
  login: createAction<Login>(types.LOGIN_USER),
  authCompleted: createAction<AuthCompleted>(types.AUTH_COMPLETED),
  logout: createAction(types.LOGOUT),
  recoverPassword: createAction<RecoverPassword>(types.RECOVER_PASSWORD),
  recoverPasswordCompleted: createAction(
    types.RECOVER_PASSWORD_COMPLETED,
  ),
};
