import { StyleSheet } from 'react-native';
import ViewHelper from './viewHelper';
import normalize from 'react-native-normalize';

const globalStyles = StyleSheet.create({
	colorWhite: {
		color: '#fff'
	},
	bgWhite: {
		backgroundColor: '#fff'
	},
	colorGrey: {
		color: '#d1d8e0'
	},
	bgGrey: {
		backgroundColor: '#d1d8e0'
	},
	colorBlueHorizon: {
		color: '#4b6584'
	},
	bgBlueHorizon: {
		backgroundColor: '#4b6584'
	},
	colorBlueGrey: {
		color: '#778ca3'
	},
	bgBlueGrey: {
		backgroundColor: '#778ca3'
	},
	colorBlack: {
		color: '#353b48'
	},
	bgBlack: {
		backgroundColor: '#353b48'
	},
	colorGreen: {
		color: '#10ac84'
	},
	bgGreen: {
		backgroundColor: '#10ac84'
	},
	colorNasuPurple: {
		color: '#5f27cd'
	},
	bgNasuPurple: {
		backgroundColor: '#5f27cd'
	},
	fontTiny: {
		fontSize: normalize(16)
	},
	fontSmall: {
		fontSize: normalize(18)
	},
	fontMedium: {
		fontSize: normalize(20)
	},
	fontBig: {
		fontSize: normalize(22)
	},
	flex1: {
		flex: 1
	},
	flex2: {
		flex: 2
	},
	flex3: {
		flex: 3
	},
	flex4: {
		flex: 4
	},
	flex5: {
		flex: 5
	},
	flexCenter: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	alignItemsStart: {
		alignItems: 'flex-start'
	},
	alignItemsEnd: {
		alignItems: 'flex-end'
	},
	justifyContentStart: {
		justifyContent: 'flex-start'
	},
	justifyContentEnd: {
		justifyContent: 'flex-end'
	},
	alignSelfCenter: {
		alignSelf: 'center'
	},
	alignSelfStart: {
		alignItems: 'flex-start'
	},
	alignSelfEnd: {
		alignItems: 'flex-end'
	},
	justifySelfStart: {
		justifyContent: 'flex-start'
	},
	justifySelfEnd: {
		justifyContent: 'flex-end'
	},
	height1: {
		height: ViewHelper.getContentHeight() * 0.083333
	},
	height2: {
		height: ViewHelper.getContentHeight() * 0.166666
	},
	height3: {
		height: ViewHelper.getContentHeight() * 0.25
	},
	height4: {
		height: ViewHelper.getContentHeight() * 0.333333
	},
	height5: {
		height: ViewHelper.getContentHeight() * 0.416666
	},
	height6: {
		height: ViewHelper.getContentHeight() * 0.5
	},
	height7: {
		height: ViewHelper.getContentHeight() * 0.583333
	},
	height8: {
		height: ViewHelper.getContentHeight() * 0.666666
	},
	height9: {
		height: ViewHelper.getContentHeight() * 0.75
	},
	height10: {
		height: ViewHelper.getContentHeight() * 0.833333
	},
	height11: {
		height: ViewHelper.getContentHeight() * 0.916666
	},
	height12: {
		height: ViewHelper.getContentHeight()
	},
	margin: {
		margin: normalize(16)
	},
	marginLeft: {
		marginLeft: normalize(16)
	},
	marginRight: {
		marginRight: normalize(16)
	},
	marginTop: {
		marginTop: normalize(16)
	},
	marginBottom: {
		marginBottom: normalize(16)
	},
	marginVertical: {
		marginVertical: normalize(16)
	},
	marginHorizontal: {
		marginHorizontal: normalize(16)
	},
	padding: {
		padding: normalize(16)
	},
	paddingLeft: {
		paddingLeft: normalize(16)
	},
	paddingRight: {
		paddingRight: normalize(16)
	},
	paddingTop: {
		paddingTop: normalize(16)
	},
	paddingBottom: {
		paddingBottom: normalize(16)
	},
	paddingVertical: {
		paddingVertical: normalize(16)
	},
	paddingHorizontal: {
		paddingHorizontal: normalize(16)
	},
	textCenter: {
		textAlign: 'center'
	},
	textVerticalCenter: {
		textAlignVertical: 'center'
	},
	header: {
		height: ViewHelper.HEADER_HEIGHT
	}
});

export default globalStyles;
