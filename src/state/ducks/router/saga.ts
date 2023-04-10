import {all, put, select, takeEvery} from 'redux-saga/effects';
import types from './types';
import State from '../../entities/State';
import {NavigationPayload} from './actions';
import {actions as sessionActions} from '../session';
import {Action} from 'redux-actions';
import { LoadableContainer } from '../../entities/LoadableContainer';

// function goBack({payload}: Action<NavigationPayload>) {
//   payload.history.back();
// }

function* accountEntered(): Generator<
  any,
  any,
  LoadableContainer<any>
> {
  const session: LoadableContainer<any> = yield select((state: State) => state.session);
  if (!session.isSuccess && !session.isLoading) {
    yield put(sessionActions.fetchSession());
  }
}

// function navigateToAuth({payload}: Action<NavigationPayload>) {
//   payload.history.push('/auth');
// }

// function navigateToMain({payload}: Action<NavigationPayload>) {
//   payload.history.push('/main');
// }

function navigateToChangePassword() {
  // navigateTo(NavigatorKey.ChangePasswordPopUp);
}

export default function*() {
  yield all([
    // takeEvery(types.GO_BACK, goBack),
    // takeEvery(types.NAVIGATE_TO_AUTH, navigateToAuth),
    takeEvery(types.ACCOUNT_ENTERED, accountEntered),
    // takeEvery(types.NAVIGATE_TO_MAIN, navigateToMain),
    takeEvery(types.NAVIGATE_TO_CHANGE_PASSWORD, navigateToChangePassword),
  ]);
}
