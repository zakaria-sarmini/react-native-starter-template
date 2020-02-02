import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const DEFAULT_ANDROID_HEADER_HEIGHT = 56;
const DEFAULT_IOS_HEADER_HEIGHT = 56;
const DEFAULT_ANDROID_FOOTER_HEIGHT = 56;
const DEFAULT_IOS_FOOTER_HEIGHT = 56;

class CoreStyles {
	private _headerHeight: number =
		Platform.OS === 'android'
			? normalize(DEFAULT_ANDROID_HEADER_HEIGHT)
			: normalize(DEFAULT_IOS_HEADER_HEIGHT);

	private _footerHeight: number =
		Platform.OS === 'android'
			? normalize(DEFAULT_ANDROID_FOOTER_HEIGHT)
			: normalize(DEFAULT_IOS_FOOTER_HEIGHT);

	get headerHeight(): number {
		return this._headerHeight;
	}

	set headerHeight(headerHeight: number) {
		this._headerHeight = headerHeight;
	}

	get footerHeight(): number {
		return this._footerHeight;
	}

	set footerHeight(footerHeight: number) {
		this._footerHeight = footerHeight;
	}

	constructor(styleSheet?: any) {
		if (styleSheet) {
			this.globalStyles = styleSheet;
		}
	}

	public static getScreenHeight(): number {
		return Platform.OS !== 'ios'
			? Dimensions.get('window').height -
					// @ts-ignore
					StatusBar.currentHeight
			: Dimensions.get('window').height;
	}

	public getContentHeight(): number {
		return (
			CoreStyles.getScreenHeight() - this._headerHeight - this._footerHeight
		);
	}

	get globalStyles() {
		return this._globalStyles;
	}

	set globalStyles(styleSheet) {
		this._globalStyles = { ...this._globalStyles, ...styleSheet };
	}

	private _globalStyles = StyleSheet.create({
		colorWhite: {
			color: '#fff',
		},
		bgWhite: {
			backgroundColor: '#fff',
		},
		colorGrey: {
			color: '#d1d8e0',
		},
		bgGrey: {
			backgroundColor: '#d1d8e0',
		},
		colorBlueHorizon: {
			color: '#4b6584',
		},
		bgBlueHorizon: {
			backgroundColor: '#4b6584',
		},
		colorBlueGrey: {
			color: '#778ca3',
		},
		bgBlueGrey: {
			backgroundColor: '#778ca3',
		},
		colorBlack: {
			color: '#353b48',
		},
		bgBlack: {
			backgroundColor: '#353b48',
		},
		colorGreen: {
			color: '#10ac84',
		},
		bgGreen: {
			backgroundColor: '#10ac84',
		},
		colorNasuPurple: {
			color: '#5f27cd',
		},
		bgNasuPurple: {
			backgroundColor: '#5f27cd',
		},
		fontTiny: {
			fontSize: normalize(16),
		},
		fontSmall: {
			fontSize: normalize(18),
		},
		fontMedium: {
			fontSize: normalize(20),
		},
		fontBig: {
			fontSize: normalize(22),
		},
		flex1: {
			flex: 1,
		},
		flex2: {
			flex: 2,
		},
		flex3: {
			flex: 3,
		},
		flex4: {
			flex: 4,
		},
		flex5: {
			flex: 5,
		},
		flexCenter: {
			alignItems: 'center',
			justifyContent: 'center',
		},
		alignItemsStart: {
			alignItems: 'flex-start',
		},
		alignItemsEnd: {
			alignItems: 'flex-end',
		},
		justifyContentStart: {
			justifyContent: 'flex-start',
		},
		justifyContentEnd: {
			justifyContent: 'flex-end',
		},
		alignSelfCenter: {
			alignSelf: 'center',
		},
		alignSelfStart: {
			alignSelf: 'flex-start',
		},
		alignSelfEnd: {
			alignSelf: 'flex-end',
		},
		alignSelfStretch: {
			alignSelf: 'stretch',
		},
		justifySelfStart: {
			justifyContent: 'flex-start',
		},
		justifySelfEnd: {
			justifyContent: 'flex-end',
		},
		height1: {
			height: this.getContentHeight() * 0.083333,
		},
		height2: {
			height: this.getContentHeight() * 0.166666,
		},
		height3: {
			height: this.getContentHeight() * 0.25,
		},
		height4: {
			height: this.getContentHeight() * 0.333333,
		},
		height5: {
			height: this.getContentHeight() * 0.416666,
		},
		height6: {
			height: this.getContentHeight() * 0.5,
		},
		height7: {
			height: this.getContentHeight() * 0.583333,
		},
		height8: {
			height: this.getContentHeight() * 0.666666,
		},
		height9: {
			height: this.getContentHeight() * 0.75,
		},
		height10: {
			height: this.getContentHeight() * 0.833333,
		},
		height11: {
			height: this.getContentHeight() * 0.916666,
		},
		height12: {
			height: this.getContentHeight(),
		},
		margin: {
			margin: normalize(16),
		},
		marginLeft: {
			marginLeft: normalize(16),
		},
		marginRight: {
			marginRight: normalize(16),
		},
		marginTop: {
			marginTop: normalize(16),
		},
		marginBottom: {
			marginBottom: normalize(16),
		},
		marginVertical: {
			marginVertical: normalize(16),
		},
		marginHorizontal: {
			marginHorizontal: normalize(16),
		},
		padding: {
			padding: normalize(16),
		},
		paddingLeft: {
			paddingLeft: normalize(16),
		},
		paddingRight: {
			paddingRight: normalize(16),
		},
		paddingTop: {
			paddingTop: normalize(16),
		},
		paddingBottom: {
			paddingBottom: normalize(16),
		},
		paddingVertical: {
			paddingVertical: normalize(16),
		},
		paddingHorizontal: {
			paddingHorizontal: normalize(16),
		},
		textCenter: {
			textAlign: 'center',
		},
		textVerticalCenter: {
			textAlignVertical: 'center',
		},
		header: {
			height: this.headerHeight,
		},
	});
}

export default CoreStyles;
