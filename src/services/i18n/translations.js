import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';

const translations = {
	en: {
		SCREEN_ONE: 'Hello Screen One...',
		SCREEN_TWO: 'Hello Screen Two...',
		SIDE_MENU: 'Hello Side Menu...',
		GO_TO_SCREEN_TWO: 'Go To Screen Two...'
	},
	de: {
		SCREEN_ONE: 'Hallo Seite Eins...',
		SCREEN_TWO: 'Hallo Seite Zwei...',
		SIDE_MENU: 'Hallo Seitenmenu...',
		GO_TO_SCREEN_TWO: 'Zur Seite Zwei gehen...'
	}
};

export default new LocalizedStrings(translations);
