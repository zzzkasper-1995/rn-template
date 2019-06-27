import React from 'react';
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
		</View>
	);
};
