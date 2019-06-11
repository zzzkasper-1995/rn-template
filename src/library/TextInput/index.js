import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';
import {TextMask} from '../TextMask';
// import styles from './styles';

/**
 *  Обертка над видженом
 *
 * @class KasperTextInput
 * @extends {React.PureComponent}
 */
class KasperTextInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
	}

	componentDidMount() {
		const {autoFocus} = this.props;

		if (autoFocus) {
			setTimeout(() => {
				this.textInput && this.textInput.focus();
			}, 500);
		}
	}

	_onChangeText = text => {
		const {onChangeText, input, keyboardType} = this.props;

		onChangeText && onChangeText(text);
		input && input.onChange && input.onChange(text); // для редакс-форм или финал-форм

		if (keyboardType === 'numeric' || keyboardType === 'number-pad') {
			this.textInput.clear();
			this.setState({value: text.replace(/\D/g, '')});
		} else {
			this.setState({value: text});
		}
	};

	focus = () => {
		this.textInput.focus();
	};

	render() {
		const {value} = this.state;
		const {mask, reference, input} = this.props;

		const str = (input && input.value) || value || '';

		return (
			<TextInput
				{...this.props}
				onChangeText={text => this._onChangeText(text)}
				ref={ref => {
					reference && reference(ref);
					this.textInput = ref;
				}}
				autoFocus={false}
			>
				{mask ? TextMask.getMaskedValue(str, mask) : str}
			</TextInput>
		);
	}
}

KasperTextInput.propTypes = {
	autoFocus: PropTypes.bool,
	onChangeText: PropTypes.func,
	input: PropTypes.object,
	keyboardType: PropTypes.string
	style: PropTypes.any,
};

KasperTextInput.defaultProps = {
	autoFocus: false,
	onChangeText: undefined,
	input: undefined,
	keyboardType: undefined,
	style: {},
};

export {KasperTextInput as TextInput};
