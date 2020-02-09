import { Navigation } from 'react-native-navigation';

import { LocalizationContext } from '../../services/';
import { NavigationButtons } from '../../navigation/enums/buttons';
import CoreController from '../../core/coreController';
import { Screens } from '../enums/screens';
import { IScreenOneProps, IScreenOneState } from './interface';

export default class ScreenOneController extends CoreController<
	IScreenOneProps,
	IScreenOneState
> {
	static contextType = LocalizationContext;

	constructor(props: any) {
		super(props);

		Navigation.events().bindComponent(this);
	}

	navigationButtonPressed(clickedButton: any): void {
		const { componentId } = this.props;
		const { buttonId } = clickedButton;

		switch (buttonId) {
			case NavigationButtons.SIDE_MENU:
				Navigation.mergeOptions(componentId, {
					sideMenu: {
						left: {
							visible: true,
						},
					},
				});
				break;

			case NavigationButtons.LANGUAGE_CHANGE_DE:
				this.switchLanguage('de');
				break;

			case NavigationButtons.LANGUAGE_CHANGE_EN:
				this.switchLanguage('en');
				break;
		}
	}

	navigationPushScreenTwo(): void {
		const { componentId } = this.props;

		Navigation.push(componentId, {
			component: {
				name: Screens.SCREEN_TWO,
			},
		});
	}

	switchLanguage(language: string): void {
		const { setAppLanguage } = this.context;

		setAppLanguage(language);
	}
}
