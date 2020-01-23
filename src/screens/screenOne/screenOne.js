import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { SIDE_MENU_BUTTON } from '../../navigation/buttons';
import { ScreenTwo } from '../../navigation/components';

export default class ScreenOne extends Component{
	constructor(props){
		super(props);

		Navigation.events().bindComponent(this);
	}

	navigationButtonPressed({ buttonId }){
		const { componentId } = this.props;

		switch (buttonId) {
			case (SIDE_MENU_BUTTON):
				Navigation.mergeOptions(componentId, {
					sideMenu: {
						left: {
							visible: true,
						}
					}
				});
		}
	}

	navigationPushScreenTwo(){
		const { componentId } = this.props;

		Navigation.push(componentId, {
			component: ScreenTwo()
		});
	}

	render(): React.ReactNode {
		return (
			<>
				<Text>Hello Screen One!</Text>
				<Button title="Go to screen two..." onPress={() => this.navigationPushScreenTwo()} />
			</>
		);
	}
}
