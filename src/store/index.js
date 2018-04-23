import { createStore } from 'redux';
import reducers from '../reducers/index';
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

const store = createStore(reducers);

const store = createStore(
  reducer,
  DevTools.instrument()
);

export default store;

