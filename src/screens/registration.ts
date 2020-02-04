import { NavigationComponent } from '../navigation/interfaces/navigationComponent';
import { Screens } from './enums/screens';
import { ScreenOne, ScreenTwo } from '.';
import App from '../../App';

export const SCREENS: NavigationComponent[] = [
	{
		componentName: Screens.APP,
		component: App,
	},
	{
		componentName: Screens.SCREEN_ONE,
		component: ScreenOne,
	},
	{
		componentName: Screens.SCREEN_TWO,
		component: ScreenTwo,
	},
];
