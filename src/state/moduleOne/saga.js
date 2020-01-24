import { take, put, fork, all, delay } from 'redux-saga/effects';

import { MODULE_ONE_ADD, moduleOneActionCreators } from './actions';

export function* asyncAdd({ payload }) {
	const { addedValue } = payload;

	yield delay(2000);
	// yield put(moduleOneActionCreators.add(addedValue));
}

export function* watchAdd() {
	while (true) {
		const action = yield take(MODULE_ONE_ADD);
		yield* asyncAdd(action);
	}
}

export default function*() {
	yield all([fork(watchAdd)]);
}
