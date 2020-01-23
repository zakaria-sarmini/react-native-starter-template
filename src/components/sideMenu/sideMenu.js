import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SideMenu extends Component{
	render(): React.ReactNode {
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text>Hello Side Menu!</Text>
			</View>
		);
	}
}
