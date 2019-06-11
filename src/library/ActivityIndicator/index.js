import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';
import {View} from '../View';
import {Color} from '../Color';
import styles from './styles';

/**
 * @module KasperActivityIndicator
 * @description индикатор загрузки
 */
/**
 * @param {Boolean} isAllSpace заполнить пространство активити индикатором
 * @param {Object} style стили
 */
class KasperActivityIndicator extends React.PureComponent {
	render() {
		const {isAllSpace, style} = this.props;

		if (isAllSpace) {
			return (
				<View style={[styles.allSpace, style]}>
					<ActivityIndicator color={Color.BLUE} {...this.props} />
				</View>
			);
		}
		return <ActivityIndicator {...this.props} />;
	}
}

KasperActivityIndicator.propTypes = {
	isAllSpace: PropTypes.bool,
	style: PropTypes.any,
};

KasperActivityIndicator.defaultProps = {
	isAllSpace: false,
	style: undefined,
};

export {KasperActivityIndicator as ActivityIndicator};
