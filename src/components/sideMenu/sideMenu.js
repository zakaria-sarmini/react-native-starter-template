import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LocalizationContext } from '../../services';

export default class SideMenu extends Component{
	static contextType = LocalizationContext;

	render(): React.ReactNode {
		const { translations } = this.context;

		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text>{ translations.SIDE_MENU }</Text>
			</View>
		);
	}
}
