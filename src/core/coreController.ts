import { EmitterSubscription, Keyboard, Platform } from 'react-native';
import { PureComponent } from 'react';

import CoreStyles from './coreStyles';
import { Errors } from './error';

export default class CoreController<P, S> extends PureComponent<P, S> {
	private _coreStyles: CoreStyles = new CoreStyles();
	// @ts-ignore
	private _keyboardDidShowListener: EmitterSubscription;
	// @ts-ignore
	private _keyboardDidHideListener: EmitterSubscription;
	private _isKeyboardShown: boolean = false;

	constructor(props: P) {
		super(props);
	}

	get styles() {
		return this._coreStyles.globalStyles;
	}

	get coreStyles() {
		return this._coreStyles;
	}

	get isKeyboardShown(): boolean {
		return this._isKeyboardShown;
	}

	set footerHeight(footerHeight: number) {
		this._coreStyles.footerHeight = footerHeight;
	}

	componentDidMount() {
		this._keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			this._keyboardDidShow,
		);
		this._keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			this._keyboardDidHide,
		);
	}

	componentWillUnmount() {
		this._keyboardDidShowListener.remove();
		this._keyboardDidHideListener.remove();
	}

	private _keyboardDidShow() {
		this._isKeyboardShown = true;
	}

	private _keyboardDidHide() {
		this._isKeyboardShown = false;
	}

	public static isAndroid(): boolean {
		return Platform.OS === 'android';
	}

	public static isIOS(): boolean {
		return Platform.OS === 'ios';
	}

	protected dismissKeyboard(): Promise<void> {
		return new Promise((resolve, reject) => {
			Keyboard.dismiss();

			let keyboardDismissInterval = setInterval(() => {
				if(!this._isKeyboardShown){
					resolve();
				}
			});

			setTimeout(() => {
				clearInterval(keyboardDismissInterval);

				reject(Errors.KEYBOARD_DISMISS_FAILED);
			}, 5000);
		});
	}

	protected extendStyles(styles: any) {
		this._coreStyles.globalStyles = styles;
	}
}
