import { MODULE_ONE_ADD, MODULE_ONE_REDUCE } from './actions';

export const DEFAULT = {
	counter: 0
};

export default function moduleOneReducer(state = DEFAULT, action = {}) {
	const { type, payload } = action;

	switch (type) {
		case MODULE_ONE_ADD: {
			return {
				...state,
				counter: state.counter + 1
			};
		}

		case MODULE_ONE_REDUCE: {
			return {
				...state,
				counter: state.counter - 1
			};
		}

		default:
			return state;
	}
}
