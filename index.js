import { Navigation } from 'react-native-navigation';
import { root } from './src/navigation';
import NavigationController from './src/navigation/NavigationController';

NavigationController.init();
Navigation.events().registerAppLaunchedListener(() => {
	root();
});
