import types from './types';
import {all, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import sessionActions from '../session/actions';
import routerActions from '../router/actions';
import snackActions from '../snackBar/actions';
import actions, {AuthCompleted, Login, RecoverPassword, RegisterUser} from './actions';
import { Api } from '../../../api';
import { mapILoginEmailRequestToApiLoginEmailRequest, mapILoginPhoneRequestToApiLoginPhoneRequest, mapIRegistrationRequestToApiRegistrationRequest } from '../../../api/mappers';
import { ILoginEmailRequest, ILoginPhoneRequest, ILoginResponse, IRegistrationResponse, IResponse } from '../../../entities';
import { ApiLoginEmailRequest, ApiLoginPhoneRequest } from '../../../api/entities';

function* registerUser({payload: {request}}: Action<RegisterUser>) {
  try {
    console.log('registerUser', request);
    const session: IResponse & IRegistrationResponse = yield Api.registration(
      mapIRegistrationRequestToApiRegistrationRequest(request),
    );
    yield put(actions.authCompleted({session}));
  } catch (e) {
    yield put(actions.authCompleted({session: {}, error: e}));
  }
}

function* authCompleted({payload, error}: Action<AuthCompleted>) {
  if (error) {
    yield put(
      snackActions.showSnackbar({message: error, type: 'error'}),
    );
    return;
  }

  console.log(payload);

  localStorage.setItem('user_token', payload.session.token);
  yield put(sessionActions.setSessionExists(true));
  yield put(routerActions.navigateToMain());
  yield put(sessionActions.fetchSession());
}

function* logout() {
  localStorage.removeItem('user_token');
  yield put(routerActions.navigateToAuth());
}

function* loginUser({payload}: Action<Login>) {
  try {
    const mappedData: ApiLoginEmailRequest | ApiLoginPhoneRequest = 'email' in payload.request 
      ? mapILoginEmailRequestToApiLoginEmailRequest(payload.request as ILoginEmailRequest)
      : mapILoginPhoneRequestToApiLoginPhoneRequest(payload.request as ILoginPhoneRequest);
    const session: IResponse & ILoginResponse = yield Api.login(mappedData);
    yield put(actions.authCompleted({session, }));
  } catch (e) {
    // @ts-ignore
    yield put(actions.authCompleted(e));
  }
}

function* recoverPassword({payload: {request, }}: Action<RecoverPassword>) {
  try {
    yield Api.forgotPassword(request);
    yield put(actions.recoverPasswordCompleted());
  } catch (e) {
    // @ts-ignore
    yield put(actions.recoverPasswordCompleted(e));
  }
}

export default function*() {
  yield all([
    takeEvery(types.LOGOUT, logout),
    takeEvery(types.REGISTER_USER, registerUser),
    takeEvery(types.AUTH_COMPLETED, authCompleted),
    takeEvery(types.LOGIN_USER, loginUser),
    takeEvery(types.RECOVER_PASSWORD, recoverPassword),
  ]);
}
