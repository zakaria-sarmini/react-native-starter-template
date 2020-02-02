import { ModuleOneState } from '../moduleOne/interfaces';
import { ModuleTwoState } from '../moduleTwo/interfaces';

export interface State {
	moduleOne: ModuleOneState;
	moduleTwo: ModuleTwoState;
}
