import React from 'react';
import { Navigation } from 'react-native-navigation';

import { ROOT_SCREEN } from './screens';
import { ScreenOne } from '../screens';
import { Provider } from '../state';

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
	Navigation.registerComponent(ROOT_SCREEN, () => WrappedComponent(ScreenOne));
	console.info('All screens have been registered...');
}
