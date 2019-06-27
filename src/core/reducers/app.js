import {UPDATE_SCREEN_TYPE} from './action-type';

const initialState = {
	screenType: undefined,
};

export default function userstate(state = initialState, action) {
	switch (action.type) {
		case UPDATE_SCREEN_TYPE:
			return {...state, screenType: action.payload};
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
