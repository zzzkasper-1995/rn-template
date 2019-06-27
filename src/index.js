import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import configureStore from './store';
import Main from './modules/Main';
import NotMain from './modules/NotMain';

const store = configureStore();

// export default () => (
// 	<Provider store={store}>
// 		<Main />
// 	</Provider>
// );

Navigation.registerComponentWithRedux('Main', () => Main, Provider, store);
Navigation.registerComponentWithRedux('NotMain', () => NotMain, Provider, store);
