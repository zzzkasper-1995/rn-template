import {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Color} from './Color';

class Theme extends Component {
	constructor(props) {
		super(props);

		this.themeSwitch = type => {
			if (type && Object.keys(Color || {}).includes(type)) {
				return Color[type];
			}
			return Color.default;
		};

		this.setTheme = type => {
			this.color = this.themeSwitch(type);
		};

		this.styleSheet = obj => StyleSheet.create(obj(this));

		this.type = undefined;
		this.color = this.themeSwitch(this.type);
	}
}

const T = new Theme();

export default T;
