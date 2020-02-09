import React from 'react';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';

import { LocalizationContext } from '../../services';
import ScreenTwoController from './controller';
import { IState } from '../../state';
import { ICoreActions, ICoreState } from '../../state/core/interfaces';
import { coreActionCreators } from '../../state/core/actions';

class ScreenTwo extends ScreenTwoController {
	static contextType = LocalizationContext;

	render(): React.ReactNode {
		const { translations } = this.context;

		return (
			<>
				<Text>{translations.SCREEN_TWO}</Text>
				<Button onPress={() => this.props.add({ numberToAdd: 2 })}>
					<Text>{translations.INCREMENT}</Text>
				</Button>
				<Text>{this.props.counter}</Text>
			</>
		);
	}
}

const mapStateToProps = (state: IState): ICoreState => {
	return {
		counter: state.core.counter,
	};
};

export default connect(mapStateToProps, coreActionCreators)(ScreenTwo);
