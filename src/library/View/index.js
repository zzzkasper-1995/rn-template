import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from './styles';

/**
 *  Обертка над видженом
 *
 * @class KasperView
 * @extends {React.PureComponent}
 */
class KasperView extends React.PureComponent {
	render() {
		const {style, pressDismissKeyboard} = this.props;
		if (pressDismissKeyboard) {
			return (
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
					<View {...this.props} style={[styles.view, style]} />
				</TouchableWithoutFeedback>
			);
		}
		return <View {...this.props} style={[styles.view, style]} />;
	}
}

KasperView.propTypes = {
	pressDismissKeyboard: PropTypes.bool,
	style: PropTypes.any,
};

KasperView.defaultProps = {
	pressDismissKeyboard: false,
	style: {},
};

export {KasperView as View};
