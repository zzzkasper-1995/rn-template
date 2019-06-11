import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import IMAGE from './sourses';
import styles from './styles';

/**
 * @module Icon
 * @description Icon
 */
/**
 * @param {String} name имя иконки
 * @param {Object} style стиль иконки (в том числе высота и ширина)
 * @param {String} color цвет иконки
 */
const Icon = ({style, name, color}) => {
	const styleIc = [styles.icon, color && {tintColor: color}, style];

	return <Image style={styleIc} source={IMAGE[name]} resizeMode='contain' fadeDuration={0} />;
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	style: PropTypes.object,
	color: PropTypes.string,
};

Icon.defaultProps = {
	style: {},
	color: 'white',
};

export {Icon, IMAGE as IconSourse};
