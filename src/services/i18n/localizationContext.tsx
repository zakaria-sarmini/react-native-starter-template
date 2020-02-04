import React, { createContext, useState } from 'react';
import translations, { DEFAULT_LANGUAGE } from './translations';
import AsyncStorage from '@react-native-community/async-storage';
import * as RNLocalize from 'react-native-localize';
import { Languages } from './enums';

const APP_LANGUAGE = 'appLanguage';

export const LocalizationContext = createContext({
	translations,
	setAppLanguage: (language: any) => {
		return language;
	},
	appLanguage: DEFAULT_LANGUAGE,
	initializeAppLanguage: () => {},
});

const LocalizationProvider: React.FC = (props: any) => {
	const { children } = props;

	const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

	const setLanguage = (language: any) => {
		translations.setLanguage(language);
		setAppLanguage(language);

		AsyncStorage.setItem(APP_LANGUAGE, language);
	};

	const initializeAppLanguage = async () => {
		const currentLanguage: string | null = await AsyncStorage.getItem(
			APP_LANGUAGE,
		);

		if (!currentLanguage) {
			let localeCode: Languages = DEFAULT_LANGUAGE;
			const supportedLocaleCodes: string[] = translations.getAvailableLanguages();
			const phoneLocaleCodes = RNLocalize.getLocales().map(
				locale => locale.languageCode,
			);
			phoneLocaleCodes.some((code: string) => {
				if (supportedLocaleCodes.indexOf(code) > -1) {
					localeCode = code as Languages;
					return true;
				}
			});

			return setLanguage(localeCode);
		} else {
			return setLanguage(currentLanguage);
		}
	};

	return (
		<LocalizationContext.Provider
			value={{
				translations,
				setAppLanguage: setLanguage,
				appLanguage,
				initializeAppLanguage,
			}}>
			{children}
		</LocalizationContext.Provider>
	);
};

export default LocalizationProvider;
