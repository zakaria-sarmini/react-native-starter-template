import React from 'react';
import { Button, Text } from 'native-base';
import { LocalizationContext } from '../../services';
import ScreenTwoController from './controller';
import { ScreenTwoState } from './interface';
import { connectModuleTwo } from '../../state/moduleTwo';

class ScreenTwo extends ScreenTwoController {
	static contextType = LocalizationContext;

	render(): React.ReactNode {
		const { translations } = this.context;

		return (
			<>
				<Text>{translations.SCREEN_TWO}</Text>
				<Button onPress={() => this.props.add({ counter: 2 })}>
					<Text>{translations.INCREMENT}</Text>
				</Button>
				<Button onPress={() => this.props.reduce({ counter: 2 })}>
					<Text>{translations.DECREMENT}</Text>
				</Button>
				<Text>{this.props.counter}</Text>
			</>
		);
	}
}

const mapStateToProps = (state: ScreenTwoState) => {
	return {
		counter: state.moduleTwo.counter,
	};
};

export default connectModuleTwo(mapStateToProps)(ScreenTwo);
