import React from 'react';
import { View, Text } from 'react-native';
import { LocalizationContext } from '../../../services';
import { CoreComponent } from '../../../core';
import { NavigationProps } from '../..';

export default class SideMenu extends CoreComponent<NavigationProps, never> {
	static contextType = LocalizationContext;

	constructor(props: NavigationProps) {
		super(props);
	}

	render(): React.ReactNode {
		const { translations } = this.context;

		return (
			<View style={[this.styles.flex1, this.styles.bgWhite]}>
				<Text>{translations.SIDE_MENU}</Text>
			</View>
		);
	}
}
