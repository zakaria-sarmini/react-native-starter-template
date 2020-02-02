import { Options } from 'react-native-navigation';

export interface NavigationComponent {
	componentName: string;
	component: any;
	navigationOptions?: Options;
}
