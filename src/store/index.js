import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';

let enhacers;

// eslint-disable-next-line
if (__DEV__ === true) {
	enhacers = applyMiddleware(thunk, createLogger({collapsed: true}));
} else {
	enhacers = applyMiddleware(thunk, createLogger({collapsed: true}));
}

function configureStore() {
	return createStore(rootReducer, enhacers);
}

const store = configureStore();

export default store;
export * from './action'
