import { Navigation, Options} from 'react-native-navigation';
import { merge } from 'lodash';

export default function setNavigationDefaultConfig(config: Options | null){
	let defaultConfig: Options = {
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
	};

	defaultConfig = config ? merge(defaultConfig, config) : defaultConfig;

	Navigation.setDefaultOptions(defaultConfig);
}
