import React, { createContext, useState } from 'react';
import translations, { DEFAULT_LANGUAGE } from './translations';
import AsyncStorage from '@react-native-community/async-storage';
import * as RNLocalize from 'react-native-localize';
import { Languages } from './enums';

const APP_LANGUAGE = 'appLanguage';

export default class LocalizationController extends React.PureComponent<
	{ children: any },
	never
> {
	private static appLanguage: Languages;
	// private static setAppLanguage: any = useState(DEFAULT_LANGUAGE);

	constructor(props: { children: any }) {
		super(props);
	}

	public static setLanguage(language: any): Promise<string> {
		return new Promise((resolve, reject) => {
			translations.setLanguage(language);
			// this.setAppLanguage(language);

			AsyncStorage.setItem(APP_LANGUAGE, language)
				.then(() => {
					this.appLanguage = language;

					resolve(language);
				})
				.catch(err => {
					reject(err);
				});
		});
	}

	public static async initializeAppLanguage(): Promise<string> {
		const currentLanguage: string | null = await AsyncStorage.getItem(
			APP_LANGUAGE,
		);

		this.appLanguage = currentLanguage as Languages;

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

			return LocalizationController.setLanguage(localeCode);
		} else {
			return LocalizationController.setLanguage(currentLanguage);
		}
	}

	render(): React.ReactNode {
		return (
			<LocalizationContext.Provider
				value={{
					translations,
					setAppLanguage: LocalizationController.setLanguage,
					appLanguage: LocalizationController.appLanguage,
				}}>
				{this.props.children}
			</LocalizationContext.Provider>
		);
	}
}

export const LocalizationContext = createContext({
	translations,
	setAppLanguage: LocalizationController.setLanguage,
	appLanguage: DEFAULT_LANGUAGE,
});

/*const LocalizationProvider: React.FC = (props: any) => {
	const { children } = props;

	const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

	const setLanguage = (language: any): Promise<string> => {
		return new Promise((resolve, reject) => {
			translations.setLanguage(language);
			setAppLanguage(language);

			AsyncStorage.setItem(APP_LANGUAGE, language)
				.then(() => {
					resolve(language);
				})
				.catch(err => {
					reject(err);
				});
		});
	};

	const initializeAppLanguage = async (): Promise<string> => {
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
				setLanguage,
				appLanguage,
				initializeAppLanguage,
			}}>
			{children}
		</LocalizationContext.Provider>
	);
};*/

// export default LocalizationProvider;
