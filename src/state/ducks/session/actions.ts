import { createAction } from 'redux-actions';
import types from './types';
import { IUpdateProfileRequest, IUser } from '../../../entities';

export default {
  fetchSession: createAction(types.FETCH_SESSION),
  setSessionExists: createAction<boolean>(types.SET_SESSION_EXISTS),
  fetchUserAccount: createAction(types.FETCH_USER_ACCOUNT),
  fetchUserCompleted: createAction<IUser>(types.FETCH_USER_COMPLETED),
  updateUserProfile: createAction<IUpdateProfileRequest>(types.UPDATE_USER_PROFILE),
  updateUserProfileCompleted: createAction<IUser>(types.UPDATE_USER_PROFILE_COMPLETED),
};
