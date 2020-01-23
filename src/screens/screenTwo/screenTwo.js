import React, { Component } from 'react';
import {Text} from 'react-native';
import { LocalizationContext } from '../../services';

export default class ScreenTwo extends Component{
	static contextType = LocalizationContext;

	render(): React.ReactNode {
		const { translations } = this.context;

		return (
			<Text>{ translations.SCREEN_TWO }</Text>
		);
	}
}
