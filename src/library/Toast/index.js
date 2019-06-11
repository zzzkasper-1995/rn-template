import {Alert} from 'react-native';
import SimpleToast from 'react-native-simple-toast';

/**
 * Выводит информацию алертом или кастомным боксом
 *
 * @class Toast
 */
class Toast {}

/** Массив запросов */
const PoolRequest = [];
/**
 * Вывод модального окна на эран
 * @param {Object} params - объект содержащий buttons - массив кнопок,title-заголовок message-сообщение пользователю,cancelable-?
 * @memberof Toast
 */
Toast.alert = ({buttons, title, message, cancelable}) => {
	const arrayBtn = buttons.map(el => ({
		text: el.text,
		onPress: () => el.onAction(),
	}));
	Alert.alert(title, message, arrayBtn, {
		cancelable,
	});
};

/**
 * Вывод кастомного сообщения
 *
 * @param {String} message  сообшение
 * @param {String} type  тип отображения
 * @memberof Toast
 */
Toast.short = (message, type = 'SHORT') => {
	SimpleToast.show(message, SimpleToast[type]);
};

/**
 *
 * @memberof Toast
 */
Toast.showWithGravity = (message, type = 'SHORT', position = 'BOTTOM') => {
	SimpleToast.showWithGravity(message, SimpleToast[type], SimpleToast[position]);
};

Toast.loginError = actionBtn => {
	Toast.alert({
		title: 'Ошибка',
		message: 'Вы ввели неверный логин или пароль',
		buttons: [
			{
				text: 'OK',
				onAction: actionBtn,
			},
		],
		cancelable: true,
	});
};

Toast.requestError = (text = '', action = () => {}) => {
	const message = text === '' ? 'Что-то пошло не так' : text;
	if (!PoolRequest.includes(message)) {
		Toast.alert({
			title: 'Ошибка',
			message,
			buttons: [
				{
					text: 'OK',
					onAction: () => {
						action();
						const index = PoolRequest.indexOf(message);
						setTimeout(() => {
							PoolRequest.splice(index, 1);
						}, 3 * 1000);
					},
				},
			],
			cancelable: true,
		});
		PoolRequest.push(message);
	}
};

// Toast.show=(text,isAlert)=>{
// 	text
// }

export {Toast};
