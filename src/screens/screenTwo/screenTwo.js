import React, { Component } from 'react';
import {Button, Text} from 'react-native';
import { LocalizationContext } from '../../services';
import connectModuleOne from '../../state/moduleOne/connect';

class ScreenTwo extends Component{
	static contextType = LocalizationContext;

	render(): React.ReactNode {
		const { translations } = this.context;

		return (
			<>
				<Text>{ translations.SCREEN_TWO }</Text>
				<Button title={translations.INCREMENT} onPress={this.props.add} />
				<Button title={translations.DECREMENT} onPress={this.props.reduce} />
				<Text>{ this.props.counter }</Text>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		counter: state.moduleOneReducer.counter
	};
};

export default connectModuleOne(mapStateToProps)(ScreenTwo);
