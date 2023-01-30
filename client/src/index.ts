import './style.scss';
import './router/router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './logic/redux/root-reduces';
// TODO - добавить стор в функцию Init
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log(store);
