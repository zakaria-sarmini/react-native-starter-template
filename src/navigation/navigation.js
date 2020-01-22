import { Navigation } from 'react-native-navigation';
import { ROOT_SCREEN } from './screens';
import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();

export function initAppRoot() {
	Navigation.setDefaultOptions({
		topBar: {
			background: {
				color: '#039893'
			},
			title: {
				color: 'white',
			},
			backButton: {
				title: '', // Remove previous screen name from back button
				color: 'white'
			},
			buttonColor: 'white',
		},
		statusBar: {
			style: 'light'
		},
		layout: {
			orientation: ['portrait']
		},
		bottomTabs: {
			titleDisplayMode: 'alwaysShow'
		},
		bottomTab: {
			textColor: 'gray',
			selectedTextColor: 'black',
			iconColor: 'gray',
			selectedIconColor: 'black',
		}
	});

	Navigation.setRoot({
		root: {
			stack: {
				children: [{
					component: {
						name: ROOT_SCREEN,
						options: {
							topBar: {
								visible: true,
							},
							statusBar: {
								style: 'dark'
							}
						}
					}
				}]
			}
		}
	});
}
