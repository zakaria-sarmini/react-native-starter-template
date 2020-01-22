import { take, put, fork, all, delay } from 'redux-saga/effects';

import { MODULE_ONE_ADD, moduleOneActionCreators } from './actions';

export function* asyncTestCoreAdd({ payload }) {
	const { addedCoreValue } = payload;

	yield delay(2000);
	yield put(moduleOneActionCreators.add(addedCoreValue));
}

export function* watchCoreAdd() {
	while (true) {
		const action = yield take(MODULE_ONE_ADD);
		yield* asyncTestCoreAdd(action);
	}
}

export default function*() {
	yield all([fork(watchCoreAdd)]);
}
