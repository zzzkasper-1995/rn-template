import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {I} from '../I18n';
import styles from './styles';

/**
 * Обертка над текстом
 *
 * @class KasperText
 * @extends {React.PureComponent}
 */
class KasperText extends React.PureComponent {
	render() {
		const {style, children, i18n} = this.props;
		return i18n ? (
			<Text {...this.props} style={[styles.text, style]}>
				{I.text(children)}
			</Text>
		) : (
			<Text {...this.props} style={[styles.text, style]} />
		);
	}
}

KasperText.propTypes = {
	...Text.PropTypes,
	i18n: PropTypes.bool,
};

KasperText.defaultProps = {
	i18n: false,
};

export {KasperText as Text};
