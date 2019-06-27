
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