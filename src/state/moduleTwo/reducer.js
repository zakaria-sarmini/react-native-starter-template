import { MODULE_TWO_ADD, MODULE_TWO_REDUCE } from './actions';

export const DEFAULT = {
	counter: 0
};

export default function moduleTwoReducer(state = DEFAULT, action = {}) {
	const { type, payload } = action;

	switch (type) {
		case MODULE_TWO_ADD: {
			return {
				...state,
				counter: state.counter + 2
			};
		}

		case MODULE_TWO_REDUCE: {
			return {
				...state,
				counter: state.counter - 2
			};
		}

		default:
			return state;
	}
}
