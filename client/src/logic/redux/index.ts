import { legacy_createStore as createStore, applyMiddleware, Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

import { rootReducer } from './root-reduces';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export type RootState = ReturnType<typeof store.getState>;

// асинхронный диспатч
export const appDispatch = store.dispatch as ThunkDispatch<RootState, void, Action>;

export type AppDispatch = typeof appDispatch;
