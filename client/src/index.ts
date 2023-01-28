import './style.scss';
import './router/router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './logic/redux/root-reduces';
import logger from 'redux-logger';

// TODO - добавить стор в функцию Init
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log(store);
