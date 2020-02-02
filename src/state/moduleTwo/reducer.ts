import { ModuleTwoAction, ModuleTwoState } from './interfaces';
import { ModuleTwoActions } from './actions';

export const DEFAULT_STATE: ModuleTwoState = {
	counter: 0,
};

export default function ModuleTwoReducer(
	state: ModuleTwoState = DEFAULT_STATE,
	action: ModuleTwoAction,
) {
	const type: string = action.type;
	const incomingCounter: number = action.payload ? action.payload.counter : 0;

	switch (type) {
		case ModuleTwoActions.MODULE_TWO_ADD: {
			return {
				...state,
				counter: state.counter + incomingCounter,
			};
		}

		case ModuleTwoActions.MODULE_TWO_REDUCE: {
			return {
				...state,
				counter: state.counter - incomingCounter,
			};
		}

		default:
			return state;
	}
}
