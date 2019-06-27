import {Navigation} from 'react-native-navigation';
import App from './src';

Navigation.registerComponent('navigation.playground.WelcomeScreen', () => App);

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			stack: {
				id: 'appStack',
				options: {
					topBar: {
						visible: false,
					},
				},
				children: [
					{
						component: {
							id: 'Main',
							name: 'Main',
							passProps: {
								text: 'This is tab 1',
								myFunction: () => 'Hello from a function!',
							},
						},
					},
				],
			},
		},
	});
});
