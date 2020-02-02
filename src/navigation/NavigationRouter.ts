import { Navigation } from 'react-native-navigation';

import { Screens } from '../screens/enums/screens';
import { NavigationIcons } from './enums/icons';
import { NavigationComponents } from './enums/components';

export function root() {
	Navigation.setRoot({
		root: {
			sideMenu: {
				left: {
					component: {
						name: NavigationComponents.SIDE_MENU,
						passProps: {
							text: 'This is a left side menu screen',
						},
					},
				},
				center: {
					bottomTabs: {
						children: [
							{
								stack: {
									children: [
										{
											component: {
												name: Screens.SCREEN_ONE,
											},
										},
									],
									options: {
										bottomTab: {
											text: 'Tab 1',
											icon: NavigationIcons.HOME,
											badge: '1',
										},
									},
								},
							},
							{
								component: {
									name: Screens.SCREEN_TWO,
									options: {
										bottomTab: {
											text: 'Tab 2',
											icon: NavigationIcons.MENU,
										},
									},
								},
							},
						],
						options: {},
					},
				},
				options: {
					sideMenu: {
						left: {
							width: 260,
							visible: false,
							enabled: true,
						},
					},
				},
			},
		},
	});
}
