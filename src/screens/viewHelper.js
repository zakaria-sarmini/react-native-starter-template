import { Platform, Dimensions, StatusBar } from 'react-native';
import normalize from 'react-native-normalize';

export default class ViewHelper {
	static HEADER_HEIGHT = ViewHelper.isAndroid() ? normalize(56) : normalize(56);

	static isAndroid(){
		return Platform.OS === 'android';
	}

	static isIOS(){
		return Platform.OS === 'ios';
	}

	static getScreenHeight(){
		return Platform.OS !== 'ios' ?
			Dimensions.get('window').height - StatusBar.currentHeight :
			Dimensions.get('window').height;
	}

	static getContentHeight(){
		return ViewHelper.getScreenHeight() - ViewHelper.HEADER_HEIGHT;
	}
}


