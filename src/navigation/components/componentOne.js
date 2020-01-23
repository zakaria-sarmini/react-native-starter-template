import React from 'react-native';
import { Options } from 'react-native-navigation';
import { SCREEN_ONE } from '../screens';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SIDE_MENU_BUTTON } from '../buttons';

function options(icons: Icon[]): Options  {
	return {
		topBar: {
			leftButtons: [
				{
					id: SIDE_MENU_BUTTON,
					icon: icons[0]
				}
			]
		}
	};
}

function componentOne(icons: Icon[], props: Object = {}): Options {
	return {
		name: SCREEN_ONE,
		options: options(icons),
		passProps: props
	};
}

export default componentOne;
