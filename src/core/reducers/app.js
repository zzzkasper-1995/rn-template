import {UPDATE_SCREEN_TYPE, COUNTER_INCREMENT} from './action-type';

const initialState = {
	screenType: undefined,
	counter: 0,
};

export default function userstate(state = initialState, action) {
	switch (action.type) {
		case UPDATE_SCREEN_TYPE:
			return {...state, screenType: action.payload};
		case COUNTER_INCREMENT:
			return {...state, counter: state.counter + 1};
		default:
			return state;
	}
}

/**
 * Описание метода
 * @param {string} type - ...
 */
export function updateScreenType(type) {
	return {
		type: UPDATE_SCREEN_TYPE,
		payload: type,
	};
}

/**
 * Увеличивает счетчик на 1
 */
export function counterIncrement() {
	return {
		type: COUNTER_INCREMENT,
	};
}
