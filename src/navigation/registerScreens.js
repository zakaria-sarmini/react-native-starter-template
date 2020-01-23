import React from 'react';
import { Navigation } from 'react-native-navigation';

import { LocalizationProvider } from '../services';
import { SCREEN_ONE, SCREEN_TWO, SIDE_MENU } from './screens';
import { ScreenOne, ScreenTwo } from '../screens';
import { ReduxSagaProvider } from '../state';
import { SideMenu } from '../components';

function WrappedComponent(Component){
	return function inject(props) {
		const EnhancedComponent = () => (
			<ReduxSagaProvider>
				<LocalizationProvider>
					<Component
						{...props}
					/>
				</LocalizationProvider>
			</ReduxSagaProvider>
		);

		return <EnhancedComponent />;
	};
}

export default function () {
	Navigation.registerComponent(SIDE_MENU, () => WrappedComponent(SideMenu));
	Navigation.registerComponent(SCREEN_ONE, () => WrappedComponent(ScreenOne));
	Navigation.registerComponent(SCREEN_TWO, () => WrappedComponent(ScreenTwo));
	console.info('All screens have been registered...');
}
