import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Text, View, I} from '../../../library';
import styles from './styles';

type Props = {counter: number, addCounter: Function};

export default (props: Props) => {
	const {counter, addCounter} = props;

	return (
		<View style={styles.container}>
			<Text i18n style={styles.welcome}>
				Welcome to React Native!
			</Text>
			<Text style={styles.instructions}>
				{I.text('Счетчик')}: {counter}
			</Text>
			<Text i18n onPress={addCounter}>
				Увеличить счетчик на 1
			</Text>
			<Text
				onPress={() => {
					Navigation.push('appStack', {
						component: {
							id: 'NotMain',
							name: 'NotMain',
						},
					});
				}}
			>
				sadasd
			</Text>
		</View>
	);
};
