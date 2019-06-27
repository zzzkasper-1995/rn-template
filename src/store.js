import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import store from './core/reducers';

let enhacers;

// eslint-disable-next-line
if (__DEV__ === true) {
	enhacers = applyMiddleware(thunk, createLogger({collapsed: true}));
} else {
	enhacers = applyMiddleware(thunk, createLogger({collapsed: true}));
}

export default function configureStore() {
	return createStore(store, enhacers);
}
