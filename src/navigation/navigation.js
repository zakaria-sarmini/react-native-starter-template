import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Navigation } from 'react-native-navigation';

// screens
import { SCREEN_TWO, SIDE_MENU } from './screens';

// components
import ComponentOne from './components/componentOne';

// navigation default config - screens registration
import registerScreens from './registerScreens';
import setNavigationDefaultConfig from './config';

// set default and register all screens on launch
setNavigationDefaultConfig();
registerScreens();

export function initAppRoot() {
	Promise.all([
		MaterialIcons.getImageSource('home', 25),
		MaterialIcons.getImageSource('search', 25),
		MaterialIcons.getImageSource('menu', 25)
	]).then(([homeIcon, searchIcon, menu]) => {
		Navigation.setRoot({
			root: {
				sideMenu: {
					left: {
						component: {
							name: SIDE_MENU,
							passProps: {
								text: 'This is a left side menu screen'
							}
						}
					},
					center: {
						bottomTabs: {
							children: [
								{
									stack: {
										children: [
											{
												component: ComponentOne([menu])
											}
										],
										options: {
											bottomTab: {
												text: 'Tab 1',
												icon: homeIcon,
												badge: 1
											}
										}
									}
								},
								{
									component: {
										name: SCREEN_TWO,
										options: {
											bottomTab: {
												text: 'Tab 2',
												icon: searchIcon
											}
										}
									}
								}
							],
							options: {}
						}
					},
					options: {
						sideMenu: {
							left: {
								width: 260,
								visible: false,
								enabled: true
							}
						}
					}
				}
			}
		});
	});
}
