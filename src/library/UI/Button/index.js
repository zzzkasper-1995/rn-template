import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {View} from '../View';
import {Color} from '../Theme/Color';

import styles from './styles';

const OPACITY = 0.7;

/**
 * @module Button
 * @description Кнопка
 */
/**
 * @param {Function} onAction функция срабатываемая при нажатии
 * @param {String} text текст в нутри кнопки
 * @param {String} type тип кнопки
 * @param {String} color цвет кнопки в активном состоянии
 * @param {String} disabledColor цвет кнопки в неактивном состоянии
 * @param {String} icon название иконки отображаемой в кнопке
 * @param {Object} iconStyle стиль для иконки
 * @param {Object} style стили
 * @param {Boolean} isLoadBar нужен ли индикатор загрузки
 * @param {Boolean} enable активна кнопка или нет
 * @param {Number} activeOpacity прозрачность кнопки
 */
const Button = props => {
	const {
		onAction,
		text,
		type,
		color,
		style,
		icon,
		iconStyle,
		isLoadBar,
		enable = true,
		disabledColor,
		activeOpacity,
	} = props;

	const styleFull = [
		styles.btnFull,
		style,
		color && {backgroundColor: color},
		!disabledColor && (!enable || isLoadBar) && {opacity: OPACITY},
		disabledColor && (!enable || isLoadBar) && {backgroundColor: disabledColor},
	];
	const styleAround = [
		styles.btnAround,
		style,
		color && {borderColor: color},
		(!enable || isLoadBar) && {opacity: OPACITY},
		disabledColor && (!enable || isLoadBar) && {backgroundColor: disabledColor},
	];

	switch (type) {
		case 'full': {
			return (
				<View style={styles.container}>
					<TouchableOpacity
						style={styleFull}
						onPress={onAction}
						activeOpacity={activeOpacity || OPACITY}
						disabled={isLoadBar || !enable}
					>
						{isLoadBar ? (
							<ActivityIndicator size='large' color='white' />
						) : (
							<View style={styles.inButtonContainer}>
								{icon && <Icon name={icon} style={styles.icon} style={iconStyle} />}
								<Text style={styles.textBtnFull} i18n ellipsizeMode='tail' numberOfLines={1}>
									{text}
								</Text>
							</View>
						)}
					</TouchableOpacity>
				</View>
			);
		}
		case 'around': {
			return (
				<View style={styles.container}>
					<TouchableOpacity
						style={styleAround}
						onPress={onAction}
						activeOpacity={OPACITY}
						disabled={isLoadBar || !enable}
					>
						{isLoadBar ? (
							<ActivityIndicator size='large' color={color || 'black'} />
						) : (
							<View style={styles.inButtonContainer}>
								{icon && <Icon name={icon} style={styles.icon} color={color} style={iconStyle} />}
								<Text style={styles.textBtnAround} i18n ellipsizeMode='tail' numberOfLines={1}>
									{text}
								</Text>
							</View>
						)}
					</TouchableOpacity>
				</View>
			);
		}
		default: {
			const disabled = isLoadBar || !enable;
			return (
				<TouchableOpacity
					activeOpacity={OPACITY}
					{...props}
					onPress={onAction}
					disabled={disabled}
				/>
			);
		}
	}
};

Button.propTypes = {
	onAction: PropTypes.func,
	text: PropTypes.string,
	type: PropTypes.string,
	color: PropTypes.string,
	disabledColor: PropTypes.string,
	icon: PropTypes.string,
	iconStyle: PropTypes.any,
	enable: PropTypes.bool,
	isLoadBar: PropTypes.bool,
	style: PropTypes.any,
	activeOpacity: PropTypes.number,
};

Button.defaultProps = {
	onAction: () => {},
	text: undefined,
	type: undefined,
	color: undefined,
	disabledColor: undefined,
	icon: undefined,
	iconStyle: {},
	enable: true,
	isLoadBar: false,
	style: {},
	activeOpacity: 0.7,
};

export {Button};
