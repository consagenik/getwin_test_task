import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createBrowserHistory } from 'history';

import { State } from './entities';
import {reducer as authReducer, saga as authSaga} from './ducks/auth';
import {reducer as sessionReducer, saga as sessionSaga} from './ducks/session';

export const history = createBrowserHistory();

const rootReducer = combineReducers<State>({
  auth: authReducer,
  session: sessionReducer,
});

function* rootSaga() {
  yield all([
    authSaga(),
    sessionSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  //
  sagaMiddleware,
];

// compose enhancers
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

// create store
export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;