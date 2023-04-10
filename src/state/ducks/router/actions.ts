import { createAction } from 'redux-actions';
import types from './types';
import * as H from 'history';

export type NavigationPayload = {history: H.History};

export default {
  goBack: createAction(types.GO_BACK),
  accountEntered: createAction(types.ACCOUNT_ENTERED),
  navigateToAuth: createAction(types.NAVIGATE_TO_AUTH),
  navigateToMain: createAction(types.NAVIGATE_TO_MAIN),
  navigateToChangePassword: createAction(types.NAVIGATE_TO_CHANGE_PASSWORD),
  mainEntered: createAction(types.MAIN_ENTERED),
};
