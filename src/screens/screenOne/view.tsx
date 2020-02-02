import React from 'react';
import { Text, Button } from 'native-base';

import ScreenOneController from './controller';

export default class ScreenOne extends ScreenOneController {
	render(): React.ReactNode {
		const { translations } = this.context;

		return (
			<>
				<Text>{translations.SCREEN_ONE}</Text>
				<Button onPress={() => this.navigationPushScreenTwo()}>
					<Text>{translations.GO_TO_SCREEN_TWO}</Text>
				</Button>
			</>
		);
	}
}
