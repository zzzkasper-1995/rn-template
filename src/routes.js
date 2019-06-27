// eslint-disable-next-line import/prefer-default-export
export const rootLoadApp = {
	root: {
		// создаем стек навигатор
		stack: {
			// задаем id для корнегого узла
			id: 'appStack',
			// настройки
			options: {
				topBar: {
					visible: false,
				},
			},
			children: [
				{
					// первый элемент в стеке
					component: {
						id: 'Main',
						name: 'Main',
						// сюда можно прокинуть props
						// passProps: {
						// 	text: 'This is tab 1',
						// 	myFunction: () => 'Hello from a function!',
						// },
					},
				},
			],
		},
	},
};
