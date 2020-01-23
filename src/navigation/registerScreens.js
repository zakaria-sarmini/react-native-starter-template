import React from 'react';
import { Navigation } from 'react-native-navigation';

import {SCREEN_ONE, SCREEN_TWO, SIDE_MENU} from './screens';
import { ScreenOne, ScreenTwo } from '../screens';
import { Provider } from '../state';
import { SideMenu } from '../components';

function WrappedComponent(Component){
	return function inject(props) {
		const EnhancedComponent = () => (
			<Provider>
				<Component
					{...props}
				/>
			</Provider>
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
