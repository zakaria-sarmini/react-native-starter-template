import { Navigation } from 'react-native-navigation';

import { rootApp } from './src/navigation';
import NavigationController from './src/navigation/NavigationController';

NavigationController.init();
Navigation.events().registerAppLaunchedListener(() => {
	rootApp();
});
