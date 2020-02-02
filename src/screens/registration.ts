import { NavigationComponent } from '../navigation/interfaces/navigationComponent';
import { Screens } from './enums/screens';
import { ScreenOne, ScreenTwo } from '.';

export const SCREENS: NavigationComponent[] = [
	{
		componentName: Screens.SCREEN_ONE,
		component: ScreenOne,
	},
	{
		componentName: Screens.SCREEN_TWO,
		component: ScreenTwo,
	},
];
