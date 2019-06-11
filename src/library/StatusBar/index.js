import {StatusBar, Platform} from 'react-native';

function KasperStatusBar() {}

KasperStatusBar.setStyle = ({backgroundColor, barStyle, animated, hidden, translucent}) => {
	try {
		Platform.select({
			ios: () => {
				barStyle ? StatusBar.setBarStyle(barStyle, animated) : undefined;
				hidden ? StatusBar.setHidden(hidden, animated) : undefined;
			},
			android: () => {
				backgroundColor ? StatusBar.setBackgroundColor(backgroundColor, animated) : undefined;
				barStyle ? StatusBar.setBarStyle(barStyle, animated) : undefined;
				translucent ? StatusBar.setTranslucent(translucent) : undefined;
				hidden ? StatusBar.setHidden(hidden, animated) : undefined;
			},
		})();
	} catch {}
};

KasperStatusBar.setDarkTranslucent = () => {
	KasperStatusBar.setStyle({
		backgroundColor: 'rgba(255,255,255,0)',
		barStyle: 'dark-content',
		translucent: true,
		hidden: false,
		animated: true,
	});
};

KasperStatusBar.setLigthTranslucent = () => {
	KasperStatusBar.setStyle({
		backgroundColor: 'rgba(255,255,255,0)',
		barStyle: 'light-content',
		translucent: true,
		hidden: false,
		animated: true,
	});
};

KasperStatusBar.setHidden = hidden => {
	try {
		StatusBar.setHidden(Boolean(hidden), true);
	} catch {}
};

export {KasperStatusBar as StatusBar};
