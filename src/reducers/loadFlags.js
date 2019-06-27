import {UPDATE_SCREEN_TYPE} from '../store';

// храним состояние всех запросов
const initialState = {
	isFlag: undefined,
};

export default function userstate(state = initialState, action) {
	switch (action.type) {
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
