import {Action, handleActions} from 'redux-actions';
import types from './types';
import { Auth } from '../../entities';

export default handleActions<Auth, any>(
  {
    [types.LOGIN_USER]: (state) => ({...state, isBusy: true}),
    [types.REGISTER_USER]: (state) => ({...state, isBusy: true}),
    [types.AUTH_COMPLETED]: (state) => ({...state, isBusy: false}),
    [types.RECOVER_PASSWORD]: (state) => ({...state, isBusy: true}),
    [types.RECOVER_PASSWORD_COMPLETED]: (state) => ({...state, isBusy: false})
  },
  {isBusy: false, isChecking: false, isLoading: false},
);
