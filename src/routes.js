export const settingsDefault = {
	layout: {
		backgroundColor: 'rgb(255,255,255,0)',
	},
	statusBar: {
		backgroundColor: 'rgba(255,255,255,0)',
		style: 'light',
	},
	topBar: {
		visible: false,
		drawBehind: true,
		height: 0,
	},
	animations: {
		setRoot: {
			alpha: {
				from: 0,
				to: 1,
				duration: 300,
			},
		},
	},
	bottomTabs: {
		visible: true,
		backgroundColor: 'white',
		drawBehind: true,
		translucent: true,
	},
	overlay: {
		interceptTouchOutside: false,
		handleKeyboardEvents: true,
	},
};

export const rootLoadApp = {
	root: {
		stack: {
			id: 'appStack',
			children: [
				{
					component: {
						id: 'initApp',
						name: 'initApp',
					},
				},
			],
			options: {
				topBar: {
					visible: false,
					height: 0,
				},
			},
		},
	},
};

export const rootLoginApp = {
	root: {
		stack: {
			id: 'appStack',
			children: [
				{
					component: {
						id: 'login',
						name: 'login',
					},
				},
			],
			options: {
				topBar: {
					visible: false,
					height: 0,
				},
			},
		},
	},
};
