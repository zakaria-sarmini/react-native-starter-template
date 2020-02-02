import { State } from '../../state';
import { NavigationProps } from '../../navigation';
import { ModuleTwoPayload } from '../../state/moduleTwo/interfaces';

export interface ScreenTwoProps extends NavigationProps {
	add: (payload: ModuleTwoPayload) => {};
	reduce: (payload: ModuleTwoPayload) => {};
	counter: number;
}

export interface ScreenTwoState extends State {}
