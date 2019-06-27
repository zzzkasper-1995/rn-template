/** @module Navigation */
import {Navigation as Nav} from 'react-native-navigation';

let lastNameScreen = '';
let stack = []; // для стэк навигации (орентировочный маршрут)
let isWait = false; // для игнорирования сторонних операций во время совершения операции
const timeWait = 300; // ms

/**
 * Регистрация компонентов
 * @param {String} name имя компонента
 * @param {Object} component компонент
 */
function registerComponent(name, component, provider, store) {
	Nav.registerComponentWithRedux(name, () => component, provider, store);
}

/**
 * Переход вперед по стек навигации
 * @param {String} currentID имя компонента с которого делается переход
 * @param {String} nameScreen имя компонента на который делается переход
 * @param {Object} passProps при навигации можно прокинуть props на экран
 * @param {Object} options настройки перехода см(док wix/react-native-navigation)
 */
const push = (currentID: string, name: string, passProps: Object, options: Object) => {
	if (lastNameScreen !== name) {
		lastNameScreen = name;
		stack.push(name);
		Nav.push(currentID, {
			component: {
				name,
				passProps,
			},
			options,
		});
	}
};

/**
 * Переход назад по стек навигаци
 * @param {String} currentID имя компонента с которого производится переход
 * @param {Object} options настройки перехода см(док wix/react-native-navigation)
 */
const pop = (currentID, options) => {
	if (!isWait) {
		isWait = true;
		lastNameScreen = '';
		stack.pop();
		Nav.pop(currentID, options);
		setTimeout(() => (isWait = false), timeWait);
	}
};

/**
 * Сбрасывание стека навигации до корня
 * @param {String} currentID имя текущей сцена
 */
const popToRoot = currentID => {
	if (!isWait) {
		isWait = true;
		lastNameScreen = '';
		stack = [];
		Nav.popToRoot(currentID);
		setTimeout(() => (isWait = false), timeWait);
	}
};

/**
 * Переход назад по стек навигаци к определенному экрану
 * @param {String|Number} currentID имя компонента до которого вернуться или количество компонентов назад
 * @param {Object} options настройки перехода см(док wix/react-native-navigation)
 */
const popTo = (currentID = 1, options) => {
	if (!isWait) {
		isWait = true;
		if (typeof currentID === 'number') {
			for (let i = 0; i < currentID; i += 1) {
				if (stack.length > 1) stack.pop();
			}
			const l = stack.length - 1;
			lastNameScreen = stack[l];
			Nav.popTo(lastNameScreen, options);
		} else {
			lastNameScreen = currentID;
			Nav.popTo(currentID, options);
		}
		setTimeout(() => (isWait = false), timeWait);
	}
};

/**
 *  Переход по таб навигации wix
 *
 * @param {String} screenID имя таб навигатора или имя сцены в табнавигаторе с которой производится переход
 * @param {String} nameScreen имя сцены на которую производится переход
 * @param {Object} options почие настройки (см wix/react-native-navigation)
 */
const navigateTab = (screenID, nameScreen, options) => {
	Nav.mergeOptions(screenID, {
		bottomTabs: {
			currentTabId: nameScreen,
			...options,
		},
	});
};

/**
 * Замена дерева навигации
 * @param {Object} root дерево навигации (RNN)
 */
const setRoot = root => {
	Nav.setRoot(root);
};

/**
 * Трансформирует экран
 * @param {*} screenID
 * @param {*} options
 */
const mergeOptions = (screenID, options) => {
	Nav.mergeOptions(screenID, options);
};

const setLastNameScreen = nameScreen => {
	lastNameScreen = nameScreen;
};

/**
 * Расширяет компонент виксовскими штуками
 * @param {Object} self контекст
 */
const bindComponent = self => {
	Nav.events().bindComponent(self);
};

/**
 * Отслеживает последовательность открытия экранов пользователем
 * @param {String} root имя корня навигации
 * @param {Object} service сервисы для регистрации и отправки какой0либо информации
 */
const traking = (root, service) => {
	const {analytic} = service;
	stack.push(root);
	Nav.events().registerComponentDidAppearListener(({componentId, componentName}) => {
		analytic.pushScreen(componentName);
		lastNameScreen = analytic.getLastItem();
	});
};

/**
 * Показывает компонент как наложение
 * @param {String} name имя/ид  компонента
 * @param {Object} options  параметры
 */
const showOverlay = (name, options) => {
	Nav.showOverlay({
		component: {
			id: name,
			name,
			options,
		},
	});
};

/**
 * Скрывает все наложения на экране по имени/id
 * @param {String} name имя/ид  компонента
 */
const dismissOverlay = name => {
	Nav.dismissOverlay(name);
};

const Navigation = {
	Nav,
	registerComponent,
	pop,
	popTo,
	push,
	setRoot,
	bindComponent,
	navigateTab,
	lastNameScreen,
	popToRoot,
	mergeOptions,
	setLastNameScreen,
	traking,
	showOverlay,
	dismissOverlay,
};

export {Navigation};
