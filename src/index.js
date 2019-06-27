import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import Main from './modules/Main';

const store = configureStore();

export default () => (
	<Provider store={store}>
		<Main />
	</Provider>
);
