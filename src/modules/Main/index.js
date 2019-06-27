import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {compose, setDisplayName, pure} from 'recompose';
import {updateScreenType} from '../../core/reducers';
import {screenTypeSelector} from '../../core/selectors';
import Main from './Component';

function stateToProps(state) {
	return {
		screenType: screenTypeSelector(state),
	};
}

function dispatchToProps(dispatch) {
	return {
		updateScreenType: bindActionCreators(updateScreenType, dispatch),
	};
}
export default compose(
	setDisplayName('Main'),
	connect(
		stateToProps,
		dispatchToProps,
	),
	pure,
)(Main);
