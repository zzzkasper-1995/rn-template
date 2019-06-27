import React, {Component} from 'react';
import {Text, View} from '../../../library';
import styles from './styles';

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
			</View>
		);
	}
}
