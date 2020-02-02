import { NavigationComponents } from '../enums/components';
import { NavigationComponent } from '../interfaces/navigationComponent';
import SideMenu from './sideMenu/sideMenu';
import { NavigationIcons } from '../enums/icons';
import { HomeIcon, MenuIcon } from './icons/icons';

export const NAVIGATION_COMPONENTS: NavigationComponent[] = [
	{
		componentName: NavigationComponents.SIDE_MENU,
		component: SideMenu,
	},
	// Icons
	{
		componentName: NavigationIcons.HOME,
		component: HomeIcon,
	},
	{
		componentName: NavigationIcons.MENU,
		component: MenuIcon,
	},
];
