import { ModuleOneAction, ModuleOneState } from './interfaces';
import { ModuleOneActions } from './actions';

export const DEFAULT_STATE: ModuleOneState = {
	counter: 0,
};

export default function ModuleOneReducer(
	state: ModuleOneState = DEFAULT_STATE,
	action: ModuleOneAction,
) {
	const type: string = action.type;
	const incomingCounter: number = action.payload ? action.payload.counter : 0;

	switch (type) {
		case ModuleOneActions.MODULE_ONE_ADD: {
			return {
				...state,
				counter: state.counter + incomingCounter,
			};
		}

		case ModuleOneActions.MODULE_ONE_REDUCE: {
			return {
				...state,
				counter: state.counter - incomingCounter,
			};
		}

		default:
			return state;
	}
}
