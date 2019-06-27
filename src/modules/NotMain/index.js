import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {compose, setDisplayName, pure} from 'recompose';
import {updateScreenType, counterIncrement} from '../../reducers';
import {screenTypeSelector} from '../../selectors';
import Main from './Component';

function stateToProps(state) {
	return {
		screenType: screenTypeSelector(state),
		counter: state.app.counter,
	};
}

function dispatchToProps(dispatch) {
	return {
		updateScreenType: bindActionCreators(updateScreenType, dispatch),
		addCounter: bindActionCreators(counterIncrement, dispatch),
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
