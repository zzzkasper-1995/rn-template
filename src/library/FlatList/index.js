import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';

/**
 *  Обертка над видженом FlatList
 *
 * @class KasperFlatList
 * @extends {React.PureComponent}
 */
class KasperFlatList extends React.PureComponent {
	render() {
		const {style} = this.props;

		return (
			<FlatList
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				{...this.props}
				style={[styles.view, style]}
			/>
		);
	}
}

KasperFlatList.propTypes = {
	...FlatList.propTypes,
};

KasperFlatList.defaultProps = {
	...FlatList.defaultProps,
};

export {KasperFlatList as FlatList};
