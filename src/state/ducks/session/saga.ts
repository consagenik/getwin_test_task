import {all, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import actions from './actions';
import types from './types';
import { IResponse, IUpdateProfileRequest, IUserInfoResponse } from '../../../entities';
import { Api } from '../../../api';
import { mapIUpdateProfileRequestToApiUpdateProfileRequest } from '../../../api/mappers';
import sessionActions from '../session/actions';

function* updateMyAccount({payload}: Action<IUpdateProfileRequest>) {
  try {
    const account: IResponse & IUpdateProfileRequest = yield Api.updateProfile(mapIUpdateProfileRequestToApiUpdateProfileRequest(payload));
    if (account?.data) {
      yield put(actions.updateUserProfileCompleted(account.data));
    }
  } catch (e) {
    throw e;
  }
}

function* fetchSession() {
  try {
    const account: IResponse & IUserInfoResponse = yield Api.getUserInfo();
    if (account?.data) {
      yield put(sessionActions.fetchUserCompleted(account.data));
      yield put(sessionActions.setSessionExists(true));
    }
  } catch (e) {
    // @ts-ignore
    yield put(sessionActions.fetchUserCompleted(e));
  }
}

export default function*() {
  yield all([takeEvery(types.UPDATE_USER_PROFILE, updateMyAccount)]);
  yield all([takeEvery(types.FETCH_SESSION, fetchSession)]);
}
