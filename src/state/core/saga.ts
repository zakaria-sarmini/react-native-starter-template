import { take, put, fork, all, delay } from 'redux-saga/effects';

import { coreActionCreators } from './actions';
import { ICoreAddPayload } from './interfaces';
import { Action } from 'redux-actions';

export function* asyncAdd(action: Action<ICoreAddPayload>) {
	const { payload } = action;

	yield delay(2000);
	yield put(coreActionCreators.add(payload));
}

export function* watchCoreAdd() {
	while (true) {
		const action: Action<ICoreAddPayload> = yield take(coreActionCreators.add);
		yield* asyncAdd(action);
	}
}

export default function*() {
	yield all([fork(watchCoreAdd)]);
}
