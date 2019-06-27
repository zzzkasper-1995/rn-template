import {createSelector} from 'reselect';

/**
 * селектор для ...
 */
export const screenTypeSelector = createSelector(
	({app}) => app.screenType,
	screenType => screenType,
);
