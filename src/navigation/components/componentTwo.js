import { Options } from 'react-native-navigation';
import { SCREEN_TWO } from '../screens';
import Icon from 'react-native-vector-icons/MaterialIcons';

function options(icons: Icon[]): Options  {
	return {};
}

function componentTwo(icons: Icon[], props: Object = {}): Options {
	return {
		name: SCREEN_TWO,
		options: options(icons),
		passProps: props
	};
}

export default componentTwo;
