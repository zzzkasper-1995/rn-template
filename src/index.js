import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from './library';
import store from './store';
import {rootLoadApp} from './routes';
import {Main, NotMain} from './modules';

Navigation.registerComponent('Main', Main, Provider, store);
Navigation.registerComponent('NotMain', NotMain, Provider, store);

Navigation.Nav.events().registerAppLaunchedListener(() => {
	Navigation.setRoot(rootLoadApp);
});
