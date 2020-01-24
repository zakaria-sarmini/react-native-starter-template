import { take, put, fork, all, delay } from 'redux-saga/effects';

import { MODULE_TWO_ADD, moduleTwoActionCreators } from './actions';

export function* asyncAdd({ payload }) {
	const { addedCoreValue } = payload;

	yield delay(2000);
	yield put(moduleTwoActionCreators.add(addedCoreValue));
}

export function* watchAdd() {
	while (true) {
		const action = yield take(MODULE_TWO_ADD);
		yield* asyncAdd(action);
	}
}

export default function*() {
	yield all([fork(watchAdd)]);
}
