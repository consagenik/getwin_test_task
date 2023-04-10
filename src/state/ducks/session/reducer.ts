import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import { SessionContainer } from '../../entities/Session';
import { success, loading, empty, failed } from '../../entities/LoadableContainer';
import { IUser } from '../../../entities';

const initialState: SessionContainer = {
  exists: false,
  ...empty(),
};

const setSessionExists: ReducerNextThrow<SessionContainer, any> = {
  next: (state, {payload}) => ({...state, exists: payload}),
};

const fetchUserAccountCompleted: ReducerNextThrow<SessionContainer, IUser> = {
  next: (state, {payload}) => ({...state, ...success({account: payload})}),
  // @ts-ignore
  throw: (_, {payload}) => failed(payload),
};

const updateMyAccountCompleted: ReducerNextThrow<SessionContainer, IUser> = {
  next: (state, {payload}) => ({...state, ...success({}), account: payload}),
  // @ts-ignore
  throw: (_, {payload}) => failed(payload),
};

export default handleActions<SessionContainer, any>(
  {
    [types.SET_SESSION_EXISTS]: setSessionExists,
    [types.FETCH_USER_ACCOUNT]: (state) =>
      state.exists ? {exists: true, ...loading(state)} : {exists: false},
    [types.FETCH_USER_COMPLETED]: fetchUserAccountCompleted,
    [types.UPDATE_USER_PROFILE_COMPLETED]: updateMyAccountCompleted,
  },
  initialState,
);
