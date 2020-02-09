import { ICorePayload, ICoreState } from './interfaces';
import { CoreActions } from './actions';
import { Action } from 'redux-actions';

export const DEFAULT_CORE_STATE: ICoreState = {
	counter: 0,
};

export default function CoreReducer(
	state: ICoreState = DEFAULT_CORE_STATE,
	action: Action<ICorePayload>,
) {
	const type: string = action.type;

	switch (type) {
		case CoreActions.ADD: {
			return {
				...state,
				counter: state.counter + action.payload.numberToAdd,
			};
		}

		default:
			return state;
	}
}
