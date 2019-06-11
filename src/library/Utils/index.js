// всякие функции которые могут пригодиться при обработке данных
import {Linking} from 'react-native';
import moment from 'moment';
import 'moment/locale/ru';
import {I} from '../I18n';

moment.locale('ru');

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Форматирует дату
const getDate = date => {
	const dateNow = new Date();
	const dateInput = new Date(date);
	const day = dateInput.getDate();
	const month = dateInput.getMonth();
	const year = dateInput.getFullYear();

	if (dateNow.getFullYear() === year && dateNow.getMonth() === month && dateNow.getDate() === day) {
		return I.text('Сегодня');
	}
	return moment(dateInput).format('DD MMM YYYY');
};

// Обертка над Linkink
const onLinking = url => {
	Linking.canOpenURL(url)
		.then(supported => {
			if (!supported) {
				console.log('onLinking error');
			} else {
				return Linking.openURL(url);
			}
		})
		.catch(err => console.log('onLinking error'));
};

// преобразует массив в объект
const arrayToMap = (array, key, initial = {}) =>
	array.reduce((prev, item) => {
		const o = prev;
		const i = item[key];
		o[i] = item;
		return o;
	}, initial);

const objectToHash = object => {
	const hash = {};
	Object.keys(object).forEach(key => {
		hash[key] = JSON.stringify(object[key]);
	});
	return hash;
};

/**
 * Преобразует объект объектов в массив объектов, коючи сохранятся в поле 'id'
 * @param { Object } object объект
 * @returns возращает массив
 */
const objectToArray = object => Object.keys(object || {}).map(key => ({...object[key], id: key}));

/**
 * Фрматирует текущую дату или переданную к определенному виду
 * @param { Date? } date дата (не обязательный параметр)
 * @returns возращает дату
 */
const formatDate = date => {
	let d;
	if (!date) {
		d = new Date();
	} else {
		d = date;
	}
	let dd = d.getDate();
	if (dd < 10) dd = `0${dd}`;

	let mm = d.getMonth() + 1;
	if (mm < 10) mm = `0${mm}`;

	const yy = d.getFullYear();
	// if (yy < 10) yy = `0${yy}`;

	return `${yy}-${mm}-${dd}`;
};

const formatNumer = str => str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

/** Округление числа до заданной точности,
// форматируем число, добавляем пробелы между разрядами  */
const rounding = (numb, eps) => {
	// console.log(numb, eps);
	if (numb !== undefined && numb !== null) {
		let vn = '';
		if (typeof numb === 'number') {
			vn = numb;
		} else {
			vn = numb.split(' ').join('');
		}
		const n = +vn;
		const e = eps ? (+eps > 1 && +eps < 5 ? 1 / 10 ** +eps : +eps) : 0.01;
		const res = Math.round(n / e, 0) * e;
		const epL = e.toString().length;
		const needL = e < 1 ? epL - 2 : 0;
		const r = (needL > 0 ? res.toFixed(needL) : res.toFixed()).split('.');
		return `${formatNumer(r[0])}${r[1] ? `.${r[1]}` : ''}`;
	}
	return '0';
};

// получаем первый ключ в объекте
const getFirstKey = obj => {
	const arr = Object.keys(obj);
	if (arr.length > 0) {
		return arr[0];
	}
	return undefined;
};

const Utils = {
	onLinking,
	arrayToMap,
	objectToHash,
	objectToArray,
	formatDate,
	getFirstKey,
	getDate,
	sleep,
	rounding,
};
export {Utils};
