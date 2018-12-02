import { combineReducers, createStore } from 'redux';
import favorites from './favorites.reducer';

const reducer = combineReducers({ favorites });
const store = createStore(reducer);

export default store;
