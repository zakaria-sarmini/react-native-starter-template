import { Navigation } from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Screens } from '../screens/enums/screens';
import { NavigationComponents } from './enums/components';
import { NavigationButtons } from './enums/buttons';

export async function rootApp() {
	await Navigation.setRoot({
		root: {
			component: {
				name: Screens.APP,
				options: {
					topBar: {
						visible: false,
					},
				},
			},
		},
	});
}

export function rootDashboard() {
	Promise.all([
		MaterialIcons.getImageSource('home', 25),
		MaterialIcons.getImageSource('search', 25),
		MaterialIcons.getImageSource('menu', 25),
	]).then(async ([homeIcon, searchIcon, menuIcon]) => {
		await Navigation.setRoot({
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
													options: {
														topBar: {
															leftButtons: [
																{
																	id: NavigationButtons.SIDE_MENU,
																	icon: menuIcon,
																	color: 'white',
																},
															],
															rightButtons: [
																{
																	id: NavigationButtons.LANGUAGE_CHANGE_EN,
																	text: 'EN',
																	color: 'white',
																},
																{
																	id: NavigationButtons.LANGUAGE_CHANGE_DE,
																	text: 'DE',
																	color: 'white',
																},
															],
														},
													},
												},
											},
										],
										options: {
											bottomTab: {
												text: 'Tab 1',
												icon: homeIcon,
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
												icon: searchIcon,
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
	});
}
