import { Navigation } from 'react-native-navigation';
import { initAppRoot } from './src/navigation/navigation';

Navigation.events().registerAppLaunchedListener(() => initAppRoot());
