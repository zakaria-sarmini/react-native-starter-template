import { Platform } from 'react-native';
import { PureComponent } from 'react';
import CoreStyles from './coreStyles';

export default class CoreController<P, S> extends PureComponent<P, S> {
	private _coreStyles: CoreStyles = new CoreStyles();
	private _styles = this._coreStyles.globalStyles;

	get styles() {
		return this._styles;
	}

	set coreStyles(coreStyles: CoreStyles) {
		this._coreStyles = coreStyles;
	}

	constructor(props: any) {
		super(props);
	}

	public static isAndroid(): boolean {
		return Platform.OS === 'android';
	}

	public static isIOS(): boolean {
		return Platform.OS === 'ios';
	}
}
