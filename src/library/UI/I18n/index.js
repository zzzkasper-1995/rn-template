import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import i18n from './i18n';

const getText = key => {
	const text = i18n.t(key, {language: i18n.currentLocale()});
	return i18n.t(key, {language: i18n.currentLocale()}).includes('[missing') ? key : text;
};

/**
 * @module I
 * @description локализатор
 */
/**
 * @param {String} text текст
 * @param {Object} style стиль оформления текста
 */
const I = ({style, text}) => <Text style={style}>{getText(text)}</Text>;

I.text = (text = 'default') => getText(text);

I.propTypes = {
	text: PropTypes.string,
	style: PropTypes.any,
};

I.defaultProps = {
	text: 'default',
	style: undefined,
};

export {I};
