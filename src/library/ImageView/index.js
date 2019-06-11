import React from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import {Image} from 'react-native';
import {View} from '../View';
import {Text} from '../Text';

import IMAGE from './sourses';
import styles from './styles';

/**
 * @module ImageView
 * @description Блок с картинкой
 */
/**
 * @param {String} name имя картинки, если отображаеться из списка имеющихся
 * @param {Object} style стиль иконки (в том числе высота и ширина)
 * @param {Object} uri uri до картинки, на пример {uri: 'www.google.com/yeuiyriy'}
 * @param {String} resizeMode тип автоподгонки картинки
 * @param {Boolean} isFast использовать более оптимизированный компонент для вывода картинок (FastImage) или обычный Image
 */
const ImageView = props => {
	const {style, name, uri, resizeMode, isFast, text} = props;
	const styleImg = [styles.image, style];

	if (isFast) {
		if (uri) {
			return text ? (
				<View style={[styleImg, styles.reserveView]}>
					{!!(text && text.length >= 1) && <Text style={styles.text}>{text.toUpperCase()[0]}</Text>}
					<FastImage
						style={[styleImg, {position: 'absolute', top: 0, left: 0}]}
						source={uri}
						resizeMode={FastImage.resizeMode[resizeMode]}
					/>
				</View>
			) : (
				<FastImage style={styleImg} source={uri} resizeMode={FastImage.resizeMode[resizeMode]} />
			);
		}
		if (name) {
			return (
				<FastImage
					style={styleImg}
					source={IMAGE[name]}
					resizeMode={FastImage.resizeMode[resizeMode]}
				/>
			);
		}
		return (
			<View style={[styleImg, styles.reserveView]}>
				{text && text.length >= 1 && (
					<Text style={styles.text}>{text && text.toUpperCase()[0]}</Text>
				)}
			</View>
		);
	}
	return <Image style={styleImg} source={uri || IMAGE[name]} resizeMode={resizeMode} />;
};

ImageView.propTypes = {
	name: PropTypes.string,
	style: PropTypes.any,
	uri: PropTypes.oneOfType([PropTypes.shape({uri: PropTypes.string}), PropTypes.number]),
	resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat', 'center']),
	isFast: PropTypes.bool,
	text: PropTypes.string,
};

ImageView.defaultProps = {
	name: undefined,
	style: {},
	uri: undefined,
	resizeMode: 'contain',
	isFast: true,
	text: undefined,
};

export {ImageView};
