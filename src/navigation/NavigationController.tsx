import React from 'react';
import { Navigation, Options } from 'react-native-navigation';
import { merge } from 'lodash';

import { LocalizationProvider } from '../services';
import { ReduxSagaProvider } from '../state';
import { SCREENS } from '../screens/registration';
import { NavigationComponent } from './interfaces/navigationComponent';
import { Logger } from '../core';
import { NAVIGATION_COMPONENTS } from './components/registration';

export default class NavigationController {
	private static _config: Options = {
		topBar: {
			background: {
				color: '#039893',
			},
			title: {
				color: 'white',
			},
			backButton: {
				title: '', // Remove previous screen name from back button
				color: 'white',
			},
		},
		statusBar: {
			style: 'light',
		},
		layout: {
			orientation: ['portrait'],
		},
		bottomTabs: {
			titleDisplayMode: 'alwaysShow',
		},
		bottomTab: {
			textColor: 'gray',
			selectedTextColor: 'black',
			iconColor: 'gray',
			selectedIconColor: 'black',
		},
		animations: {
			push: {
				// enabled: true,
				waitForRender: true,
				content: {
					alpha: {
						from: 0,
						to: 1,
						duration: 100,
					},
					scaleX: {
						from: 0.85,
						to: 1,
						duration: 100,
						interpolation: 'decelerate',
					},
					scaleY: {
						from: 0.85,
						to: 1,
						duration: 100,
						interpolation: 'decelerate',
					},
				},
			},
			pop: {
				enabled: true,
				content: {
					alpha: {
						from: 1,
						to: 0,
						duration: 100,
					},
					scaleX: {
						from: 1,
						to: 0.85,
						duration: 100,
						interpolation: 'decelerate',
					},
					scaleY: {
						from: 1,
						to: 0.85,
						duration: 100,
						interpolation: 'decelerate',
					},
				},
			},
		},
	};

	private static setNavigationOptions(options: Options): void {
		this._config = merge(this._config, options);
	}

	private static ComponentModule(Component: any) {
		return function inject(props: any) {
			const EnhancedComponent = () => (
				<ReduxSagaProvider>
					<LocalizationProvider>
						<Component {...props} />
					</LocalizationProvider>
				</ReduxSagaProvider>
			);
			return <EnhancedComponent />;
		};
	}

	private static registerNavigationComponents(): void {
		NAVIGATION_COMPONENTS.forEach(
			(navigationComponent: NavigationComponent) => {
				Navigation.registerComponent(navigationComponent.componentName, () =>
					this.ComponentModule(navigationComponent.component),
				);
			},
		);

		Logger.logInfo('All navigation components have been registered...');
	}

	private static registerNavigationScreens(): void {
		SCREENS.forEach((screen: NavigationComponent) => {
			Navigation.registerComponent(screen.componentName, () =>
				this.ComponentModule(screen.component),
			);
		});

		Logger.logInfo('All screens have been registered...');
	}

	private static initConfig(config: Options): void {
		this.setNavigationOptions(config);
		Navigation.setDefaultOptions(this._config);
	}

	public static init(config: Options = this._config): void {
		NavigationController.initConfig(config);
		NavigationController.registerNavigationComponents();
		NavigationController.registerNavigationScreens();
	}
}
