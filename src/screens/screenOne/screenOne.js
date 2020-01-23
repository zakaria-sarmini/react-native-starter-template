import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { LANGUAGE_CHANGE_DE, LANGUAGE_CHANGE_EN, SIDE_MENU_BUTTON } from '../../navigation/buttons';
import { ScreenTwo } from '../../navigation/components';
import { LocalizationContext } from '../../services/';

export default class ScreenOne extends Component{
	static contextType = LocalizationContext;

	constructor(props){
		super(props);

		Navigation.events().bindComponent(this);
	}

	componentDidMount(): void {
		const { initializeAppLanguage } = this.context;

		// initializing app language
		initializeAppLanguage();
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
				break;

			case (LANGUAGE_CHANGE_DE):
				this.switchLanguage('de');
				break;

			case (LANGUAGE_CHANGE_EN):
				this.switchLanguage('en');
				break;
		}
	}

	navigationPushScreenTwo(){
		const { componentId } = this.props;

		Navigation.push(componentId, {
			component: ScreenTwo()
		});
	}

	switchLanguage(language: string): void {
		const { setAppLanguage } = this.context;

		setAppLanguage(language);
	}

	render(): React.ReactNode {
		const { translations } = this.context;

		return (
			<>
				<Text>{translations.SCREEN_ONE}</Text>
				<Button title={translations.GO_TO_SCREEN_TWO} onPress={() => this.navigationPushScreenTwo()} />
			</>
		);
	}
}
