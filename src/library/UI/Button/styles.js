import {StyleSheet} from 'react-native';
import {Color} from '../Theme/Color';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	icon: {
		marginRight: 8,
		width: 16,
		height: 16,
	},
	inButtonContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},

	btnFull: {
		flex: 1,
		flexDirection: 'row',
		height: 52,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		backgroundColor: Color.BLUE,
	},
	textBtnFull: {
		fontSize: 14,
		color: 'white',
	},

	btnAround: {
		flex: 1,
		flexDirection: 'row',
		height: 52,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		borderWidth: 1,
		borderColor: Color.GRAY_BORDER,
	},
	textBtnAround: {
		fontSize: 14,
		color: 'black',
	},
});
