import {useDispatch} from 'react-redux';

import {
  IForgotPasswordEmailRequest,
  IForgotPasswordPhoneRequest,
  ILoginEmailRequest,
  ILoginPhoneRequest,
  IRegistrationRequest,
  IUpdateProfileRequest
} from '../../entities';
import {actions as authActions} from '../ducks/auth';
import {actions as sessionActions} from '../ducks/session';

export function useAuthActions() {
  const dispatch = useDispatch();

  return {
    registerUser: (registerRequest: IRegistrationRequest) => {
      dispatch(authActions.registerUser({request: registerRequest}));
    },
    login: (loginRequest: ILoginEmailRequest | ILoginPhoneRequest) => {
      return dispatch(authActions.login({request: loginRequest}));
    },
    updateUserProfile: (updateRequest: IUpdateProfileRequest) => {
      dispatch(sessionActions.updateUserProfile(updateRequest));
    },
    logout: () => dispatch(authActions.logout()),
    recoverPassword: (data: IForgotPasswordEmailRequest | IForgotPasswordPhoneRequest) => {
      dispatch(authActions.recoverPassword({request: data}));
    },
  };
}